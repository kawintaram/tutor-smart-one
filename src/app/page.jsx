"use client";
import { BRAND_NAME } from "@/config";
import { stats, contents, reviews, services } from "@/lib/data";
import { BsLine } from "react-icons/bs";
import { motion } from "framer-motion";
import Button from "@/components/button/Button";
import Image from "next/image";
import Card from "@/components/card/Card";
import CardHorizontal from "@/components/card/CardHorizontal";
import CardReview from "@/components/card/CardReview";
import Carousel from "@/components/carousel/Carousel";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
      {/* HERO SECTION */}
      <section className="h-200 text-center flex flex-col items-center justify-center md:h-128 md:text-left md:flex-row md:px-12 xl:px-36">
        <div>
          <h1 className="text-6xl leading-normal md:leading-loose font-black text-secondary md:text-5xl">
            หาครูสอนพิเศษที่เหมาะกับคุณ
          </h1>
          <p className="w-3/4 mx-auto mb-4 text-xl md:mx-0 md:text-left">
            เชื่อมต่อผู้ปกครองและนักเรียนกับครูสอนพิเศษมืออาชีพทั้งออนไลน์และออนไซต์
            เพื่อการเรียนรู้ที่มีประสิทธิภาพและตรงความต้องการ
            <br />
            (อัตราค่าเรียนเริ่มต้น 250 บาท/ชั่วโมง)
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              label="สมัครเรียน"
              type="primary"
              link="/register-student"
            />
            <Button label="สมัครสอน" link="/register-tutor" />
          </div>
        </div>
        <div>
          <Image
            src="/images/home/book-open.png"
            alt="Picture of the author"
            width={600}
            height={600}
          />
        </div>
      </section>

      {/* STAT SECTION */}
      <section className="h-max w-full text-center bg-primary p-10 md:px-12 md:py-0 xl:px-36">
        <div className="flex flex-col justify-between items-center my-6 md:h-max md:flex-row">
          {stats.map((stat, index) => {
            return (
              <>
                <div key={stat.id} className="flex justify-around items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }} // ตั้งค่าเริ่มต้นที่โปร่งใสและเลื่อนลง
                    animate={{ opacity: 1, y: 0 }} // animation เมื่อปรากฏ
                    transition={{ duration: 0.5, delay: index * 0.2 }} // ระยะเวลาและการหน่วงเวลาในการแสดงผล
                    className="text-center"
                  >
                    <p className="text-light text-4xl font-bold">
                      {stat.amount}
                    </p>

                    <p>{stat.desc}</p>
                  </motion.div>
                </div>
                {index + 1 < stats.length ? (
                  <span className="bg-light h-1 w-1/2 my-6 md:h-20 md:w-1"></span>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="h-max w-full text-center p-10 md:px-12 xl:px-36">
        <h2 className="text-4xl leading-loose font-bold text-secondary">
          ทำไมต้องเลือก <span className="text-primary">{BRAND_NAME}</span>
        </h2>
        <div className="h-[65rem] flex flex-col justify-between my-6 md:h-max md:flex-row">
          {contents.map((content) => (
            <Card
              key={content.id}
              icon={content.component}
              title={content.title}
              message={content.message}
            />
          ))}
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="h-max text-center p-10 flex flex-col justify-between items-center md:text-left md:flex-row md:items-start md:px-12 xl:px-36">
        <div className="md:w-1/2 md:pr-20">
          <h2 className="text-4xl leading-normal font-bold text-primary md:leading-loose">
            บริการของเรา
          </h2>
          <p>
            <span className="text-secondary font-bold">{BRAND_NAME}</span>{" "}
            เรามุ่งมั่นในการให้บริการที่ครอบคลุมและมีคุณภาพเพื่อช่วยผู้ปกครองและนักเรียนค้นหาครูสอนพิเศษที่เหมาะสม
            รวมถึงช่วยเหล่าติวเตอร์ในการหางานสอนที่ตรงกับความเชี่ยวชาญของพวกเขา{" "}
          </p>
          <Image
            src="/images/home/book-open-by-girl.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="mt-4"
          />
        </div>
        <div className="md:w-1/2">
          {services.map((service) => (
            <CardHorizontal
              key={service.id}
              icon={service.component}
              title={service.title}
              message={service.message}
            />
          ))}
        </div>
      </section>

      {/* REVIEW SECTION */}
      <section className="h-max w-full text-center p-10">
        <h2 className="text-4xl leading-normal font-bold text-secondary md:leading-loose">
          เสียงจากผู้ใช้ <span className="text-primary">{BRAND_NAME}</span>
        </h2>
        <p className="text-xl mt-4 md:mt-0">
          ฟังความเห็นจากผู้ปกครองและนักเรียนที่ได้ใช้บริการของเรา
        </p>
        <div className="mt-10">
          <Carousel>
            {reviews.map((review) => (
              <CardReview
                key={review.id}
                message={review.message}
                image={review.image}
                author={review.author}
                group={review.group}
                carousel={true}
              />
            ))}
          </Carousel>
        </div>
      </section>

      {/* REGISTER SECTION */}
      <section className="h-max w-full text-center p-10 md:px-12 xl:px-36">
        <h2 className="text-4xl leading-normal font-bold text-secondary md:leading-loose">
          เริ่มใช้บริการกับ <span className="text-primary">{BRAND_NAME}</span>
        </h2>
        <p className="text-xl mt-4 md:mt-0">สมัครง่าย ๆ ได้ด้วยตัวเอง</p>
        <div className="flex flex-col justify-between my-6 md:h-max md:flex-row">
          {/* For Student Box */}
          <div className="bg-primary rounded-2xl p-6 m-2 md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-light">
              สำหรับนักเรียน/ผู้ปกครอง
            </h3>
            <p className="m-2 font-bold">
              ติดต่อโดยตรงผ่านช่องทาง Line Official
              <span className="bg-dark text-sm text-yellow-400 p-2 m-2 rounded-full">
                แนะนำ
              </span>
            </p>
            <p>
              หากมีข้อสงสัยหรือมีการเปลี่ยนแปลง สามารถพูดคุยกับทีมงานได้ทันที
            </p>
            <div className="w-3/4 mx-auto my-4 md:w-2/5 lg:w-[34%]">
              <Link
                href="https://lin.ee/zVvxFtU"
                className="bg-light p-2 rounded-xl flex justify-around items-center"
              >
                <span className="text-primary inline-block">
                  <BsLine size={20} className="mr-2" />
                </span>
                Add Line Official
              </Link>
            </div>
            <div className="w-max mx-auto my-4">
              <p>Scan QR Code เพื่อเพิ่มเพื่อน</p>
              <Image
                className="rounded-xl"
                src="/images/student-group.jpg"
                alt="QR Code Tutor Smart One"
                width={200}
                height={200}
              />
            </div>

            <div className="flex justify-around items-center">
              <div className="w-12 my-5 h-1 bg-light md:w-36 md:my-10"></div>
              หรือ
              <div className="w-12 my-5 h-1 bg-light md:w-36 md:my-10"></div>
            </div>
            <p className="m-2 font-bold">กรอกแบบฟอร์มด้วยตัวเอง</p>
            <Button
              label="สมัครเรียน"
              type="secondary"
              link="/register-student"
            />
          </div>

          {/* For Tutor Box */}
          <div className="bg-light rounded-2xl p-6 m-2 md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              สำหรับติวเตอร์
            </h3>
            <p className="m-2 font-bold">
              ติดต่อโดยตรงผ่านช่องทาง Line Official
            </p>
            <p>เพื่อรับข่าวสารเกี่ยวกับงานสอน</p>
            <div className="w-3/4 mx-auto my-4 md:w-2/5 lg:w-[34%]">
              <Link
                href="https://lin.ee/aP2rtUA"
                className="bg-primary p-2 rounded-xl flex justify-around items-center text-light"
              >
                <span className="inline-block">
                  <BsLine size={20} className="mr-2" />
                </span>
                Add Line Official
              </Link>
            </div>
            <div className="w-max mx-auto my-4">
              <p>Scan QR Code เพื่อเพิ่มเพื่อน</p>
              <Image
                className="rounded-xl"
                src="/images/tutor-group.jpg"
                alt="QR Code Tutor Smart One"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
