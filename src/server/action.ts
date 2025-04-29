"use server";
import { FormData } from "@/lib/types";
import nodemailer from "nodemailer";


export const sendEmail = async (formData: FormData) => {
    const { name, email, message } = formData;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMPT_USERNAME!,
            pass: process.env.SMPT_PASSWORD!,
        }
    });
     
    const mailOptions = {
        from: email,
        to: process.env.MAIL_RECEIVER_ADDRESS!,
        subject: "Work Alert",
        text: ` Message from ${name} with this email (${email}) \n\n ${message}`,
        html: ""
    };
    // send mail with defined transport object
    await transporter.sendMail(mailOptions);
    return {
        success: true,
        message: "Email sent successfully",
        error: null,
      };
      
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Email not sent",
        error: error,
      };
    }
    
};