import React, { useEffect } from "react";
import Socials from "./Socials";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-fit py-12 bg-[#232323] text-gray-200 flex flex-col justify-center items-center box-border"
    >
      <h1
        className="text-4xl border-b-4 rounded-sm font-bold border-sky-600 pb-2 inline-block mx-8"
        data-aos="fade-up"
      >
        About
      </h1>

      <div className="py-6 my-2 px-8" data-aos="fade-up">
        <p className="text-lg w-[95%] lg:w-[80%] text-center mx-auto">
          <h1 className="text-xl block text-center font-semibold mb-2">
            Hello There!
          </h1>
          <div className="mb-2 mx-auto text-center md:w-[50%] flex flex-col gap-3">
            <span>
              I'm Luthfi Afriansyah. I'm into web development, I can work with
              ReactJs, TailwindCSS for Frontend and NodeJs for Backend, I was
              born in May 2009. I started learning web development since I was
              12.
            </span>
            <span>
              I have some soft skills, I can communicate in English because I've
              been learning English since I was a child, I'm a fast learner, I
              can solve problems quickly, I always be energetic when I'm coding!
            </span>
            <span>
              I have a GitHub page and an Instagram account! Check them out!
            </span>
          </div>
          <Socials />
        </p>
      </div>
    </div>
  );
};

export default About;
