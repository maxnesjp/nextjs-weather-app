import React from "react";
import { ButtonProps } from "../../../types";

const CustomButton = ({ title }: ButtonProps) => {
  return (
    <div>
      <button className="border-2 border-spacing-2">{title}</button>
    </div>
  );
};

export default CustomButton;
