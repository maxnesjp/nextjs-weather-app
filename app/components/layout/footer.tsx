import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-1 sm:py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <h2 className="text-2xl font-bold">
              Weather App using React, Next, Typescript and .NET: Azure
              functions
            </h2>
          </div>
          <div className="flex space-x-6 mb-2 md:mb-0"></div>
          <div className="flex space-x-6">
            <Link
              target="_blank"
              href={"https://github.com/maxnesjp"}
              className=""
            >
              <FaGithubSquare size={30} className="hover:bg-blue-400" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/maxim-nesterov-7b31a9180/"}
              className="hover:bg-blue-400"
            >
              <BsLinkedin size={29} />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center ">
          &copy; {new Date().getFullYear()} Maxim Nesterov
        </div>
      </div>
    </footer>
  );
};

export default Footer;
