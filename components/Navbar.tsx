import React from "react";
import Image from "next/image";
import { Outlet, Link, useHref } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black py-5 px-5 md:px-10 lg:px-20 xl:px-32">
      <ul className="flex flex-wrap justify-center gap-4">
        <li className="text-white text-2xl hover:bg-blue-900 cursor-pointer flex items-center">
          <a
            href="https://drive.google.com/file/d/14AXQKvxcBgaGrI05inRP6kpcot8eYZYU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Download Resume
            <Image
              src="/download.svg"
              alt="download"
              width={30}
              height={20}
              className="ml-2"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
