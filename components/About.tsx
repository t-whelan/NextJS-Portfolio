import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold py-10">Tionne Whelan</h1>
      <div className="mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96">
        <Image
          src={"/cv-image.jpg"}
          alt="cv-image"
          width={500}
          height={400}
          style={{
            borderRadius: "50%",
            display: "block",
            margin: "0 auto",
            borderStyle: "solid", // Add this to specify the border style
            borderWidth: "10px",
            borderColor: "#1E3A8A",
          }}
        />
      </div>
      <h2 className="text-4xl font-bold py-10 ">Full-Stack Web Developer</h2>

      <p className="text-2xl px-6 sm:px-10 py-6 sm:py-10 bg-black text-white">
        I am a passionate Full-Stack Web Developer specializing in The MERN
        Stack with extensive experience gained through various coding bootcamps
        and workshops. My professional journey includes affiliations with
        Melsoft and SheCodes, as well as prestigious fellowships with Microsoft
        and Google Women Techmakers through the Women Techsters program. I am
        dedicated to leveraging my skills in both front-end and back-end
        development to create impactful and innovative solutions.
      </p>
    </div>
  );
};

export default About;
