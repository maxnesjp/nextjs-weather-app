import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Weather App</h2>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            {/* <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a> */}
          </div>
          <div className="flex space-x-6">
            <Link target="_blank" href={"https://github.com/maxnesjp"}>
              <FaGithub size={30} />
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
