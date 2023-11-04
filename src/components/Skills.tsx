import React, { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import {
  SiTailwindcss,
  SiPhp,
  SiBootstrap,
  SiVuedotjs,
  SiNextdotjs,
  SiSvelte,
  SiAlpinedotjs,
  SiExpress,
  SiCsharp,
  SiBlazor,
} from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoFlask,
} from "react-icons/bi";

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
      history.pushState({}, "", "#skills");
    }
  }, [isIntersecting]);

  interface item {
    id: number;
    name: string;
    ico: SVGElement;
    text: string;
    bg: string;
  }

  const langs: item[] = [
    { id: 1, name: "HTML", ico: FaHtml5 },
    { id: 2, name: "CSS", ico: FaCss3Alt },
    {
      id: 3,
      name: "Javascript",
      ico: BiLogoJavascript,
    },
    {
      id: 4,
      name: "Typescript",
      ico: BiLogoTypescript,
    },
    { id: 5, name: "PHP", ico: SiPhp },
    { id: 6, name: "Python", ico: BiLogoPython },
    { id: 7, name: "CSharp", ico: SiCsharp },
  ];

  const fes: item[] = [
    { id: 1, name: "SASS", ico: FaSass },
    {
      id: 2,
      name: "Bootstrap",
      ico: SiBootstrap,
    },
    {
      id: 3,
      name: "Tailwind",
      ico: SiTailwindcss,
    },
    { id: 4, name: "React", ico: FaReact },
    { id: 5, name: "Vue", ico: SiVuedotjs },
    { id: 6, name: "Alpine", ico: SiAlpinedotjs },
    { id: 7, name: "Next", ico: SiNextdotjs },
    { id: 8, name: "Svelte", ico: SiSvelte },
    { id: 9, name: "Blazor", ico: SiBlazor },
  ];

  const bes: item[] = [
    {
      id: 1,
      name: "Express",
      ico: SiExpress,
    },
    {
      id: 2,
      name: "Flask",
      ico: BiLogoFlask,
    },
    { id: 3, name: "Next", ico: SiNextdotjs },
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
        Skillset
      </h1>
      <div className="custom-transition box-border flex w-full flex-col items-center justify-center gap-2 px-5 md:items-stretch md:px-20">
        <div
          className="mt-2 flex w-full flex-col items-center gap-2"
          data-aos="flip-left"
        >
          <h1 className="mb-2 text-[23px] font-semibold md:text-lg">
            Languages
          </h1>
          <div className="flex w-[80vw] flex-wrap justify-center gap-2 rounded-lg px-4 py-1 md:w-full">
            {langs.map((lang) => {
              const Ico: React.ReactElement = lang.ico;
              return (
                <div className="border-box custom-transition flex items-center justify-center gap-3 rounded-md bg-[#303030] p-2 shadow-lg">
                  <Ico className="text-[30px]" />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="mt-2 flex flex-col items-center gap-2"
          data-aos="flip-left"
        >
          <h1 className="mb-2 text-[23px] font-semibold md:text-lg">
            Front End
          </h1>
          <div className="flex w-[80vw] flex-wrap justify-center gap-2 rounded-lg px-4 py-1 md:w-full">
            {fes.map((fe) => {
              const Ico: React.ReactElement = fe.ico;
              return (
                <div
                  className="border-box custom-transition flex items-center justify-center gap-3 rounded-md bg-[#303030] p-2 shadow-lg"
                  style={{ color: fe.text, backgroundColor: fe.bg }}
                  data-aos="fade-right"
                  key={fe.key}
                >
                  <Ico className="text-[30px]" />
                </div>
              );
            })}
          </div>
          <div
            className="mt-2 flex w-full flex-col items-center gap-2"
            data-aos="flip-left"
          >
            <h1 className="mb-2 text-[23px] font-semibold md:text-lg">
              Back End
            </h1>
            <div className="flex w-[80vw] flex-wrap justify-center gap-2 rounded-lg px-4 py-1 md:w-full">
              {bes.map((be) => {
                const Ico: React.ReactElement = be.ico;
                return (
                  <div
                    className="border-box custom-transition flex items-center justify-center gap-3 rounded-md bg-[#303030] p-2 shadow-lg"
                    style={{ color: be.text, backgroundColor: be.bg }}
                    data-aos="fade-right"
                    key={be.key}
                  >
                    <Ico className="text-[30px]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
