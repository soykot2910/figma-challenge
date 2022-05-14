import React from "react";
import {
  Facebook,
  Instagram,
  Logo,
  Twitter,
  YouTube,
} from "../common/SVGIcons";

const Footer = () => {
  return (
    <footer>
      <div className="flex relative">
        <div className="absolute left-[39%] top-24 flex items-center flex-col">
          <svg
            width="68"
            height="32"
            viewBox="0 0 68 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 16.0259C0.5 11.7131 2.03063 8.05593 5.0919 5.05426C8.15317 2.01809 11.8406 0.500002 16.1542 0.500002L51.8458 0.5C56.1942 0.5 59.899 2.01809 62.9603 5.05426C65.9868 8.09043 67.5 11.7476 67.5 16.0259C67.5 20.3386 65.9694 23.9958 62.9081 26.9975C59.8468 29.9992 56.1594 31.5 51.8458 31.5H16.1542C11.8058 31.5 8.11838 29.9819 5.0919 26.9457C2.03063 23.9096 0.5 20.2696 0.5 16.0259ZM15.9455 10.6953C14.3801 10.6953 13.0582 11.2474 11.9798 12.3514C10.8666 13.421 10.31 14.7321 10.31 16.2846C10.31 17.8372 10.8666 19.1656 11.9798 20.2696C13.0582 21.3737 14.3801 21.9257 15.9455 21.9257L51.7414 21.9257C53.3069 21.9257 54.6462 21.3737 55.7593 20.2696C56.8377 19.1656 57.3769 17.8372 57.3769 16.2846C57.3769 14.7321 56.8377 13.421 55.7593 12.3514C54.6462 11.2474 53.3069 10.6953 51.7414 10.6953L15.9455 10.6953Z"
              fill="#00CC83"
            />
          </svg>
          <h3 className="text-3xl font-bold text-white tracking-widest py-2">
            MINDSET.ONLINE
          </h3>
          <div className="flex justify-between gap-7 py-4">
            <Facebook />
            <Instagram />
            <Twitter />
            <YouTube />
          </div>
          <ul className="flex border-t-[1px] border-[#E0E0E0] w-full pt-4">
            <li>
              <a className="text-white px-3">Career</a>
            </li>
            <li>
              <a className="text-white px-3">Privacy</a>
            </li>
            <li>
              <a className="text-white px-3">Contact</a>
            </li>
            <li>
              <a className="text-white px-3">Video</a>
            </li>
            <li>
              <a className="text-white px-3">Blog</a>
            </li>
            <li>
              <a className="text-white px-3">Sitemap</a>
            </li>
          </ul>
          <p className="text-base text-[#628781] py-4">Copyright ©2020 Mindset.online.  All rights reserved.</p>
        </div>
        <div
          className="w-6/12 bg-main h-[485px]"
          style={{ borderTopRightRadius: "72px" }}
        ></div>
        <div
          className="w-6/12 bg-main h-[485px]"
          style={{ borderTopLeftRadius: "72px" }}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
