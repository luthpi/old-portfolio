import React from "react";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const projects = useRef(null);

  useEffect(() => {
    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );
    projectsObserver.observe(projects.current);

    return () => projectsObserver.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      history.pushState({}, "", "#projects");
    }
  }, [isIntersecting]);
  const [repo, setRepo] = useState(false);
  const hoverRepo = () => setRepo(!repo);

  interface project {
    id: number,
    img: string | null,
    title: string,
    description: string,
    link: string | null,
    repo: string | null
  }
  
  const projectsData: project[] = [
    {
      id: 1,
      img: null,
      title: "Oops!",
      description: "There is no project yet",
      link: null,
      repo: null,
    }
  ];

  return (
    <div
      id="projects"
      ref={projects}
      className="lg:flx-row flex h-fit w-full flex-col flex-nowrap items-center justify-center gap-x-2 gap-y-2 bg-[#272727] px-4 py-12 text-white md:px-20"
    >
      <h1
        className="mx-8 inline-block rounded-sm border-b-4 border-sky-600 pb-2 text-4xl font-bold"
        data-aos="fade-up"
      >
        Projects
      </h1>
      <div className="mx-auto flex w-[100%] flex-col flex-wrap items-center justify-center gap-3 py-4 md:flex-row">
        {projectsData.map((project) => {
          return (
            <div
              className="custom-transition w-[80vw] rounded-lg bg-[#303030] py-2 px-4 shadow-lg md:w-[40%]"
              data-aos="flip-left"
              key={project.id}
            >
              {project.img !== null ? (
                <img className="mx-auto rounded-lg w-fit" alt="" src={project.img} />
              ) : (
                ""
              )}
              <h1 className="text-xl mt-2 font-semibold">
                {" "}
                {project.title}{" "}
              </h1>
              <p className="mb-2">
                {" "}
                {project.description}{" "}
              </p>
              <span className="flex gap-2">
                {project.link !== null ? (
                  <a
                    href={project.link}
                    className="small-btn group w-fit"
                    target="__blank"
                  >
                    Visit{" "}
                    <FontAwesomeIcon
                      icon={faPlane}
                      className="custom-transition group-hover:ml-2"
                    />
                  </a>
                ) : (
                  ""
                )}
                {project.repo !== null ? (
                  <a
                    href={project.repo}
                    className="small-btn group w-fit"
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
