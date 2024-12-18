import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const card = () => {
  return (
    <>
      <div >
        <div className=" max-w-[1240px] p-4 md:p-0  mx-auto gap-0 grid grid-cols-1 md:grid-cols-2 "
       >
          <div className="bg-[#34AD54] bg-cover  p-6 md:p-[55px]  text-white "  style={{
          backgroundImage: "url('/2.jpg')", width:"100% ", height:"auto" ,
        }}>
            <h1 className="text-[26px] p-2">Organic Vegetables</h1>
            <p
              className="font-light leading-relaxed p-2
"
            >
              Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo
              dolor, amet lorem diam no duo sed dolore amet diam
            </p>
            <Link href="">
              <button className="flex mb-2 p-2 md:p-2">
                Read More
                <IoIosArrowRoundForward size={30} />
              </button>
            </Link>
          </div>
          <div
  className="bg-cover bg-center p-6 md:p-[55px] text-white grid items-center"
  style={{
    backgroundImage: "url('/1.jpg')",
  }}
>
            <h1 className="text-[26px] p-2">Organic Vegetables</h1>
            <p className="font-light leading-relaxed p-2 md:p-0">
              Dolor magna ipsum elitr sea erat elitr amet ipsum stet justo
              dolor, amet lorem diam no duo sed dolore amet diam
            </p>
            <Link href="">
              <button className="flex mb-2 p-2 md:p-0">
                Read More
                <IoIosArrowRoundForward size={30} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
