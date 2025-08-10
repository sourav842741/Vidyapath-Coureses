import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});


const sendMail = async (to, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: to,
    subject: "Reset Your Password",
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="text-align: center; padding-bottom: 10px;">
          <h2 style="color: #4a90e2;">Password Reset Request</h2>
        </div>
        <p style="font-size: 16px; color: #333;">
          Hello,
        </p>
        <p style="font-size: 16px; color: #333;">
          You have requested to reset your password. Please use the following OTP to proceed:
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="display: inline-block; background-color: #4a90e2; color: #fff; font-size: 24px; padding: 10px 20px; border-radius: 8px; letter-spacing: 4px;">
            ${otp}
          </span>
        </div>
        <p style="font-size: 14px; color: #666;">
          This OTP will expire in <strong>5 minutes</strong>. If you did not request this, please ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        <p style="font-size: 12px; color: #aaa; text-align: center;">
          © ${new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    `
  });
};



export default sendMail