import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: 'Name must be at least 2 characters.' }, { status: 400 });
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters.' }, { status: 400 });
    }

    // In a real application, you would configure nodemailer, SendGrid, or another mailer here:
    // console.log(`New portfolio contact message from ${name} <${email}>: ${message}`);

    // Simulate database write/email sending delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'An error occurred while sending the message.' }, { status: 500 });
  }
}
