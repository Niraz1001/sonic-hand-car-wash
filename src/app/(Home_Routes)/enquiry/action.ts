"use server"
import nodemailer from "nodemailer";

export const sendMail = async ({ name, email, phone, message }: { name: string, email: string, phone:string, message: string }) => {
    
    try {

        if (!name || !email || !phone || !message) {
            return { error: "All fields are required." };
        }

        // Ensure environment variables are set
        if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
            return { error: "Missing email environment variables." };
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },

        });

        await transporter.sendMail({
            from: `"Sonic-hand-Car-Wash" <${process.env.EMAIL_USER}>`, 
            to: process.env.ADMIN_EMAIL,
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nPhone: ${phone}\nEmail:  ${email}\nMessage: ${message}`,
        });

        return { message: "Email sent successfully!" };
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email.");
    }
}
