import React from "react";
import Image from "next/image";

const Certificates = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <h1 className="text-white text-4xl text-center bg-blue-900 font-bold w-full py-9">
        Certificates
      </h1>
      <div className="flex flex-wrap justify-center mt-6">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
          <Image src={"/codsoft.png"} alt="codsoft" width={700} height={650} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
          <Image src={"/WT -cert.png"} alt="WT-cert" width={700} height={650} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
          <Image
            src={"/IT-varsity.png"}
            alt="IT-varsity"
            width={700}
            height={650}
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
          <Image
            src={"/Javascript-cert.jpg"}
            alt="Javascript-cert"
            width={700}
            height={650}
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
          <Image src={"/SheCodes.png"} alt="SheCodes" width={700} height={50} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
          <Image src={"/melsoft.png"} alt="melsoft" width={500} height={150} />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
