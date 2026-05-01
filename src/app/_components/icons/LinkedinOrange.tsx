import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkedinOrange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#linkedin-orange_svg__a)">
      <path
        fill="#EF8E35"
        d="M3 21.6h3.6V8.28H3zM4.8 2.4c-1.2 0-2.16.96-2.16 2.16S3.6 6.72 4.8 6.72s2.16-.96 2.16-2.16S6 2.4 4.8 2.4m7.92 7.92V8.28h-3.6V21.6h3.6v-6.84c0-3.84 4.92-4.08 4.92 0v6.84h3.6v-8.16c0-6.48-6.84-6.24-8.52-3.12"
      />
    </g>
    <defs>
      <clipPath id="linkedin-orange_svg__a">
        <path fill="#fff" d="M.001 0h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinkedinOrange;
