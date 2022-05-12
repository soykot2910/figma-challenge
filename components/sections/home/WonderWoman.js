import React from "react";
import Image from "next/image";
import { BtnContained } from "../../common/Button";

const WonderWoman = () => {
  return (
    <section className="py-40 px-4 bg-bgBack">
      <div className="flex justify-center items-center">
        <div className="w-full md:w-6/12 flex justify-center relative">
          <Image
            height={450}
            width={450}
            src="/images/home/wonder-women.png"
            alt="mobile"
          />
        </div>
        <div className="w-full md:w-6/12 lg:px-10 lg:pr-28">
          <h5 className="text-main text-lg font-bold mb-3">Wonder Woman</h5>
          <h3 className="text-5xl font-bold text-main mb-4 ">
            We inspire ‘Women on a Mission’
          </h3>
          <p className="text-gray font-normal text-xl">
            SUPER GREAT CONCEPT for women who want change in their lives and
            want to be their own boss or anyone who just wants to be a part of
            something positive are more than welcome.
          </p>
          <div className="border-b-[1px] border-[#E0E0E0] my-8"></div>
          <p className="text-gray font-bold text-xl">
            Every Wednesday evening at 9pm we offer the opportunity to be part
            of something great!
          </p>
          <BtnContained text="Fill form" link="/" styleClass="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default WonderWoman;
