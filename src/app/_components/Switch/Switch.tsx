import React, { useState } from "react";
import classNames from "classnames";
import { Size } from "../types/size.type";
import { SwitchProps } from "./Switch.type";
import SvgMoon from "../icons/Moon";
import SvgSun from "../icons/Sun";

const sizeClasses: Record<Size, string> = {
  tiny: "switch-xs",
  small: "switch-sm",
  medium: "switch-md",
  standard: "switch-sd",
  large: "switch-lg",
};

const Switch: React.FC<SwitchProps> = ({
  isDisabled = false,
  onChange,
  dimensions = "medium",
  color = "default",
  className,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const classes = classNames("switch", className, {
    [`switch-${color}`]: color,
    [`${sizeClasses[dimensions]}`]: dimensions,
    "switch-checked": isChecked,
    "switch-unchecked": !isChecked,
    "switch-disabled": isDisabled,
  });

  return (
    <label className={classes}>
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          if (onChange) {
            onChange(e);
          }
        }}
        className="switch-input"
      />
      <span
        className={`absolute left-[8px] z-[9999] ${
          !isChecked ? "text-white" : "text-[#545957]"
        }`}
      >
        <SvgMoon />
      </span>
      <span
        className={`absolute right-[8px] z-[9999] ${
          isChecked ? "text-white" : "text-[#545957]"
        }`}
      >
        <SvgSun />
      </span>
      <span className="switch-slider" />
    </label>
  );
};

export default Switch;
