import React from "react";
import classNames from "classnames";
import { StatCardProps } from "./StatCard.type";

const StatCard: React.FC<StatCardProps> = ({
  className,
  count,
  text,
  sign,
  shiningPosition,
  ...rest
}) => {
  const classes = classNames("stat-card", classNames);

  return (
    <div className="relative">
      <div className={`stat-card-shining stat-card-${shiningPosition}`}></div>

      <div className={`relative ${className} ${classes}`} {...rest}>
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
