import * as React from "react";
import type { SVGProps } from "react";
const SvgFlutter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path fill="#40D0FD" d="m19.229 22.895 4.2-4.092h10.437l-9.245 9.245z" />
    <path fill="#41D0FD" d="m6.134 20.156 5.249 5.374L33.866 2.86H23.43z" />
    <path
      fill="#1FBCFD"
      d="m13.97 28.099 5.324 5.245 5.327-5.297-5.392-5.152z"
    />
    <path fill="#095A9D" d="m19.294 33.344 5.327-5.297 9.115 9.22H23.241z" />
    <path fill="#0E5199" d="m19.294 33.344 4.964-1.652-1.673-1.62z" />
  </svg>
);
export default SvgFlutter;
