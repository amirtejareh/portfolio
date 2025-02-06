import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { StatCardProps } from "./StatCard.type";
import { useThemeStore } from "@/stores/darkmode.store";

const StatCard: React.FC<StatCardProps> = ({
  className,
  count,
  text,
  sign,
  shiningPosition,
  ...rest
}) => {
  const classes = classNames("stat-card", classNames);
  const [visible, setVisible] = useState("hidden");
  useEffect(() => {
    setTimeout(() => {
      setVisible("visible");
    }, 1000);
  }, []);

  const { isDarkMode } = useThemeStore();

  return (
    <div className="relative">
      <div
        className={`${visible} -z-10  ${
          shiningPosition === "right"
            ? "stat-card-shining-right"
            : "stat-card-shining"
        } stat-card-${shiningPosition}`}
      ></div>

      <div
        className={`${
          isDarkMode
            ? "border-statCardBorder !text-[#CBCBCB]  bg-[linear-gradient(90deg,_rgba(33,33,30,0.08)_0%,_rgba(33,33,30,0.8)_100%)]"
            : "border-[#EF8E35] !text-[#767575] "
        } relative ${className} ${classes}`}
        {...rest}
      >
        <div className="stat-card-count relative z-10">
          {count}
          {sign ?? "+"}
        </div>
        <div className="stat-card-text relative z-10">{text}</div>
      </div>
    </div>
  );
};

export default StatCard;
