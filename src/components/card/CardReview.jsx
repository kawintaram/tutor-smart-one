import Image from "next/image";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const CardReview = ({ image, author, message, group, carousel }) => {
  return (
    <div
      className={`${carousel ? "embla__slide flex-none w-full min-w-0" : ""} `}
    >
      <div className="h-112 flex flex-col justify-center bg-primary/5 rounded-2xl py-6 my-6 mx-auto relative md:w-3/5 md:h-auto">
        <ImQuotesLeft
          size={100}
          className="absolute left-0 -top-10 fill-primary/50"
        />
        <p className="text-2xl w-3/4 mx-auto">{message}</p>
        <div className="w-64 mx-auto my-5 h-1 bg-secondary md:my-10"></div>
        <div className="flex justify-center">
          {/* <Image
          src={image}
          alt=""
          width={50}
          height={50}
          className="rounded-full bg-primary"
        /> */}
          <div className="rounded-full bg-primary w-12 h-12"></div>
          <div className="ml-2 text-left">
            <h3 className="font-bold text-primary">{author}</h3>
            <div>
              {group === 0
                ? "ผู้ปกครอง"
                : group === 1
                ? "ติวเตอร์"
                : "นักเรียน"}
            </div>
          </div>
        </div>
        <ImQuotesRight
          size={100}
          className="absolute right-0 -bottom-8 fill-primary/50"
        />
      </div>
    </div>
  );
};

export default CardReview;
