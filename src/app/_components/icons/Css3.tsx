import * as React from "react";
import type { SVGProps } from "react";
const SvgCss3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#1172B8" d="m4.501 21-1.5-18.75h18L19.501 21l-7.5 2.25z" />
    <path fill="#3AD" d="M19.501 3.75h-7.5v18.375l6-1.875z" />
    <path
      fill="#EFEFEF"
      d="M14.626 13.125h-7.5L6.751 10.5l6-1.875h-6l-.375-2.25h11.625L17.626 9l-4.875 1.875h4.5L16.501 18l-4.5 1.5-4.5-1.5-.375-3.75h2.25l.375 1.875 2.25.75 2.25-.75z"
    />
  </svg>
);
export default SvgCss3;
