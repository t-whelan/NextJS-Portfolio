import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <footer className="bg-black py-8">
        <p className="text-white font-semibold text-2xl text-center mb-4 md:mb-8">
          Contact me
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-8 px-4 md:px-8">
          <a
            href="https://www.linkedin.com/in/tionne-whelan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white font-semibold text-xl hover:bg-blue-900 cursor-pointer"
          >
            <Image
              src={"/linkedin.svg"}
              alt="linkedin-svg"
              width={30}
              height={20}
            />
            <span className="ml-2">Linkedin</span>
          </a>
          <a
            href="https://github.com/t-whelan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white font-semibold text-xl hover:bg-blue-900 cursor-pointer mt-4 md:mt-0"
          >
            <Image
              src={"/github.svg"}
              alt="github-svg"
              width={30}
              height={20}
            />
            <span className="ml-2">Github</span>
          </a>
          <a
            href="mailto:whelan.tionne@gmail.com"
            className="flex items-center text-white font-semibold text-xl hover:bg-blue-900 cursor-pointer mt-4 md:mt-0"
          >
            <Image
              src={"/svg-email.svg.svg"}
              alt="email-svg"
              width={30}
              height={20}
            />
            <span className="ml-2">Email</span>
          </a>
        </div>
        <p className="text-white text-lg py-5 px-8 text-center">
          Portfolio created in <a href="https://nextjs.org/">NEXTJS</a> by
          Tionne Whelan
        </p>
      </footer>
    </div>
  );
};

export default Contact;
