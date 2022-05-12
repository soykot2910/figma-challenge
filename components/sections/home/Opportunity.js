import React, { useState } from "react";
import Image from "next/image";
import { Hand, Note, Phone } from "../../common/SVGIcons";
import { BtnContained } from "../../common/Button";

const Opportunity = () => {
  const [step, setStep] = useState(1);

  setTimeout(() => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(1);
    }
  }, 1000);

  return (
    <section className="py-40 px-4 bg-bgBack">
      <div className="flex justify-center items-center">
        <div className="w-full md:w-6/12 lg:px-10 lg:pr-28">
          <h5 className="text-main text-lg font-bold mb-3">Opportunity</h5>
          <h3 className="text-5xl font-bold text-main mb-4 ">
            We inspire people to Earn money.
          </h3>
          <p className="text-gray font-normal text-xl">
            Everyone wanna earn money in the most relaxed way. We have many
            opportunities handpicked just for you, so that you can earn money
            while you’re at home.
          </p>
          <div className="border-b-[1px] border-[#E0E0E0] my-8"></div>
          <p className="text-gray font-normal text-xl">
            What you have to do is just fill out our contact form & wait, We’ll
            contact you in no time with huge opportunities.
            <b>This could be the opportunity youve been waiting for!</b>
          </p>
          <BtnContained text="Fill form" link="/" styleClass="mt-8" />
        </div>
        <div className="w-full md:w-6/12 flex justify-center relative">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}

          <Image
            height={800}
            width={400}
            src="/images/home/mobile.png"
            alt="mobile"
          />
        </div>
      </div>
    </section>
  );
};

const Step1 = () => (
  <div className="absolute top-[40%] left-50 z-40 flex flex-col  items-center ">
    <Note />
    <h3 className="text-[#659E95] text-xl font-normal border-t-4 border-[#659E95] mt-6 pt-6">
      Step 1: Fill the form
    </h3>
  </div>
);

const Step2 = () => (
  <div className="absolute top-[40%] left-50 z-40 flex flex-col  items-center ">
    <Phone />
    <h3 className="text-[#659E95] text-xl font-normal border-t-4 border-[#659E95] mt-6 pt-6">
      Step 2: We’ll call you
    </h3>
  </div>
);

const Step3 = () => (
  <div className="absolute top-[40%] left-50 z-40 flex flex-col  items-center ">
    <Hand />
    <h3 className="text-[#659E95] text-xl font-normal border-t-4 border-[#659E95] mt-6 pt-6">
      Step 3: Earn money
    </h3>
  </div>
);

export default Opportunity;
