import * as React from "react";
import type { SVGProps } from "react";
const SvgVuejs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#vuejs_svg__a)">
      <path
        fill="#fff"
        stroke="#34495E"
        strokeWidth={21.918}
        d="M19.068.33H4.931A4.603 4.603 0 0 0 .33 4.931v14.137a4.603 4.603 0 0 0 4.602 4.603h14.137a4.603 4.603 0 0 0 4.603-4.603V4.932A4.603 4.603 0 0 0 19.068.329Z"
      />
      <path
        fill="#41B883"
        d="m14.074 4.732-1.95 3.377-1.95-3.377H3.681l8.443 14.624 8.443-14.624z"
      />
      <path
        fill="#34495E"
        d="m14.074 4.732-1.95 3.378-1.95-3.378H7.058l5.066 8.775 5.066-8.775z"
      />
    </g>
    <defs>
      <clipPath id="vuejs_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVuejs;
