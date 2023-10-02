import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import unbg from "../assets/img/unbg2.png";
import "animate.css";

const Home = () => {
  return (
    <div
      id="home"
      className="custom-transition box-border h-[100vh] w-full bg-[#202020]"
    >
      <div className="custom-transition mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center px-8 text-white md:px-20">
        <img
          src={unbg}
          alt="Picture of my face"
          className="animate__animated animate__fadeInRight animate__faster w-[120px] rounded-full border-2 md:w-[160px] lg:w-[200px]"
        />
        <h1 className="custom-transition animate__animated animate__fadeInLeft animate__faster mt-3 text-3xl  font-semibold text-[#eaeaea] md:text-4xl lg:text-5xl">
          I'm <strong id="name">Luthpai</strong>
        </h1>
        <h1 className="custom-transition animate__animated animate__fadeInUp animate__fast mt-2 text-center text-lg font-semibold text-[#b7c5ce] md:text-xl lg:text-2xl">
          A Junior High School Student
        </h1>
        <p className="custom-transition animate__animated animate__fadeInUp animate__fast my-3 mt-1 max-w-[700px] text-center text-sm text-[#b7c5ce] md:text-lg lg:text-xl">
          I'm a junior high school student who loves programming
        </p>
        <div className="animate__animated animate__fadeInRight animate__fast flex flex-wrap">
          <a href="#projects" className="btn group">
            My Projects!
            <FontAwesomeIcon
              icon={faArrowRight}
              className="custom-transition group-hover:ml-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
