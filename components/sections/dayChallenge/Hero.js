import React from "react";
import { BtnContained } from "../../common/Button";

const Hero = () => {
  return (
    <div className="bg-[#DEF6EA] h-[80vh] pt-10">
      <div className="container py-20 relative">
        <div className="w-full md:w-[48%] text-center mx-auto flex items-center flex-col ">
          <h3 className="text-5xl font-bold">
            Live happier & healthier with 21 DAY Challenge
          </h3>
          <p className="font-normal text-2xl py-4">
            Wanna reduce few pounds? Want a happy & healthier lifestyle? Then
            the /#/21DC is definitely for you.
          </p>
          <BtnContained link="/" text="Can we help?" styleClass="text-xs" />
        </div>
        <div className="absolute left-[30%] w-full lg:w-[960px] flex py-12 z-40 justify-center items-center top-[99%] bg-white rounded-md shadow-slideBox">
          <img src="/images/21dc/women.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
