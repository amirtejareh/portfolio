import * as React from "react";
import type { SVGProps } from "react";
const SvgMongodb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#mongodb_svg__a)">
      <path
        fill="#13AA52"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12"
      />
      <path
        fill="#fff"
        d="M15.208 10.534c-.758-3.345-2.55-4.445-2.742-4.866-.211-.296-.425-.823-.425-.823l-.016-.04c-.021.296-.033.41-.313.71-.434.339-2.661 2.208-2.842 6.008-.17 3.545 2.56 5.657 2.93 5.927l.041.03v-.003c.003.017.118.843.198 1.718h.29q.102-.928.304-1.84l.024-.015q.247-.178.471-.386l.017-.015a6.8 6.8 0 0 0 2.181-5.075 8 8 0 0 0-.118-1.33m-3.2 4.914s0-4.971.165-4.97c.128 0 .293 6.412.293 6.412-.227-.027-.457-1.055-.457-1.442"
      />
    </g>
    <defs>
      <clipPath id="mongodb_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMongodb;
