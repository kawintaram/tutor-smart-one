import { BRAND_NAME } from "@/config";
import { BsLine } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const RegisterTutorPage = () => {
  return (
    <div>
      {/* HEADER SECTION */}
      <section className="h-max w-full text-center bg-primary p-10 md:px-12 xl:px-36">
        <h1 className="text-4xl leading-loose font-bold text-light">
          สมัครสอนกับ{" "}
          <span className="block md:inline md:w-auto">{BRAND_NAME}</span>
        </h1>
        <p className="text-xl mt-4 md:mt-0">ช่องทางในการสมัครสอนกับเรา</p>
      </section>

      {/* ADD LINE SECTION */}
      <section className="h-max w-full p-10 md:px-12 xl:px-36">
        <h3 className="text-2xl font-bold mb-6 text-primary">
          ช่องทางติดต่อ - Add Line Official{" "}
        </h3>
        <div className="w-3/4 mb-6 md:w-max">
          <p className="mb-2 font-bold">คลิ๊กเพื่อเพิ่มเพื่อน</p>
          <Link
            href="https://lin.ee/aP2rtUA"
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
            src="/images/tutor-group.jpg"
            alt="QR Code Tutor Smart One"
            width={200}
            height={200}
          />
        </div>
      </section>
    </div>
  );
};

export default RegisterTutorPage;
