import React, { useEffect, useRef, useState } from "react";
import Socials from "./Socials";

const About = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const about = useRef(null);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );
    aboutObserver.observe(about.current);

    return () => aboutObserver.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      history.pushState({}, "", "#about");
    }
  }, [isIntersecting]);
  return (
    <div
      ref={about}
      id="about"
      className="box-border flex h-fit w-full flex-col items-center justify-center bg-[#232323] py-12 text-gray-200"
    >
      <h1
        className="mx-8 inline-block rounded-sm border-b-4 border-sky-600 pb-2 text-4xl font-bold"
        data-aos="fade-up"
      >
        About
      </h1>

      <div className="my-2 px-4 py-6" data-aos="fade-up">
        <div className="mx-auto w-[95%] text-center text-[14px] md:text-lg lg:w-[80%]">
          <h1
            className="mb-2 block text-center text-2xl font-semibold"
            data-aos="fade-left"
          >
            Hello There! 👋🏻
          </h1>
          <div
            className="mx-auto mb-2 flex w-fit flex-col gap-3 rounded-xl bg-[#303030] px-5 py-4 text-left text-[15px] md:w-[75%] md:text-lg"
            data-aos="fade-right"
          >
            <span>
              I'm <strong>Luthfi Afriansyah</strong>. I'm into web development,
              especially front end. I can work with some JavaScript frameworks
              or libraries like <strong>React, Vue, Alpine and Svelte</strong>.
              But I use React the most because I came from React Ecosystem. I
              can also use Nextjs. I always use Tailwind for styling.
            </span>
            <span>
              I was born in May 2009. I started learning about web development
              since I was 13. My dad handed me keyboard and mouse when I was 4.
              I also use Linux, although I'm a distro hooper.
            </span>
            <span>
              I can speak English, I'm a fast learner, I can solve problems
              quickly, I always be energetic when I'm coding!
            </span>
            <span>I have a GitHub and Instagram account! Check them out!</span>
          </div>
          <Socials aos="fade-up" />
        </div>
      </div>
    </div>
  );
};

export default About;
