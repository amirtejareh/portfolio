import React, { useState } from "react";
import classNames from "classnames";
import { Size } from "../types/size.type";
import { SwitchProps } from "./Switch.type";

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
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
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
        {...rest}
      />
      <span className="switch-slider" />
    </label>
  );
};

export default Switch;
