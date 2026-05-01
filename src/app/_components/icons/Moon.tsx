import * as React from "react";
import type { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.354 8.28c.24 3.433 3.153 6.227 6.64 6.38a7 7 0 0 0 5.98-2.847c.546-.74.253-1.233-.66-1.066a6.3 6.3 0 0 1-1.387.093C8.667 10.707 6 7.98 5.987 4.76a5.9 5.9 0 0 1 .5-2.433c.36-.827-.073-1.22-.907-.867-2.64 1.113-4.446 3.773-4.226 6.82"
    />
  </svg>
);
export default SvgMoon;
