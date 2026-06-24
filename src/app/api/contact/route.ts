import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields." },
                { status: 400 }
            );
        }

        // In a real application, you would store this in a database or send an email.
        // Examples: 
        // - Send to MongoDB
        // - Send email via Resend / SendGrid
        // - Log to a Discord Webhook

        // For this portfolio, we will simulate a successful submission.
        console.log("New Contact Submission:", { name, email, message });

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        return NextResponse.json(
            { message: "Feedback submitted successfully." },
            { status: 200 }
        );

    } catch (error) {
        console.error("Contact Form Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error." },
            { status: 500 }
        );
    }
}
