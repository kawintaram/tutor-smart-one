// src/app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  const {
    studentName,
    subject,
    details,
    schedule,
    duration,
    location,
    contact,
  } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail", // ใช้บริการอีเมลของคุณ เช่น Gmail
    auth: {
      user: process.env.EMAIL_USER, // อีเมลของคุณ
      pass: process.env.EMAIL_PASS, // รหัสผ่านของอีเมล
    },
  });

  //   const mailOptions = {
  //     from: "Tutor Smart One",
  //     to: process.env.EMAIL_USER, // อีเมลของแอดมิน
  //     subject: "New Student Registration",
  //     text: `
  //       Name: ${studentName}
  //       Subject: ${subject}
  //       Details: ${details}
  //       Schedule: ${schedule}
  //       Duration: ${duration}
  //       Location: ${location}
  //       Contact: ${contact}
  //     `,
  //   };

  const mailOptions = {
    from: '"Tutor Smart One" <your-email@example.com>', // เปลี่ยนเป็นอีเมลของคุณ
    to: process.env.EMAIL_USER, // ใช้ตัวแปรที่ถูกต้องสำหรับอีเมลของแอดมิน
    subject: "ข้อมูลการลงทะเบียนใหม่",
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <h1 style="color: #1a202c;">ข้อมูลการลงทะเบียนใหม่</h1>
        <p style="font-size: 16px; color: #333;">สวัสดี Admin,</p>
        <p style="font-size: 16px; color: #333;">คุณได้รับข้อมูลการลงทะเบียนใหม่ดังนี้:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <th style="text-align: left; padding: 8px; background-color: #2b6cb0; color: white;">ฟิลด์</th>
            <th style="text-align: left; padding: 8px; background-color: #2b6cb0; color: white;">ข้อมูล</th>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">ชื่อของผู้เรียน</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${studentName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">วิชาที่ต้องการเรียน</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">ระดับชั้น ชื่อโรงเรียน และหลักสูตรที่ศึกษา</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${details}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">วัน และช่วงเวลาที่ต้องการเรียน</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${schedule}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">ระยะเวลาในการเรียน</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${duration}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">สถานที่ในการเรียน</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${location}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">เบอร์ติดต่อ หรือ ไลน์ID</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${contact}</td>
          </tr>
        </table>
        <p style="font-size: 16px; color: #333; margin-top: 20px;">ขอบคุณ!</p>
        <p style="font-size: 14px; color: #777;">ระบบการลงทะเบียนของคุณ</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
