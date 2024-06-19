import React from "react";
import { ButtonProps } from "@/types";

const CustomButton = ({ title, onClick }: ButtonProps) => {
  return (
    <div>
      <button className="border-2 border-spacing-2" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
