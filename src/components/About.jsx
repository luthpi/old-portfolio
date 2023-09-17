import React from "react";
import Socials from "./Socials";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-fit py-12 bg-[#232323] text-gray-200 flex flex-col justify-center items-center box-border"
    >
      <h1 className="text-4xl border-b-4 rounded-sm font-bold border-sky-600 pb-2 inline-block mx-8">
        About
      </h1>

      <div className="py-6 my-2 px-8">
        <p className="text-lg w-[95%] lg:w-[80%] text-center mx-auto">
          <h1 className="text-xl block text-center font-semibold mb-2">
            Hello There!
          </h1>
          <div className="mb-2 mx-auto text-center md:w-[50%]">
            I'm Luthfi Afriansyah. I'm into web development, I can work with ReactJs, TailwindCSS for Frontend and NodeJs for Backend,
          I was born in May 2009. I started learning web development since I was 12.
            <br /> <br />
            I have a GitHub page and an Istagram account! Check them out!
      
            <Socials />
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
