import Image from "next/image";
import React from "react";
import source from "./../public/Spinner 0.7s 200px.svg";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image src={source} alt="loading.." />
    </div>
  );
};

export default Loading;
