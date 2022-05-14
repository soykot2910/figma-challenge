import React from "react";
import { BtnContained } from "../../common/Button";

const NewsLetter = () => {
  return (
    <section className="py-32 px-24 bg-bgBack">
      <div className="bg-[#CFE5DC] p-4 lg:p-20 flex justify-center flex-col items-center">
        <h3 className="text-main font-bold text-5xl">
          Subscribe to our Newsletter.
        </h3>
        <div className="flex justify-between gap-8 items-center mt-5">
          <input
            placeholder="Press ‘C’ to type your E-mail"
            className="bg-white rounded-md px-5 py-4 w-8/12 outline-none"
          />
          <div className="w-4/12">
            <BtnContained
              link="/"
              text="Subscribe"
              styleClass="text-lg !py-4 !w-[160px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
