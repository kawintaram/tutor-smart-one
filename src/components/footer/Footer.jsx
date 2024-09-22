import { BRAND_NAME } from "@/config";
import { FaLine, FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const menus = [
  { label: " หน้าแรก", pathname: "/" },
  { label: " สมัครเรียน", pathname: "/register-student" },
  { label: " สมัครสอน", pathname: "/register-tutor" },
];

const Footer = () => {
  return (
    <div className="h-56">
      <div className="flex flex-col items-center bg-primary py-10 text-light gap-4 md:flex-row md:justify-between md:items-start md:gap-40 md:px-12 xl:px-36">
        <div className="font-black text-4xl text-secondary">
          <Link href="/">
            <Image src="/logo-white.svg" width={200} height={200} alt="" />
          </Link>
        </div>
        <div className="flex justify-around text-xl md:flex-col">
          {menus.map((menu, index) => (
            <Link
              key={`menu-${index + 1}`}
              href={menu.pathname}
              className="mr-2 md:mr-0"
            >
              {menu.label}
            </Link>
          ))}
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl text-light font-bold">ช่องทางการติดต่อ</h3>
          <div className="flex items-center">
            <FaFacebookSquare size={20} className="mr-2" /> {BRAND_NAME}{" "}
            <span className="mx-2">|</span>
            <FaLine size={20} className="mr-2" /> @tu-cututor
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <FaPhoneAlt size={15} className="mr-2" /> 062-225-9641
          </div>
        </div>
      </div>

      <div className="bg-light text-center py-2.5">© 2024 {BRAND_NAME}</div>
    </div>
  );
};

export default Footer;
