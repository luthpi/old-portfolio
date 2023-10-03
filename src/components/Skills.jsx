import React, { useState, useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaYarn,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNodedotjs,
  SiNeovim,
  SiVisualstudiocode,
  SiManjaro,
} from "react-icons/si";

const Skills = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const skills = useRef(null);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );
    skillsObserver.observe(skills.current);

    return () => skillsObserver.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      history.pushState({}, "", "#skills")
    }
  }, [isIntersecting]);
  const techs = [
    { name: "HTML", ico: FaHtml5 },
    { name: "CSS", ico: FaCss3Alt },
    { name: "Javascript", ico: FaJs },
    { name: "Tailwind", ico: SiTailwindcss },
    { name: "NodeJs", ico: SiNodedotjs },
    { name: "React", ico: FaReact },
  ];

  const tools = [
    { name: "Manjaro Linux", ico: SiManjaro },
    { name: "Neovim", ico: SiNeovim },
    { name: "VSCode", ico: SiVisualstudiocode },
    { name: "Yarn", ico: FaYarn },
    { name: "Git", ico: FaGitAlt },
  ];

  return (
    <div
      id="skills"
      ref={skills}
      className="custom-transition box-border flex h-fit w-full flex-col items-center justify-center bg-[#252525] py-12 text-gray-200 md:px-20"
    >
      <h1
        className="mx-8 mb-2 inline-block rounded-sm border-b-4 border-sky-600 pb-2 text-4xl font-bold"
        data-aos="fade-up"
      >
        Skills
      </h1>
      <div className="custom-transition box-border flex flex-col items-center justify-center gap-4 md:flex-row md:items-stretch">
        <div
          className="custom-transition mt-3 flex w-full flex-col flex-wrap items-start rounded-lg bg-[#343434] px-4 py-3 shadow-lg md:w-fit"
          data-aos="flip-left"
        >
          <h1 className="mb-2 text-xl font-semibold">Techs & Languages </h1>
          {techs.map((tech) => {
            const Ico = tech.ico;
            return (
              <div
                className="border-box custom-transition flex items-center justify-center gap-3 p-3 "
                data-aos="fade-right"
              >
                <Ico className="text-xl" />
                <h1 className="md:text-lg">{tech.name}</h1>
              </div>
            );
          })}
        </div>
        <div
          className="custom-transition mt-3 flex w-full flex-col flex-wrap items-start rounded-lg bg-[#343434] px-4 py-3 shadow-lg md:w-fit"
          data-aos="flip-right"
        >
          <h1 className="mb-2 text-xl font-semibold">Tools</h1>
          {tools.map((tool) => {
            const Ico = tool.ico;
            return (
              <div
                className="border-box custom-transition flex items-center justify-center gap-3 p-3"
                data-aos="fade-right"
              >
                <Ico className="text-xl" />
                <h1 className="md:text-lg">{tool.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
