import React from "react";
import classNames from "classnames";
import { Size } from "../types/size.type";
import { ButtonProps, ButtonShape } from "./Button.type";
import dynamic from "next/dynamic";
import { useLocale } from "next-intl";
import { Mobile } from "../icons";
const MobileIcon = dynamic(() => import("@/app/_components/icons/Mobile"), {
  ssr: true,
});

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  medium: "btn-md",
  standard: "btn-sd",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  default: "",
  full: "btn-block",
};

const Button: React.FC<ButtonProps> = ({
  variant = "Contained",
  dimensions = "medium",
  isDisabled = false,
  icon = <MobileIcon />,
  borderColor = "light",
  shape = "default",
  type = "button",
  children,
  className,
  ...rest
}) => {
  console.log(className, "className");

  const locale = useLocale();
  const classes = classNames("btn", classNames, {
    [`btn-${variant}`]: variant,
    [`${sizeClasses[dimensions]}`]: dimensions,
    [`${shapeClasses[shape]}`]: shape,
  });

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${className} ${classes}`}
      {...rest}
    >
      <div className="btn-text-wrapper">{children}</div>
      <div className="btn-icon">{icon}</div>
    </button>
  );
};

export default Button;
