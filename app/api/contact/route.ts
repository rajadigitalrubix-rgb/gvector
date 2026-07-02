import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import { getAdminEmailHTML, getClientReceiptHTML } from '@/lib/email-templates';

// Global connection state for serverless environments
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  if (!process.env.MONGODB_URI) {
    console.error("Error: MONGODB_URI environment variable is not defined.");
    throw new Error("MONGODB_URI is missing");
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 3000, // 3-second connection timeout
    });
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

// Define Mongoose Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  interest: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Avoid OverwriteModelError in Serverless hot-reloads
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, interest, message, isRobotVerified } = body;
    
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: "Name, Email, and Nature of Requirement are required." },
        { status: 400 }
      );
    }

    if (!isRobotVerified) {
      return NextResponse.json(
        { error: "Security validation failed. Please verify that you are not a robot." },
        { status: 400 }
      );
    }

    let dbSaved = false;
    try {
      await connectDB();
      const newContact = new Contact({ name, company, email, phone, interest, message });
      await newContact.save();
      dbSaved = true;
      console.log("Enquiry saved successfully to MongoDB");
    } catch (dbError) {
      console.error("Database storage failed (entering email-only fallback mode):", dbError);
      // Log lead details in server logs so submission is not lost
      console.log("[FALLBACK LEAD RECORD]:", {
        name,
        company,
        email,
        phone,
        interest,
        message,
        timestamp: new Date().toISOString()
      });
    }

    // -----------------------------------------------------------
    // NODEMAILER: Email Notifications
    // (Depends on .env variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ADMIN_EMAIL)
    // -----------------------------------------------------------
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        
        // 1. Email to Admin (The Professional Lead)
        const adminMailOptions = {
          from: `"G-Vector Leads" <${process.env.SMTP_USER}>`,
          to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
          subject: `New Strategic Enquiry: ${interest} - ${name} ${!dbSaved ? '(DB Fallback Mode)' : ''}`,
          html: getAdminEmailHTML({ name, company, email, phone, interest, message })
        };

        // 2. Professional Receipt to Client
        const clientMailOptions = {
          from: `"G-Vector Realtech" <${process.env.SMTP_USER}>`,
          to: email,
          subject: `Thank you for contacting G-Vector Realtech`,
          html: getClientReceiptHTML(name, interest)
        };

        // Add await to ensure emails are sent before the function finishes
        await Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(clientMailOptions)
        ]);

      } catch (mailError) {
        console.error("Nodemailer SMTP error:", mailError);
      }
    }
    // -----------------------------------------------------------

    return NextResponse.json(
      { 
        success: true, 
        message: dbSaved 
          ? "Enquiry submitted successfully." 
          : "Enquiry submitted successfully (via backup channel)." 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Submission processing error:", error);
    return NextResponse.json(
      { error: "Server encountered an error saving the request." },
      { status: 500 }
    );
  }
}
