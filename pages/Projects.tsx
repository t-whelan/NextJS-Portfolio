"use client";
import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Bakery Website 🍰",
      description:
        "Bakery website built with React. Includes routing to different pages.",
      githubLink: "https://delicious-delights-bakery.netlify.app/",
    },
    {
      title: "Recipe App🥘",
      description: "React recipe app with mapping and navigation/routing",
      githubLink: "https://heritage-heaven-recipe-app.netlify.app/",
    },
    {
      title: "LearnHub📔",
      description: "Simple HTML , CSS BOOTSRAP Website",
      githubLink: "https://womentechsters-learnhub.netlify.app/",
    },

    {
      title: "Issue Tracker 🔨",
      description: "Mern stack issue tracker with crud operations.",
      githubLink: "https://fix-issue-k8c1.vercel.app/",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === projects.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? projects.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="projects-slider max-w-screen-lg mx-auto py-8">
      <h2 className="text-4xl text-center bg-blue-900 text-white font-bold py-8">
        Projects
      </h2>
      <div className="relative">
        <div className="flex overflow-x-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card p-4 mr-4 ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-30 scale-90"
              } transform transition-transform duration-300`}
              style={{ minWidth: "400px" }}
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="py-5 px-4">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  View
                </a>
                {/* Uncomment below if you have a live demo link */}
                {/* <a
                  href={project.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Live Demo
                </a> */}
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-full z-10"
          onClick={prevSlide}
        >
          {"<"}
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-full z-10"
          onClick={nextSlide}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
