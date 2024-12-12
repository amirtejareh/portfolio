import * as React from "react";
import type { SVGProps } from "react";
const SvgGit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <g clipPath="url(#git_svg__a)">
      <mask
        id="git_svg__b"
        width={41}
        height={40}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.8.05h39.95V40H.8z" />
      </mask>
      <g mask="url(#git_svg__b)">
        <path
          fill="#F03C2E"
          d="M39.998 18.246 22.554.804a2.574 2.574 0 0 0-3.64 0l-3.62 3.622 4.593 4.594a3.057 3.057 0 0 1 3.87 3.896l4.429 4.428a3.055 3.055 0 0 1 3.828 1.72 3.062 3.062 0 1 1-5.661.006l-4.13-4.13V25.81a3.06 3.06 0 1 1-3.521.579 3.1 3.1 0 0 1 1.002-.67V14.752a3.066 3.066 0 0 1-1.661-4.015l-4.53-4.53L1.552 18.163a2.576 2.576 0 0 0 0 3.64l17.444 17.444a2.576 2.576 0 0 0 3.639 0l17.363-17.363a2.576 2.576 0 0 0 0-3.64"
        />
      </g>
    </g>
    <defs>
      <clipPath id="git_svg__a">
        <path fill="#fff" d="M.8 0h40v40H.8z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGit;
