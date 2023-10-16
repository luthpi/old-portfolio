import React, { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import {
  SiSass,
  SiTailwindcss,
  SiPhp,
  SiNextdotjs,
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

  const langs = [
    { name: "HTML", ico: FaHtml5 },
    { name: "CSS", ico: FaCss3Alt },
    { name: "Javascript", ico: BiLogoJavascript },
    { name: "Typescript", ico: BiLogoTypescript },
    { name: "PHP", ico: SiPhp },
  ];

  const fws = [
    { name: "SASS", ico: SiSass },
    { name: "Tailwind", ico: SiTailwindcss },
    { name: "Bootstrap", ico: SiBootstrap },
    { name: "Next", ico: SiNextdotjs },
    { name: "React", ico: FaReact },
    { name: "Vue", ico: SiVuedotjs },
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
      <div className="custom-transition box-border flex w-full flex-row items-center items-stretch justify-center gap-2 px-5 md:px-20">
        <div
          className="custom-transition mt-3 flex w-full flex-col flex-wrap items-start rounded-lg bg-[#343434] px-4 py-3 shadow-lg md:w-fit"
          data-aos="flip-left"
        >
          <h1 className="mb-2 text-[17px] font-semibold md:text-lg">
            Languages
          </h1>
          {langs.map((lang) => {
            const Ico = lang.ico;
            return (
              <div
                className="border-box custom-transition flex items-center justify-center gap-3 px-2 py-3"
                data-aos="fade-right"
              >
                <Ico className="text-[24px]" />
                <h1 className="md:text-lg">{lang.name}</h1>
              </div>
            );
          })}
        </div>
        <div
          className="custom-transition mt-3 flex w-full flex-col flex-wrap items-start rounded-lg bg-[#343434] px-4 py-3 shadow-lg md:w-fit"
          data-aos="flip-right"
        >
          <h1 className="mb-2 text-[17px] font-semibold md:text-lg">
            Frameworks, etc.
          </h1>
          {fws.map((item) => {
            const Ico = item.ico;
            return (
              <div
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
