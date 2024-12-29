import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#1ABCFE"
      d="M12.826 12c0-1.933 1.529-3.499 3.413-3.499 1.885 0 3.412 1.565 3.412 3.5 0 1.933-1.527 3.499-3.412 3.499-1.883 0-3.413-1.565-3.413-3.5"
    />
    <path
      fill="#0ACF83"
      d="M6.001 19c0-1.933 1.528-3.501 3.412-3.501h3.413V19c0 1.932-1.529 3.5-3.413 3.5S6.001 20.932 6.001 19"
    />
    <path
      fill="#FF7262"
      d="M12.826 1.5v7h3.413c1.885 0 3.412-1.567 3.412-3.5 0-1.932-1.527-3.5-3.412-3.5z"
    />
    <path
      fill="#F24E1E"
      d="M6.001 5c0 1.933 1.528 3.5 3.412 3.5h3.413v-7H9.413C7.53 1.5 6.001 3.068 6.001 5"
    />
    <path
      fill="#A259FF"
      d="M6.001 12c0 1.934 1.528 3.5 3.412 3.5h3.413V8.501H9.413c-1.884 0-3.412 1.565-3.412 3.5"
    />
  </svg>
);
export default SvgFigma;
