import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    {...props}
  >
    <path fill="#E44D26" d="M8.1 35 5.6 3.75h30L33.1 35l-12.5 3.75z" />
    <path fill="#F16529" d="M33.1 6.25H20.6v30.625l10-3.125z" />
    <path
      fill="#EFEFEF"
      d="M12.475 21.875 11.225 10H30.6l-.625 3.75h-15l.625 4.375h13.75L28.1 30l-7.5 2.5-7.5-2.5-.625-6.25h3.75l.625 3.125 3.75 1.25 3.75-1.25.625-5z"
    />
  </svg>
);
export default SvgHtml;
