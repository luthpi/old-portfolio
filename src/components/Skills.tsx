import React, { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiSass,
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
      history.pushState({}, "", "/skills");
    }
  }, [isIntersecting]);
  
  interface item {
    id: number, name: string,
    ico: SVGElement
  }
  
  const langs: item[] = [
    { id: 1, name: "HTML", ico: FaHtml5 },
    { id: 2, name: "CSS", ico: FaCss3Alt },
    { id: 3, name: "Javascript", ico: BiLogoJavascript },
    { id: 4, name: "Typescript", ico: BiLogoTypescript },
    { id: 5, name: "PHP", ico: SiPhp },
  ];

  const fws: item[] = [
    { id: 1, name: "SASS", ico: SiSass },
    { id: 2, name: "Bootstrap", ico: SiBootstrap },
    { id: 3, name: "Tailwind", ico: SiTailwindcss },
    { id: 4, name: "React", ico: FaReact },
    { id: 5, name: "Vue", ico: SiVuedotjs },
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
      <div className="custom-transition box-border flex w-full flex-row items-start justify-center gap-2 px-5 md:items-stretch md:px-20">
        <div
          className="custom-transition mt-3 flex w-full flex-col flex-wrap items-start justify-stretch rounded-lg bg-[#343434] px-4 py-3 shadow-lg md:w-fit"
          data-aos="flip-left"
        >
          <h1 className="mb-2 text-[17px] font-semibold md:text-lg">
            Languages
          </h1>
          {langs.map((lang) => {
            const Ico: React.ReactElement = lang.ico;
            return (
              <div
                className="border-box custom-transition flex items-center justify-center gap-3 px-2 py-3"
                data-aos="fade-right"
                key={lang.key}
              >
                <Ico className="text-[24px]" />
                <h1 className="md:text-lg">{lang.name}</h1>
              </div>
            );
          })}
        </div>
        <div
          className="custom-transition mt-3 flex w-full flex-col flex-wrap items-start justify-stretch rounded-lg bg-[#343434] px-4 py-3 shadow-lg md:w-fit"
          data-aos="flip-right"
        >
          <h1 className="mb-2 text-[17px] font-semibold md:text-lg">
            Frameworks, etc.
          </h1>
          {fws.map((item) => {
            const Ico: React.ReactElement = item.ico;
            return (
              <div
                key={item.key}
                className="border-box custom-transition flex items-center justify-center gap-3 px-2 py-3"
                data-aos="fade-right"
              >
                <Ico className="text-[24px]" />
                <h1 className="md:text-lg">{item.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
