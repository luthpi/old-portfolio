import React, { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import {
  SiTailwindcss,
  SiPhp,
  SiBootstrap,
  SiVuedotjs,
} from "react-icons/si";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";

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
    id: number, 
    name: string,
    ico: SVGElement,
    text: string, 
    bg: string
  }
  
  const langs: item[] = [
    { id: 1, name: "HTML", ico: FaHtml5, text: "white", bg: "#303030" },
    { id: 2, name: "CSS", ico: FaCss3Alt, text: "white", bg: "#303030" },
    { id: 3, name: "Javascript", ico: BiLogoJavascript, text: "white", bg: "#303030" },
    { id: 4, name: "Typescript", ico: BiLogoTypescript, text: "white", bg: "#303030" },
    { id: 5, name: "PHP", ico: SiPhp, text: "white", bg: "#303030" },
  ];

  const fws: item[] = [
    { id: 1, name: "SASS", ico: FaSass, text: "white", bg: "#303030" },
    { id: 2, name: "Bootstrap", ico: SiBootstrap, text: "white", bg: "#303030" },
    { id: 3, name: "Tailwind", ico: SiTailwindcss, text: "white", bg: "#303030" },
    { id: 4, name: "React", ico: FaReact, text: "white", bg: "#303030" },
    { id: 5, name: "Vue", ico: SiVuedotjs, text: "white", bg: "#303030" },
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
      <div className="custom-transition box-border flex w-full flex-col items-start justify-center gap-2 px-5 md:items-stretch md:px-20">
        <div
          className="flex flex-col gap-2 mt-5 w-full items-center"
          data-aos="flip-left"
        >
          <h1 className="mb-2 text-[23px] font-semibold md:text-lg">
            Languages
          </h1>
          <div className="flex px-4 rounded-lg flex-wrap justify-center py-1 w-full gap-2">
          {langs.map((lang) => {
            const Ico: React.ReactElement = lang.ico;
            return (
              <div
                className="border-box custom-transition flex items-center justify-center gap-3 p-2 rounded-md shadow-lg"
                style={{ color: lang.text, backgroundColor : lang.bg }}
                data-aos="fade-right"
                key={lang.key}
              >
                <Ico className="text-[30px]" />
              </div>
            );
          })}
        </div>
        </div>
        <div
          className="flex flex-col gap-2 mt-5 w-full items-center"
          data-aos="flip-left"
        >
          <h1 className="mb-2 text-[18px] font-semibold md:text-lg">
            Frameworks, Libraries, etc.
          </h1>
          <div className="flex px-4 rounded-lg flex-wrap justify-center py-1 w-full gap-2">
          {fws.map((fw) => {
            const Ico: React.ReactElement = fw.ico;
            return (
              <div
                className="border-box custom-transition flex items-center justify-center gap-3 p-2 rounded-md shadow-lg"
                style={{ color: fw.text, backgroundColor : fw.bg }}
                data-aos="fade-right"
                key={fw.key}
              >
                <Ico className="text-[30px]" />
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
