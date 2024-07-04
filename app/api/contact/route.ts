import { NextResponse } from "next/server";
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    try {
        const { data, error } = await resend.emails.send({
            from: "no-reply@resend.dev",
            to: "ujjwalbh001@gmail.com",
            subject: "Contact from Portfolio",
            text: "",
            react: EmailTemplate({ name, email, message }),
        });

        if (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ error: "Error sending email" }, { status: 500 });
        }

        return NextResponse.json({ message: "Email sent successfully", data });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
