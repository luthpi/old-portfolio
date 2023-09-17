import React from "react";import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import unbg from "../assets/img/unbg2.png";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-[#202020] custom-transition box-border"
    >
      <div className="md:px-20 max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full text-white custom-transition">
        <img
          src={unbg}
          alt="My Face"
          className="rounded-full border-2 w-[120px] md:w-[160px] lg:w-[200px]"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 text-[#eaeaea]  custom-transition">
          I'm <strong id="name">Luthpai</strong>
        </h1>
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#b7c5ce] mt-2 custom-transition">
          A Junior High School Student
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mt-1 my-3 text-[#b7c5ce] max-w-[700px] custom-transition text-center">
          I'm a junior high school student who loves programming
        </p>
        <div className="flex flex-wrap">
          <a href="#projects" className="btn group">
            My Projects!
            <FontAwesomeIcon
              icon={faArrowRight}
              className="group-hover:ml-2 custom-transition"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
