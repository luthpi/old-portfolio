import React, { useEffect } from "react";
import Socials from "./Socials";

const About = () => {
  return (
    <div
      id="about"
      className="box-border flex h-fit w-full flex-col items-center justify-center bg-[#232323] py-12 text-gray-200"
    >
      <h1
        className="mx-8 inline-block rounded-sm border-b-4 border-sky-600 pb-2 text-4xl font-bold"
        data-aos="fade-up"
      >
        About
      </h1>

      <div className="my-2 px-8 py-6" data-aos="fade-up">
        <p className="mx-auto w-[95%] text-center text-lg lg:w-[80%]">
          <h1 className="mb-2 block text-center text-xl font-semibold">
            Hello There!
          </h1>
          <div className="mx-auto mb-2 flex flex-col gap-3 text-center md:w-[50%]">
            <span data-aos="fade-left">
              I'm Luthfi Afriansyah. I'm into web development, I can work with
              ReactJs, TailwindCSS for Frontend and NodeJs for Backend, I was
              born in May 2009. I started learning web development since I was
              12.
            </span>
            <span data-aos="fade-right">
              I have some soft skills, I can communicate in English because I've
              been learning English since I was a child, I'm a fast learner, I
              can solve problems quickly, I always be energetic when I'm coding!
            </span>
            <span data-aos="fade-left">
              I have a GitHub page and an Instagram account! Check them out!
            </span>
            <span data-aos="fade-right">
              <Socials />
            </span>
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
