import * as React from "react";
import type { SVGProps } from "react";
const SvgTelegram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m20.688 4.208-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42L17.82 7.282c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785L21.97 5.642c.309-1.239-.473-1.8-1.282-1.434"
    />
  </svg>
);
export default SvgTelegram;
