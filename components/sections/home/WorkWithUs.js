import React from "react";
import { BtnContained } from "../../common/Button";

const WorkWithUs = () => {
  return (
    <section className="py-32 bg-bgBack">
      <div className="w-full lg:w-[60%] mx-auto flex items-center flex-col pb-8 border-b-[1px] border-[#E0E0E0]">
        <h3 className="text-5xl font-bold text-main mb-4">
          Interested to work with us?
        </h3>
        <BtnContained
          text="JOIN - it’s free"
          link="/"
          styleClass="mt-8 !w-[290px]"
        />
      </div>
    </section>
  );
};

export default WorkWithUs;
