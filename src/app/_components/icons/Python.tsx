import * as React from "react";
import type { SVGProps } from "react";
const SvgPython = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="url(#python_svg__a)"
      fillRule="evenodd"
      d="M9.762 1.5C8.114 1.5 6.78 2.793 6.78 4.389v2h5.164v.555h-7.46c-1.647 0-2.983 1.294-2.983 2.89v4.333c0 1.595 1.336 2.888 2.984 2.888h1.72v-2.444c0-1.595 1.337-2.889 2.985-2.889h5.508c1.394 0 2.524-1.094 2.524-2.444v-4.89c0-1.595-1.335-2.888-2.983-2.888zm-.688 3.556c.57 0 1.033-.448 1.033-1 0-.553-.463-1-1.033-1s-1.033.447-1.033 1 .462 1 1.033 1"
      clipRule="evenodd"
    />
    <path
      fill="url(#python_svg__b)"
      fillRule="evenodd"
      d="M14.238 22.5c1.648 0 2.983-1.294 2.983-2.889v-2h-5.164v-.556h7.46c1.647 0 2.983-1.293 2.983-2.888V9.833c0-1.595-1.336-2.889-2.983-2.889h-1.722V9.39c0 1.595-1.336 2.889-2.983 2.889H9.303c-1.394 0-2.524 1.094-2.524 2.444v4.889c0 1.595 1.336 2.889 2.983 2.889zm.688-3.556c-.57 0-1.033.448-1.033 1 0 .553.463 1 1.033 1s1.033-.447 1.033-1-.462-1-1.033-1"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="python_svg__a"
        x1={9.361}
        x2={9.361}
        y1={1.5}
        y2={17.055}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#327EBD" />
        <stop offset={1} stopColor="#1565A7" />
      </linearGradient>
      <linearGradient
        id="python_svg__b"
        x1={14.639}
        x2={14.639}
        y1={6.944}
        y2={22.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFDA4B" />
        <stop offset={1} stopColor="#F9C600" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgPython;
