import { ArrowRight } from "./SVGIcons";

export const BtnContained = (props) => (
  <a
    href={props.link}
    className={`text-lg  flex justify-center ${
      props.iconRight && "!justify-between"
    } font-bold w-[140px] bg-main shadow-btn text-white px-6 py-3 rounded-[3.72461px] ${
      props.styleClass
    }`}
  >
    {props.text}
    {props.iconRight && <ArrowRight />}
    {props.iconLeft && <ArrowRight />}
  </a>
);

export const BtnOutline = (props) => (
  <a
    href={props.link}
    className={`text-lg font-bold text-white border-2 border-white px-6 py-3 rounded-[3.72461px] ${props.styleClass}`}
  >
    {props.text}
  </a>
);
