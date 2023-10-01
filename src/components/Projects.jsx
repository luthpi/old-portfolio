import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [repo, setRepo] = useState(false);
  const hoverRepo = () => setRepo(!repo);

  const projects = [
    {
      img: "null",
      title: "Oops!",
      description: "There is no project yet",
      link: "null",
      repo: "null",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-[#272727] md:px-20 w-full h-fit py-12 flex flex-col lg:flx-row flex-nowrap justify-center items-center px-8 text-white gap-x-2 gap-y-2"
    >
      <h1 className="text-4xl border-b-4 rounded-sm font-bold border-sky-600 pb-2 inline-block mx-8" data-aos="fade-up">
        Projects
      </h1>
      <div className="flex justify-center items-center flex-col md:flex-row w-[95%] gap-3 py-6 flex-wrap mx-auto">
        {projects.map((project) => {
          return (
            <div className="p-5 bg-[#303030] w-[240px] md:w-[390px] shadow-lg rounded-lg custom-transition mx-auto"
             data-aos="flip-left"
             >
              {project.img !== "null" ? (
                <img className="w-fit mb-2 mx-auto" alt="" src={project.img} />
              ) : (
                ""
              )}
              <h1 className="text-xl mb-2 font-semibold" data-aos="fade-left"> {project.title} </h1>
              <p className="mb-2"  data-aos="fade-left"> {project.description} </p>
              <span className="flex gap-2">
                {project.link !== "null" ? (
                  <a
                    href={project.link}
                    className="small-btn w-fit mt-2 group"
                    target="__blank"
                  >
                    Visit{" "}
                    <FontAwesomeIcon
                      icon={faPlane}
                      className="group-hover:ml-2 custom-transition"
                    />
                  </a>
                ) : (
                  ""
                )}
                {project.repo !== "null" ? (
                  <a
                    href={project.repo}
                    className="small-btn w-fit mt-2 group"
                    target="__blank"
                    onMouseEnter={hoverRepo}
                  >
                    Repo{" "}
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="custom-transition"
                    />
                  </a>
                ) : (
                  ""
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
