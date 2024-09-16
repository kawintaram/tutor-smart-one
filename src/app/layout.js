import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: {
    default: "Tutor Smart One - รวมติวเตอร์ออนไลน์และออนไซต์ที่ดีที่สุด",
    template: "%s | Tutor Smart One - รวมติวเตอร์ออนไลน์และออนไซต์ที่ดีที่สุด",
  },
  description:
    "ค้นหาติวเตอร์ที่มีคุณภาพสำหรับนักเรียนทุกระดับการศึกษา บริการติวเตอร์ออนไลน์และออนไซต์ พร้อมด้วยความคิดเห็นจากผู้ใช้จริง สมัครเรียนหรือติดต่อผ่าน Line Official ได้ง่ายๆ",
  keywords: [
    "ติวเตอร์",
    "บริการติวเตอร์",
    "หาติวเตอร์",
    "ติวเตอร์ออนไลน์",
    "ติวเตอร์ออนไซต์",
    "สมัครเรียน",
    "Tutor Smart One",
    "สมัครเรียนออนไลน์",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-lineSeed flex flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
