import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

export type ButtonShape = "default" | "full";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase & {
    shape?: ButtonShape;
    icon?: React.ReactNode;
    isLink?: boolean;
    borderColor?: "dark" | "light";
  };
