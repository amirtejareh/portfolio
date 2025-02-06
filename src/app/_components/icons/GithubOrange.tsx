import * as React from "react";
import type { SVGProps } from "react";
const SvgGithubOrange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#github-orange_svg__a)">
      <mask
        id="github-orange_svg__b"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M.001.03h23.97V24H.002z" />
      </mask>
      <g mask="url(#github-orange_svg__b)">
        <path
          fill="#EF8E35"
          d="M23.52 10.947 13.052.482a1.544 1.544 0 0 0-2.184 0L8.697 2.655l2.756 2.757a1.834 1.834 0 0 1 2.322 2.337l2.657 2.657a1.833 1.833 0 0 1 2.437 1.735 1.837 1.837 0 1 1-3.537-.7l-2.478-2.477v6.521a1.835 1.835 0 0 1-.813 3.483 1.836 1.836 0 0 1-.698-3.537V8.85a1.84 1.84 0 0 1-.997-2.409L7.63 3.723.452 10.898a1.546 1.546 0 0 0 0 2.184l10.466 10.466a1.545 1.545 0 0 0 2.184 0l10.417-10.417a1.546 1.546 0 0 0 0-2.184"
        />
      </g>
    </g>
    <defs>
      <clipPath id="github-orange_svg__a">
        <path fill="#fff" d="M.001 0h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGithubOrange;
