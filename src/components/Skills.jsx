import React from "react";
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
      className="md:px-20 w-full h-fit py-12 bg-[#252525] text-gray-200 flex flex-col justify-center items-center box-border custom-transition"
    >
      <h1 className="text-4xl border-b-4 rounded-sm font-bold border-sky-600 pb-2 inline-block mx-8 mb-2" data-aos="fade-up">
        Skills
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start box-border gap-4 custom-transition">
        <div className="flex-wrap flex bg-[#343434] flex-col rounded-lg w-full md:w-fit mt-3 items-start custom-transition px-4 py-3 shadow-lg" data-aos="flip-left">
          <h1 className="text-xl font-semibold mb-2">Techs & Languages </h1>
          {techs.map((tech) => {
            const Ico = tech.ico;
            return (
              <div className="flex justify-center items-center gap-3 p-3 border-box custom-transition " data-aos="fade-right">
                <Ico className="text-xl" />
                <h1 className="md:text-lg">{tech.name}</h1>
              </div>
            );
          })}
        </div>
        <div className="flex-wrap flex bg-[#343434] flex-col rounded-lg w-full md:w-fit mt-3 items-start custom-transition px-4 py-3 shadow-lg" data-aos="flip-right">
          <h1 className="text-xl font-semibold mb-2">Tools</h1>
          {tools.map((tool) => {
            const Ico = tool.ico;
            return (
              <div className="flex justify-center items-center gap-3 p-3 border-box custom-transition" data-aos="fade-right">
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
