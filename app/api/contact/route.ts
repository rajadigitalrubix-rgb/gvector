import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

// Global connection state for serverless environments
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  if (!process.env.MONGODB_URI) {
    console.error("Error: MONGODB_URI environment variable is not defined.");
    throw new Error("MONGODB_URI is missing");
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI);
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
    await connectDB();
    
    const body = await request.json();
    const { name, company, email, phone, interest, message } = body;
    
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: "Name, Email, and Nature of Requirement are required." },
        { status: 400 }
      );
    }

    const newContact = new Contact({ name, company, email, phone, interest, message });
    await newContact.save();

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
        });
        
        // 1. Email to Admin (You)
        const adminMailOptions = {
          from: `"G-Vector Website Leads" <${process.env.SMTP_USER}>`,
          to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
          subject: `New Enquiry: ${interest} - ${name}`,
          text: `New Lead captured via website.\n\nName: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nArea of Interest: ${interest}\nMessage/Brief:\n${message || 'N/A'}\n\nSubmitted timestamp: ${new Date().toLocaleString()}`
        };

        // 2. Thank You Receipt to Client
        const clientMailOptions = {
          from: `"G-Vector Realtech" <${process.env.SMTP_USER}>`,
          to: email,
          subject: `Thank you for contacting G-Vector Realtech`,
          text: `Dear ${name},\n\nThank you for reaching out to G-Vector Realtech regarding your interest in ${interest}. We have successfully received your enquiry.\n\nOur advisory team is reviewing your requirements and will be in touch with you shortly to schedule a strategy session.\n\nBest Regards,\nThe G-Vector Realtech Team\ncontact@gvectorrealtech.com`
        };

        // Fire emails asynchronously
        Promise.all([
          transporter.sendMail(adminMailOptions),
          transporter.sendMail(clientMailOptions)
        ]).catch(err => console.error("Nodemailer SMTP sending error:", err));

      } catch (mailConfigError) {
        console.error("Nodemailer configuration error:", mailConfigError);
      }
    }
    // -----------------------------------------------------------

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully." },
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
