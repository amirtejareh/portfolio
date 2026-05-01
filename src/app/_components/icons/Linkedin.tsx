import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#linkedin_svg__a)">
      <path
        fill="#fff"
        d="M3.023 22.092h3.6V8.772h-3.6zm1.8-19.2c-1.2 0-2.16.96-2.16 2.16s.96 2.16 2.16 2.16 2.16-.96 2.16-2.16-.96-2.16-2.16-2.16m7.92 7.92v-2.04h-3.6v13.32h3.6v-6.84c0-3.84 4.92-4.08 4.92 0v6.84h3.6v-8.16c0-6.48-6.84-6.24-8.52-3.12"
      />
    </g>
    <defs>
      <clipPath id="linkedin_svg__a">
        <path fill="#fff" d="M.023.491h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinkedin;
