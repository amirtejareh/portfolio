import * as React from "react";
import type { SVGProps } from "react";
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 12.334a4.333 4.333 0 1 0 0-8.667 4.333 4.333 0 0 0 0 8.667"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.76 12.76-.086-.087m0-9.347.086-.086zM3.24 12.76l.087-.087zM8 1.386v-.053zm0 13.28v-.053zM1.387 8h-.054zm13.28 0h-.053zM3.327 3.326 3.24 3.24z"
    />
  </svg>
);
export default SvgSun;
