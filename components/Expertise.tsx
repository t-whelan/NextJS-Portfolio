import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Expertise = () => {
  return (
    <>
      {/* expertise section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">Expertise</h1>
        <div className="mx-auto max-w-xl">
          <Image
            src={"/MERN-Stack-Development.jpg"}
            alt="mern-stack"
            width={700}
            height={450}
            className="rounded-lg"
          />
        </div>
        <p className="text-lg px-4 sm:px-8 py-4">
          As a seasoned MERN Stack Developer, I specialize in building dynamic
          and scalable web applications using a robust set of technologies. My
          expertise spans both frontend and backend development, with a
          particular focus on MERN stack (MongoDB, Express.js, React.js, and
          Node.js) and Next.js projects.
        </p>

        <p className="text-lg px-4 sm:px-8 py-4">
          I offer high-quality services in developing React.js and Next.js
          applications, landing pages, and company websites.{" "}
        </p>
        <p className="text-lg px-4 sm:px-8 py-4">
          I pride myself on delivering clean, SEO-friendly code to ensure the
          best possible user experience. Whether it&apos;s crafting intuitive
          user interfaces or implementing efficient backend solutions, I am
          committed to creating impactful and high-performance web solutions.
        </p>
      </div>
      {/* Technologies section */}
      <div className="bg-black">
        <h3 className="text-4xl text-center text-white py-10 font-bold">
          Technologies
        </h3>
        <div className="mx-auto max-w-xl">
          <Image
            src={"/nextjs-gif.gif"}
            alt="nextjs-gif"
            width={500}
            height={450}
            className="rounded-lg"
          />
        </div>
        <div className="text-lg text-white px-4 sm:px-8 py-4">
          <ul>
            <li className="py-3">
              <div className="flex items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 rounded-full overflow-hidden">
                  <Image
                    src={"/mongo-logo.png"}
                    alt="mongo-logo"
                    width={200}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <span className="text-green-700 font-bold text-2xl">
                    MongoDB
                  </span>{" "}
                  - A NoSQL database that allows for flexible and scalable data
                  management, essential for handling large volumes of data and
                  rapid development cycles.
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 rounded-full overflow-hidden">
                  <Image
                    src={"/express-logo.png"}
                    alt="express-logo"
                    width={200}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <span className="text-gray-400 font-bold text-2xl">
                    Express.js
                  </span>{" "}
                  - A minimalist web framework for Node.js that simplifies the
                  creation of server-side applications and APIs, providing a
                  robust foundation for web services.
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 rounded-full overflow-hidden">
                  <Image
                    src={"/react-logo.jpg"}
                    alt="react-logo"
                    width={200}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <span className="text-blue-300 font-bold text-2xl">
                    React.js
                  </span>{" "}
                  - A popular front-end library developed by Facebook, known for
                  its efficient and declarative approach to building user
                  interfaces. React’s component-based architecture and virtual
                  DOM enhance performance and make development more intuitive.
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 rounded-full overflow-hidden">
                  <Image
                    src={"/node-logo.png"}
                    alt="node-logo"
                    width={200}
                    height={150}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <span className="text-green-800 font-bold text-2xl">
                    Node.js
                  </span>{" "}
                  - A JavaScript runtime built on Chrome&apos;s V8 engine,
                  enabling server-side scripting and allowing developers to use
                  JavaScript for both client-side and server-side code, which
                  streamlines development and reduces context switching.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Expertise;
