import * as React from "react";
import type { SVGProps } from "react";
const SvgDocker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#1794D4"
      d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5"
    />
    <path
      fill="#fff"
      d="M13.5 5.25H12v1.5h1.5zM7.5 7.5H9V9H7.5zM4.501 12.706C4.63 14.882 5.925 18 10.5 18c5.1 0 7.375-3.75 7.875-5.625C19 12.375 20.4 12 21 10.5c-.375-.375-1.875-.375-2.625 0 0-.6-.375-1.875-1.125-2.25-.5.5-1.275 1.8-.375 3C16.5 12 15.5 12 15 12H5.207c-.397 0-.73.31-.706.706M6.75 9.75h-1.5v1.5h1.5z"
    />
    <path
      fill="#fff"
      d="M7.5 9.75H9v1.5H7.5zM11.25 9.75h-1.5v1.5h1.5zM12 9.75h1.5v1.5H12zM15.75 9.75h-1.5v1.5h1.5zM11.25 7.5h-1.5V9h1.5zM12 7.5h1.5V9H12z"
    />
  </svg>
);
export default SvgDocker;
