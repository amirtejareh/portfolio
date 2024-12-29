import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml5 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#E44D26" d="m4.501 21-1.5-18.75h18L19.501 21l-7.5 2.25z" />
    <path fill="#F16529" d="M19.501 3.75h-7.5v18.375l6-1.875z" />
    <path
      fill="#EFEFEF"
      d="M7.126 13.125 6.376 6h11.625l-.375 2.25h-9l.375 2.625h8.25L16.501 18l-4.5 1.5-4.5-1.5-.375-3.75h2.25l.375 1.875 2.25.75 2.25-.75.375-3z"
    />
  </svg>
);
export default SvgHtml5;
