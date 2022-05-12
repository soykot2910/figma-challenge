import React from "react";
import Image from "next/image";
import { BtnContained } from "../../common/Button";

const About = () => {
  return (
    <section className="py-32 px-20 bg-bgBack">
      <div className="flex justify-center items-center">
        <div className="w-6/12">
          <div
            className="w-[472px] h-[444px] bg-center bg-cover bg-no-repeat relative"
            style={{ background: "url('/images/home/about.png')" }}
          >
            <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]">
              <Image
                src="/images/home/about-women.png"
                className="rounded-md"
                height={300}
                width={287}
                layout="fixed"
                alt="about img"
              />
            </div>
          </div>
        </div>
        <div className="w-6/12">
          <h5 className="text-main text-lg font-bold mb-3">About us</h5>
          <h3 className="text-5xl font-bold text-main mb-4">
            We inspire people to Healthy life.
          </h3>
          <p className="text-gray font-normal text-xl">
            We inspire people to active, fit & financialy balanced life by
            offering them <b>business opportunity</b> and.
          </p>
          <p className="mt-6 mb-2 text-gray font-normal text-xl">
            You can feel too-much relax when you have a side income-source. What
            can be more peaceful than <b>earning extra cents while you’re home </b>in
            this situation! We’ll give you that opportunity. be connected to get
            offered!
          </p>
          <div className="mt-10">
          <BtnContained link="/" text="Get Offered!"  styleClass="text-lg !py-4 !w-[160px]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
