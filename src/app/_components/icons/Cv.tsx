import * as React from "react";
import type { SVGProps } from "react";
const SvgCv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={140}
    height={140}
    fill="none"
    {...props}
  >
    <circle
      cx={70}
      cy={70}
      r={46}
      fill="#242625"
      fillOpacity={0.8}
      stroke="#EFEFEF"
      strokeWidth={2}
    />
    <circle cx={70} cy={70} r={59} fill="#252224" fillOpacity={0.5} />
    <circle cx={70} cy={70} r={70} fill="#252224" fillOpacity={0.3} />
    <path
      stroke="#EF8E35"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3.5}
      d="m67.592 49.033 3.733 3.733 3.733-3.733M71.325 37.834v14.83"
    />
    <path
      stroke="#EF8E35"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={3.5}
      d="M83.166 49.763c0 6.446-4.375 11.666-11.666 11.666s-11.667-5.22-11.667-11.666"
    />
    <path
      fill="#EF8E35"
      d="M59.848 98.32q-2.944 0-4.896-1.088a7.15 7.15 0 0 1-2.912-3.04q-.992-1.952-1.088-4.544-.032-1.312-.032-2.816 0-1.505.032-2.88.096-2.592 1.088-4.544a7.15 7.15 0 0 1 2.912-3.04q1.952-1.088 4.896-1.088 2.208 0 3.872.608 1.665.608 2.752 1.632 1.12 1.024 1.696 2.304.576 1.248.64 2.592a.52.52 0 0 1-.192.48.65.65 0 0 1-.48.192h-1.76a.86.86 0 0 1-.512-.16q-.192-.16-.288-.576-.544-2.496-2.048-3.424Q62.056 78 59.816 78q-2.56 0-4.064 1.472-1.505 1.44-1.632 4.64a75 75 0 0 0 0 5.376q.128 3.2 1.632 4.672 1.504 1.44 4.064 1.44 2.24 0 3.712-.928 1.504-.928 2.048-3.424.096-.416.288-.576.225-.16.512-.16h1.76q.288 0 .48.192.224.192.192.48a7.2 7.2 0 0 1-.64 2.624q-.577 1.248-1.696 2.272-1.088 1.025-2.752 1.632-1.665.608-3.872.608M79.221 98q-.48 0-.768-.224-.256-.225-.416-.608l-7.136-20.576a1.1 1.1 0 0 1-.064-.352q0-.255.192-.448a.61.61 0 0 1 .448-.192h1.664q.384 0 .576.224.225.192.256.352l6.272 18.144 6.272-18.144q.064-.16.256-.352.192-.225.576-.224h1.664q.255 0 .448.192.225.192.224.448 0 .16-.064.352l-7.168 20.576a1.25 1.25 0 0 1-.416.608q-.255.225-.736.224z"
    />
  </svg>
);
export default SvgCv;
