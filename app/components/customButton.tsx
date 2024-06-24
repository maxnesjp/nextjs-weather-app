import React from "react";
import { ButtonProps } from "@/types";

const CustomButton = ({ title, onClick }: ButtonProps) => {
  return (
    <button
      className="size-full bg-blue-500 py-2 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none "
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
