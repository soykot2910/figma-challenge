import React from "react";
import About from "../components/sections/home/About";
import Blog from "../components/sections/home/Blog";
import Freebie from "../components/sections/home/Freebie";
import Hero from "../components/sections/home/Hero";
import Inspired from "../components/sections/home/Inspired";
import NewsLetter from "../components/sections/home/NewsLetter";
import Opportunity from "../components/sections/home/Opportunity";
import Services from "../components/sections/home/Services";
import WonderWoman from "../components/sections/home/WonderWoman";
import WorkWithUs from "../components/sections/home/WorkWithUs";

const index = () => {
  return (
    <>
      <Hero />
      <main className="container">
        <About />
        <Services />
        <Opportunity />
        <WonderWoman />
        <Inspired />
        <WorkWithUs />
        <Freebie />
        <Blog />
        <NewsLetter />
      </main>
    </>
  );
};

export default index;
