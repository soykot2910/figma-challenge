import React from "react";
import ReactPlayer from "react-player";

const Inspired = () => {
  return (
    <section className="py-30 px-8 bg-bgBack">
      <div className="text-center">
        <h3 className="text-5xl font-bold text-main mb-8">
          We inspire people to Understand us.
        </h3>
        <p className="text-gray font-normal text-xl w-full lg:w-[45%] mx-auto">
          Not yet sure about what we do here? This short video will break your
          confusion, and will lead you to a ‘Door of Opportunity’!
        </p>
      </div>
      <div className="px-20 py-20">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="640px"
          controls={true}
        />
      </div>
    </section>
  );
};

export default Inspired;
