import * as React from "react";
import type { SVGProps } from "react";
const SvgCss = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path fill="#1172B8" d="M7.5 35 5 3.75h30L32.5 35 20 38.75z" />
    <path fill="#3AD" d="M32.5 6.25H20v30.625l10-3.125z" />
    <path
      fill="#EFEFEF"
      d="M24.375 21.875h-12.5L11.25 17.5l10-3.125h-10l-.625-3.75H30L29.375 15l-8.125 3.125h7.5L27.5 30 20 32.5 12.5 30l-.625-6.25h3.75l.625 3.125 3.75 1.25 3.75-1.25z"
    />
  </svg>
);
export default SvgCss;
