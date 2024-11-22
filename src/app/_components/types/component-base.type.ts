import { Size } from "./size.type";
import { Variant } from "./variant.type";

export type ComponentBase = {
  dimensions?: Size;
  variant?: Variant;
  isDisabled?: boolean;
  className?: string;
};
