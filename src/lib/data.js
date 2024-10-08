import {
  PiCertificate,
  PiBookOpenText,
  PiNumberCircleOne,
  PiNumberCircleTwo,
  PiNumberCircleThree,
} from "react-icons/pi";
import { MdSupportAgent, MdOutlineManageSearch } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";

export const stats = [
  {
    id: 1,
    amount: "5,000+",
    desc: "ติวเตอร์มากประสบการณ์",
  },
  {
    id: 2,
    amount: "8,000+",
    desc: "ผู้เรียน",
  },
  {
    id: 3,
    amount: "7 ปี",
    desc: "ของการให้บริการ",
  },
  {
    id: 4,
    amount: "100%",
    desc: "ผู้ปกครองการันตีความสำเร็จ",
  },
];

export const contents = [
  {
    id: 1,
    title: "ครูสอนพิเศษคุณภาพสูง",
    message:
      "เราคัดสรรครูสอนพิเศษที่มีประสบการณ์และความเชี่ยวชาญในหลากหลายวิชาเพื่อให้แน่ใจว่าลูกของคุณจะได้รับการสอนที่ดีที่สุด",
    component: <PiCertificate size={80} />,
  },
  {
    id: 2,
    title: "การเรียนรู้ที่ยืดหยุ่น",
    message:
      "ไม่ว่าคุณจะต้องการเรียนออนไลน์หรือออนไซต์ เรามีทางเลือกที่ยืดหยุ่นให้คุณเลือกตามความสะดวกและความต้องการของคุณ",
    component: <PiBookOpenText size={80} />,
  },
  {
    id: 3,
    title: "การสนับสนุนที่ใส่ใจ",
    message:
      "ทีมงานของเราพร้อมที่จะให้ความช่วยเหลือและตอบคำถามคุณทุกขั้นตอน เพื่อให้ประสบการณ์การเรียนรู้ของคุณราบรื่นและมีประสิทธิภาพ",
    component: <MdSupportAgent size={80} />,
  },
];

export const services = [
  {
    id: 1,
    title: "หาครูสอนพิเศษ",
    message:
      "ค้นหาครูสอนพิเศษที่ตรงกับความต้องการของคุณ ทั้งในด้านวิชาและระดับการศึกษา เรามีครูสอนพิเศษที่เชี่ยวชาญในหลากหลายวิชา ไม่ว่าจะเป็นคณิตศาสตร์, วิทยาศาสตร์, ภาษาอังกฤษ, และอื่นๆ ครูสอนพิเศษของเราผ่านการคัดสรรอย่างพิถีพิถัน เพื่อให้แน่ใจว่าลูกของคุณจะได้รับการสอนที่มีประสิทธิภาพและมีคุณภาพสูงสุด",
    component: <FaUsersViewfinder size={40} />,
  },
  {
    id: 2,
    title: "หางานสอนสำหรับติวเตอร์",
    message:
      "ช่วยเหล่าติวเตอร์ในการหางานสอนที่เหมาะสมตามความเชี่ยวชาญและพื้นที่ให้บริการ เรามีระบบที่ช่วยให้คุณสามารถสร้างโปรไฟล์และแสดงทักษะของคุณให้ผู้ปกครองและนักเรียนเห็นได้อย่างง่ายดาย ด้วยโปรไฟล์ที่โดดเด่นและรายละเอียดชัดเจน ติวเตอร์สามารถเชื่อมต่อกับนักเรียนและผู้ปกครองที่ต้องการการสอนในวิชาต่างๆ ได้อย่างรวดเร็วและมีประสิทธิภาพ",
    component: <MdOutlineManageSearch size={40} />,
  },
];

export const reviews = [
  {
    id: 1,
    image: "",
    author: "มณีรัตน์",
    message:
      "บริการดีมาก ลูกได้เรียนกับครูที่เชี่ยวชาญและเข้าใจในวิชาเรียน การสนับสนุนจากทีมงานก็ดีมากค่ะ",
    group: 0,
  },
  {
    id: 2,
    image: "",
    author: "สมชาย",
    message:
      "เว็บไซต์นี้ช่วยให้เราหางานสอนที่ตรงกับความสามารถของเราได้ง่าย ๆ ตอนนี้มีนักเรียนเพิ่มขึ้นและมีความสุขในการสอนมากขึ้น",
    group: 1,
  },
  {
    id: 3,
    image: "",
    author: "สุวรรณา",
    message:
      "การหาครูสอนพิเศษผ่านเว็บไซต์นี้ง่ายและสะดวกมาก ครูที่เราเลือกเข้าใจความต้องการของลูกเราเป็นอย่างดี",
    group: 0,
  },
  {
    id: 4,
    image: "",
    author: "น้องมิ้นท์",
    message:
      "เรียนกับครูที่เจอผ่านเว็บไซต์นี้สนุกและเข้าใจง่าย ครูใจดีและสอนเนื้อหาที่เราต้องการได้ตรงจุด",
    group: 2,
  },
  {
    id: 5,
    image: "",
    author: "เจน",
    message:
      "มีทีมงานคอยช่วยเหลือตลอด ทำให้เราเจอนักเรียนที่ต้องการจริง ๆ ได้งานสอนที่เหมาะสมและสอนสนุกมาก",
    group: 1,
  },
];

// export const howtoTutor = [
//   {
//     id: 1,
//     title: "Add LINE Official ของ [BRAND_NAME]",
//     message:
//       "เพิ่ม LINE ID ของ [BRAND_NAME] เป็นเพื่อน นี่คือช่องทางหลักที่เราใช้ในการอัปเดตงานสอนต่างๆ เมื่อมีผู้เรียนหรือผู้ปกครองให้ความสนใจ",
//     component: <PiNumberCircleOne size={80} />,
//   },
//   {
//     id: 2,
//     title: "ส่ง Resume หรือข้อมูลของคุณเพื่อใช้ในการสมัคร",
//     message:
//       "หากมีวิชาที่คุณสนใจหรือสะดวกในการสอน แจ้งรหัสงานสอนพร้อมส่ง Resume หรือข้อมูลโปรไฟล์ของคุณให้เราเพื่อเสนอให้กับผู้เรียนหรือผู้ปกครอง",
//     component: <PiNumberCircleTwo size={80} />,
//   },
//   {
//     id: 3,
//     title: "เชื่อมต่อกับผู้เรียน/ผู้ปกครอง",
//     message:
//       "คุณจะได้รับช่องทางการติดต่อกับผู้เรียนหรือผู้ปกครองเมื่อโปรไฟล์ได้รับการสนใจ โดยโอนค่าผ่านทาง?",
//     component: <PiNumberCircleThree size={80} />,
//   },
// ];
