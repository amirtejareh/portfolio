import * as React from "react";
import type { SVGProps } from "react";
const SvgGithub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#github_svg__a)">
      <mask
        id="github_svg__b"
        width={24}
        height={25}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.023.52h23.971v23.971H.024z" />
      </mask>
      <g mask="url(#github_svg__b)">
        <path
          fill="#fff"
          d="M23.542 11.438 13.076.973a1.544 1.544 0 0 0-2.184 0L8.719 3.147l2.757 2.756a1.834 1.834 0 0 1 2.321 2.338l2.657 2.656a1.83 1.83 0 0 1 2.297 1.032 1.837 1.837 0 1 1-3.396.004l-2.478-2.478v6.521a1.837 1.837 0 1 1-1.512-.054v-6.58a1.84 1.84 0 0 1-.996-2.41L7.65 4.214.474 11.39a1.546 1.546 0 0 0 0 2.184L10.941 24.04a1.546 1.546 0 0 0 2.183 0l10.418-10.418a1.546 1.546 0 0 0 0-2.184"
        />
      </g>
    </g>
    <defs>
      <clipPath id="github_svg__a">
        <path fill="#fff" d="M.023.491h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGithub;
