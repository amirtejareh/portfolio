import { HTMLAttributes } from "react";
type ShiningPosition = "top" | "right" | "bottom";
export type StatCardProps = HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  isLink?: boolean;
  text: string;
  count: number;
  sign?: string;
  shiningPosition?: ShiningPosition;
  borderColor?: "dark" | "light";
};
