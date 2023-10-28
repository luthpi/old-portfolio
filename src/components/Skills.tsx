import React, { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiBootstrap, SiVuedotjs } from "react-icons/si";
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
    id: number;
    name: string;
    ico: SVGElement;
    text: string;
    bg: string;
  }

  const langs: item[] = [
    { id: 1, name: "HTML", ico: FaHtml5, text: "white", bg: "#E34C26" },
    { id: 2, name: "CSS", ico: FaCss3Alt, text: "white", bg: "#264DE4" },
    {
      id: 3,
      name: "Javascript",
      ico: BiLogoJavascript,
      text: "white",
      bg: "#FFA500",
    },
    {
      id: 4,
      name: "Typescript",
      ico: BiLogoTypescript,
      text: "white",
      bg: "#358EF1",
    },
    { id: 5, name: "PHP", ico: SiPhp, text: "white", bg: "#474a8a" },
  ];

  const fws: item[] = [
    { id: 1, name: "SASS", ico: FaSass, text: "white", bg: "#cd6799" },
    {
      id: 2,
      name: "Bootstrap",
      ico: SiBootstrap,
      text: "white",
      bg: "#8E14FF",
    },
    {
      id: 3,
      name: "Tailwind",
      ico: SiTailwindcss,
      text: "white",
      bg: "#38BDF8",
    },
    { id: 4, name: "React", ico: FaReact, text: "white", bg: "#61dbfb" },
    { id: 5, name: "Vue", ico: SiVuedotjs, text: "white", bg: "#41b883" },
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
          className="mt-5 flex w-full flex-col items-center gap-2"
          data-aos="flip-left"
        >
          <h1 className="mb-2 text-[23px] font-semibold md:text-lg">
            Languages
          </h1>
          <div className="flex w-full flex-wrap justify-center gap-2 rounded-lg px-4 py-1">
            {langs.map((lang) => {
              const Ico: React.ReactElement = lang.ico;
              return (
                <div
                  className="border-box custom-transition flex items-center justify-center gap-3 rounded-md p-2 shadow-lg"
                  style={{ color: lang.text, backgroundColor: lang.bg }}
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
          className="mt-5 flex w-full flex-col items-center gap-2"
          data-aos="flip-left"
        >
          <h1 className="mb-2 text-[18px] font-semibold md:text-lg">
            Frameworks, Libraries, etc.
          </h1>
          <div className="flex w-full flex-wrap justify-center gap-2 rounded-lg px-4 py-1">
            {fws.map((fw) => {
              const Ico: React.ReactElement = fw.ico;
              return (
                <div
                  className="border-box custom-transition flex items-center justify-center gap-3 rounded-md p-2 shadow-lg"
                  style={{ color: fw.text, backgroundColor: fw.bg }}
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
