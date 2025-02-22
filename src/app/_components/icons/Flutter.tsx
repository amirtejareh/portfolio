import * as React from "react";
import type { SVGProps } from "react";
const SvgFlutter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#40D0FD" d="m11.537 13.737 2.52-2.456h6.263l-5.547 5.547z" />
    <path fill="#41D0FD" d="m3.68 12.093 3.15 3.225L20.32 1.715h-6.262z" />
    <path
      fill="#1FBCFD"
      d="m8.382 16.86 3.194 3.147 3.197-3.178-3.236-3.092z"
    />
    <path fill="#095A9D" d="m11.576 20.006 3.197-3.178 5.469 5.531h-6.297z" />
    <path fill="#0E5199" d="m11.576 20.007 2.978-.991-1.003-.973z" />
  </svg>
);
export default SvgFlutter;
