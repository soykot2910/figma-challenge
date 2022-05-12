import React from "react";
import Hero from "../common/Hero";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="container">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
