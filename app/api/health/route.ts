import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET() {
  const isConnected = mongoose.connection.readyState === 1;
  return NextResponse.json({
    status: "OK",
    database: isConnected ? "connected" : "disconnected"
  });
}
