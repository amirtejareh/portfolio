import * as React from "react";
import type { SVGProps } from "react";
const SvgTailwind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#44A8B3"
      d="M6.75 10.275q1.05-4.2 5.25-4.2c4.2 0 4.725 3.15 6.825 3.675q2.1.525 3.675-1.575-1.05 4.2-5.25 4.2c-4.2 0-4.725-3.15-6.825-3.675q-2.1-.525-3.675 1.575m-5.25 6.3q1.05-4.2 5.25-4.2c4.2 0 4.725 3.15 6.825 3.675q2.1.525 3.675-1.575-1.05 4.2-5.25 4.2c-4.2 0-4.725-3.15-6.825-3.675q-2.1-.525-3.675 1.575"
    />
  </svg>
);
export default SvgTailwind;
