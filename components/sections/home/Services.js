import React from "react";
import Image from "next/image";
import { BtnOutline } from "../../common/Button";

const Services = () => {
  return (
    <section className="py-30 px-3 bg-bgBack">
      <div className="text-center w-full lg:w-[70%] mx-auto border-b-[1px] border-[#E0E0E0]">
        <h5 className="text-main text-lg font-bold mb-3">Our services</h5>
        <h3 className="text-5xl font-bold text-main mb-4">
          Most popular services
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8 overflow-hidden">
        <div className="col-span-2 relative">
          <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[10%]">
            <h3 className="text-4xl font-bold text-white mb-16">
              Fit for Life
            </h3>
            <BtnOutline link="/" text="Know More" styleClass="text-lg !py-4" />
          </div>
          <img
            src="/images/home/fit-for-life.png"
            className="h-[290px] w-full rounded-md"
            alt="service"
          />
        </div>
        <div className="relative">
          <div className="absolute left-[50%] text-center top-[50%] transform -translate-x-[50%] -translate-y-[20%]">
            <h3 className="text-4xl font-bold text-white mb-12">
              Company Presentation
            </h3>
            <BtnOutline link="/" text="Know More" styleClass="text-lg !py-4" />
          </div>
          <img
            src="/images/home/company-presentation.jpg"
            className="h-[290px] w-full rounded-md"
            alt="service"
          />
        </div>
        <div className="relative">
          <div className="absolute left-[50%] text-center top-[50%] transform -translate-x-[50%] -translate-y-[20%]">
            <h3 className="text-4xl font-bold text-white mb-12">
              Become Coach
            </h3>
            <BtnOutline link="/" text="Know More" styleClass="text-lg !py-4" />
          </div>
          <img
            src="/images/home/become-coach.png"
            className="h-[290px] w-full rounded-md"
            alt="service"
          />
        </div>
        <div className="relative">
          <div className="absolute left-[50%] text-center top-[50%] transform -translate-x-[50%] -translate-y-[20%]">
            <h3 className="text-4xl font-bold text-white mb-12">
              21 Day Challenge
            </h3>
            <BtnOutline link="/" text="Know More" styleClass="text-lg !py-4" />
          </div>
          <img
            src="/images/home/challenge.png"
            className="h-[290px] w-full rounded-md"
            alt="service"
          />
        </div>
        <div className="relative">
          <div className="absolute left-[50%] text-center top-[50%] transform -translate-x-[50%] -translate-y-[10%]">
            <h3 className="text-4xl font-bold text-white mb-16">Fit Check</h3>
            <BtnOutline link="/" text="Know More" styleClass="text-lg !py-4" />
          </div>
          <img
            src="/images/home/fit-check.png"
            className="h-[290px] w-full rounded-md"
            alt="service"
          />
        </div>
        <div className="col-span-2 relative">
          <div className="absolute left-[50%] text-center top-[50%] transform -translate-x-[50%] -translate-y-[10%]">
            <h3 className="text-4xl font-bold text-white mb-16">
              Online Workout
            </h3>
            <BtnOutline link="/" text="Know More" styleClass="text-lg !py-4" />
          </div>
          <img
            src="/images/home/online-workout.png"
            className="h-[290px] w-full rounded-md"
            alt="service"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
