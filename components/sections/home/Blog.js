import React from "react";

const Blog = () => {
  return (
    <section className="bg-bgBack py-32 px-24">
      <div className="text-center w-full lg:w-[70%] mx-auto relative before:absolute before:w-[270px] before:content-[''] before:border-b-[1px] before:border-[#E0E0E0] before:left-[35%] before:-bottom-[30%]">
        <h5 className="text-main text-lg font-bold mb-3">Blog</h5>
        <h3 className="text-5xl font-bold text-main mb-4">
          Read our blog to be inspired!
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-8 pt-20">
        <div className="shadow-blogBox">
          <img
            src="/images/home/blog-1.png"
            className="w-full"
            alt="blog img"
          />
          <div className="py-3 px-4">
            <p className="text-gray">Fitness</p>
            <h3 className="text-2xl font-bold text-main py-2">
              Having ‘exhausted all day’ problem? Get solution.
            </h3>
            <p className="text-base font-bold text-gray">
              You may be too exhausted even to mana ge your daily affairs. In
              most cases, there’s a reason for the fatigue. It might be allergic
              rhinitis, anemia, depression, fibromyalgia, chronic kidney
              disease, liver disease, lung disease (COPD), or some other health
              condition
            </p>
            <div className="flex justify-between mt-12">
              <img src="/images/home/avater.png" className="rounded-full " />
              <p className="text-gray font-medium">3 min read</p>
            </div>
          </div>
        </div>
        <div className="shadow-blogBox">
          <img
            src="/images/home/blog-2.png"
            className="w-full"
            alt="blog img"
          />
          <div className="py-3 px-4">
            <p className="text-gray">Earning</p>
            <h3 className="text-2xl font-bold text-main py-2">
              Ways of earning cents while staying home in the ‘New Normal’.
            </h3>
            <p className="text-base font-bold text-gray">
              You may be too exhausted even to mana ge your daily affairs. In
              most cases, theres a reason for the fatigue. It might be allergic
              rhinitis, anemia, depression, fibromyalgia, chronic kidney
              disease, liver disease, lung disease (COPD), or some other health
              condition
            </p>
            <div className="flex justify-between mt-12">
              <img src="/images/home/avater.png" className="rounded-full " />
              <p className="text-gray font-medium">3 min read</p>
            </div>
          </div>
        </div>
        <div className="shadow-blogBox">
          <img
            src="/images/home/blog-3.png"
            className="w-full"
            alt="blog img"
          />
          <div className="py-3 px-4">
            <p className="text-gray">Fitness</p>
            <h3 className="text-2xl font-bold text-main py-2">
              Stay fit in lockdown with online workout.
            </h3>
            <p className="text-base font-bold text-gray">
              You may be too exhausted even to mana ge your daily affairs. In
              most cases, theres a reason for the fatigue. It might be allergic
              rhinitis, anemia, depression, fibromyalgia, chronic kidney
              disease, liver disease, lung disease (COPD), or some other health
              condition
            </p>
            <div className="flex justify-between mt-12">
              <img src="/images/home/avater.png" className="rounded-full " />
              <p className="text-gray font-medium">3 min read</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
