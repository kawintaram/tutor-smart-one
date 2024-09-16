"use client";
import { BRAND_NAME } from "@/config";
import { BsLine } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

// export const metadata = {
//   title: `สมัครเรียนกับ ${BRAND_NAME}`,
//   description: "About page description",
// };

const RegisterStudentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = await axios.post("/api/send-email", data);
      // console.log("response", response);
      if (response.status === 200) {
        setIsSending(false);
        toast.success("ข้อมูลถูกส่งเรียบร้อยแล้ว!");
        reset(); // Clear form fields
        window.scrollTo(0, 0); // Scroll to the top
      } else {
        setIsSending(false);
        throw new Error(response.data.error || "ไม่สามารถส่งข้อมูลได้");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSending(false);
      toast.error("การส่งข้อมูลล้มเหลว!");
    }
  };

  return (
    <div>
      {/* HEADER SECTION */}
      <section className="h-max w-full text-center bg-primary p-10 md:px-12 xl:px-36">
        <h1 className="text-4xl leading-loose font-bold text-light">
          สมัครเรียนกับ {BRAND_NAME}
        </h1>
        <p className="text-xl mt-4 md:mt-0">
          สำหรับน้กเรียนหรือผู้ปกครอง สามารถสมัครง่าย ๆ ได้ด้วยตัวเอง
        </p>
      </section>

      {/* ADD LINE SECTION */}
      <section className="h-max w-full p-10 md:px-12 xl:px-36">
        <h3 className="text-2xl font-bold mb-6 text-primary">
          ช่องทางที่ 1 - Add Line Official{" "}
          <span className="bg-dark text-lg text-yellow-400 p-2 m-2 rounded-full">
            แนะนำ
          </span>
        </h3>
        <div className="w-3/4 mb-6 md:w-max">
          <p className="mb-2 font-bold">คลิ๊กเพื่อเพิ่มเพื่อน</p>
          <Link
            href="https://lin.ee/zVvxFtU"
            className="bg-primary p-2 rounded-xl flex justify-around items-center"
          >
            <span className="text-light inline-block">
              <BsLine size={20} className="mr-2" />
            </span>
            Add Line Official
          </Link>
        </div>
        <div className="w-max mb-6">
          <p className="mb-2 font-bold"> Scan QR Code เพื่อเพิ่มเพื่อน</p>
          <Image
            className="rounded-xl border-dark border-2"
            src="/images/student-group.jpg"
            alt="QR Code Tutor Smart One"
            width={200}
            height={200}
          />
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="h-max w-full p-10 md:px-12 xl:px-36">
        <h3 className="text-2xl font-bold mb-2 text-primary">
          ช่องทางที่ 2 - กรอกข้อมูลด้วยตัวเอง
        </h3>
        <p>ทีมงานจะติดต่อกลับไปอีกครั้งเมื่อมีติวเตอร์ที่ผ่านการพิจารณา</p>

        {/* FORM  */}
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl m-auto">
          <h1 className="text-2xl text-center font-bold text-primary mb-4">
            ลงทะเบียนเรียน
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-4">
              <label htmlFor="studentName" className="block text-dark">
                ชื่อของผู้เรียน <span className="text-red-500">*</span>
              </label>
              <input
                id="studentName"
                type="text"
                placeholder="เด็กชาย A (ชื่อเล่น AA)"
                {...register("studentName", {
                  required: "ชื่อของผู้เรียนเป็นข้อมูลที่จำเป็น",
                })}
                className="w-full px-3 py-2 border border-secondary rounded"
              />
              <p className="text-gray-600">ตัวอย่าง: เด็กชาย A (ชื่อเล่น AA)</p>
              {errors.studentName && (
                <p className="text-red-500">{errors.studentName.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-dark">
                วิชาที่ต้องการเรียน <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                type="text"
                placeholder="วิชาคณิต"
                {...register("subject", {
                  required: "วิชาที่ต้องการเรียนเป็นข้อมูลที่จำเป็น",
                })}
                className="w-full px-3 py-2 border border-secondary rounded"
              />
              <p className="text-gray-600">ตัวอย่าง: วิชาคณิต</p>
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="details" className="block text-dark">
                ระดับชั้น ชื่อโรงเรียน และหลักสูตรที่ศึกษา{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="details"
                placeholder="ป.4 โรงเรียนBCDF หลักสูตร EP"
                {...register("details", {
                  required: "ข้อมูลนี้เป็นข้อมูลที่จำเป็น",
                })}
                className="w-full px-3 py-2 border border-secondary rounded"
              />
              <p className="text-gray-600">
                ตัวอย่าง: ป.4 โรงเรียนBCDF หลักสูตร EP
              </p>
              {errors.details && (
                <p className="text-red-500">{errors.details.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="schedule" className="block text-dark">
                วัน และช่วงเวลาที่ต้องการเรียน{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                id="schedule"
                type="text"
                placeholder="จ พ ศ 16.00-18.00 (ให้ผู้สอนเลือกสอน2วัน)"
                {...register("schedule", {
                  required: "วันและช่วงเวลาที่ต้องการเรียนเป็นข้อมูลที่จำเป็น",
                })}
                className="w-full px-3 py-2 border border-secondary rounded"
              />
              <p className="text-gray-600">
                ตัวอย่าง: จ พ ศ 16.00-18.00 (ให้ผู้สอนเลือกสอน 2 วัน)
              </p>
              {errors.schedule && (
                <p className="text-red-500">{errors.schedule.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="duration" className="block text-dark">
                ระยะเวลาในการเรียน <span className="text-red-500">*</span>
              </label>
              <input
                id="duration"
                type="text"
                placeholder="เรียนต่อเนื่องเรื่อยๆ"
                {...register("duration", {
                  required: "ระยะเวลาในการเรียนเป็นข้อมูลที่จำเป็น",
                })}
                className="w-full px-3 py-2 border border-secondary rounded"
              />
              <p className="text-gray-600">ตัวอย่าง: เรียนต่อเนื่องเรื่อยๆ</p>
              {errors.duration && (
                <p className="text-red-500">{errors.duration.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-dark">
                สถานที่ในการเรียน <span className="text-red-500">*</span>
              </label>
              <input
                id="location"
                type="text"
                placeholder="ซอยร่วมสุขสันต์222"
                {...register("location", {
                  required: "สถานที่ในการเรียนเป็นข้อมูลที่จำเป็น",
                })}
                className="w-full px-3 py-2 border border-secondary rounded"
              />
              <p className="text-gray-600">ตัวอย่าง: ซอยร่วมสุขสันต์222</p>
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="contact" className="block text-dark">
                เบอร์ติดต่อ หรือ ไลน์ID <span className="text-red-500">*</span>
              </label>
              <input
                id="contact"
                type="text"
                placeholder="0991234567 , ID : tu-cututor"
                {...register("contact", {
                  required: "เบอร์ติดต่อหรือ LINE ID เป็นข้อมูลที่จำเป็น",
                })}
                className="w-full px-3 py-2 border border-secondary rounded"
              />
              <p className="text-gray-600">
                ตัวอย่าง: 0991234567 , ID : tu-cututor
              </p>
              {errors.contact && (
                <p className="text-red-500">{errors.contact.message}</p>
              )}
            </div>

            <div className="w-full text-center">
              <button
                type="submit"
                disabled={isSending ? true : false}
                className={`${
                  isSending ? "bg-gray-400" : "bg-primary"
                } text-white px-4 py-2 rounded`}
              >
                ส่งข้อมูล
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default RegisterStudentPage;
