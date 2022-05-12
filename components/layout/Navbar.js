import React from "react";
import { BtnContained } from "../common/Button";
import { Logo } from "../common/SVGIcons";

 const Navbar = () => {
  return (
    <>
      <nav className="bg-[#DEF6EA] py-8">
        <div className="container flex items-center justify-between">
          <Logo />
          <div className="flex items-center">
            <ul className="flex">
              <li>
                <a href="#">21 Day Challenge</a>
              </li>
              <li>
                <a href="/3">Fit 4 Life</a>
              </li>
              <li>
                <a href="/3">Company Presentaion</a>
              </li>
              <li>
                <a href="/3">Contact Us</a>
              </li>
            </ul>
            <div className="pl-20 -mr-40">
              <BtnContained link="/" text="Job Offer"  styleClass="text-lg"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar