import React from "react";
import { BtnContained } from "./Button";

const Hero = () => {
  return (
    <div className="bg-[#DEF6EA] h-[88vh]">
      <div className="container py-20">
        <div className="flex items-center">
          <div className="w-full md:w-6/12 px-0 lg:px-20 ">
            <h3 className="text-lg md:text-6xl px-0 md:pr-32 font-bold text-main">
              Life changing Diet.
            </h3>
            <p className="font-bold pr-0 md:pr-20  py-10 text-base md:text-xl text-[#6B7177]">
              Make a difference in your life with our Diet Plan and Job
              Opportunity!
            </p>
            <BtnContained iconRight link="/" text="LET'S WORK" styleClass="text-base !w-[203px] py-5" />
          </div>
          <div className="w-full md:w-6/12">
            <img src="/images/hero-diet.png" />
          </div>
        </div>
      </div>
      <div className="w-[90%] flex items-center justify-between pt-10">
          <img src="/images/hero-food.png"/>
          <BtnContained link="/" text="Can we help?" styleClass="text-xs"/>
      </div>
    </div>
  );
};

export default Hero;