import React from "react";
import Image from "next/image";
import { BtnContained } from "../../common/Button";

const Freebie = () => {
  return (
    <section className="bg-bgBack py-32 px-24">
      <div className="text-center w-full lg:w-[70%] mx-auto relative before:absolute before:w-[270px] before:content-[''] before:border-b-[1px] before:border-[#E0E0E0] before:left-[35%] before:-bottom-[30%]">
        <h5 className="text-main text-lg font-bold mb-3">Freebie</h5>
        <h3 className="text-5xl font-bold text-main mb-4">
          Download our freebies
        </h3>
      </div>
      <div className="flex justify-between pt-20">
        <div className="w-full lg:w-6/12">
          <Image
            height={450}
            width={450}
            src="/images/home/book.png"
            alt="mobile"
          />
        </div>
        <div className="w-full lg:w-6/12">
          <h3 className="text-4xl font-medium text-main mb-4">
            Get our free Magazine.
          </h3>
          <ol className="list-disc ml-0 md:ml-8">
            <li className="text-main text-lg font-medium py-2">
              Do you want to eat healthier?
            </li>
            <li className="text-main text-lg font-medium py-2">
              Do you want tips about a more active life?
            </li>
            <li className="text-main text-lg font-medium py-2">
              Do you want a lifestyle where you are bursting with energy?
            </li>
            <li className="text-main text-lg font-medium py-2">
              Do you want tips about a more active life?
            </li>
            <li className="text-main text-lg font-medium py-2">
              Do you want a routine for staying refreshed?
            </li>
          </ol>
          <h3 className="text-2xl  font-bold text-main mb-6 mt-14">
            Then this book is the right fit for you.
          </h3>
          <BtnContained
            link="/"
            text="Download"
            styleClass="text-lg !py-4 !w-[160px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Freebie;
