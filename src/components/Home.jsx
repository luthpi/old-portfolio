import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoDocumentTextOutline } from "react-icons/io5";
import unbg from "../../assets/img/unbg2.png";
import "animate.css";

const Home = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const home = useRef(null);

  useEffect(() => {
    const homeObserver = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );
    homeObserver.observe(home.current);

    return () => homeObserver.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      history.pushState({}, "", "#home");
    }
  }, [isIntersecting]);
  return (
    <div
      id="home"
      ref={home}
      className="custom-transition box-border h-[90vh] w-full bg-[#202020]"
    >
      <div className="custom-transition mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center px-8 text-white md:px-20">
        <img
          src={unbg}
          alt="Picture of my face"
          className="animate__animated animate__fadeInRight animate__faster w-[120px] rounded-full border-2 md:w-[160px] lg:w-[200px]"
        />
        <h1 className="custom-transition animate__animated animate__fadeInLeft animate__faster mt-3 text-3xl  font-semibold text-[#eaeaea] md:text-4xl lg:text-5xl">
          I'm <strong className="font-bold text-cyan-500">Luthpai</strong>
        </h1>
        <h1 className="custom-transition animate__animated animate__fadeInUp animate__fast mt-2 text-center text-lg font-semibold text-[#b7c5ce] md:text-xl lg:text-2xl">
          A Junior High School Student
        </h1>
        <p className="custom-transition animate__animated animate__fadeInUp animate__fast my-3 mt-1 max-w-[700px] text-center text-sm text-[#b7c5ce] md:text-lg lg:text-xl">
          I'm a junior high school student who loves programming
        </p>
        <div className="animate__animated animate__fadeInRight animate__fast flex flex-wrap gap-2">
          <a href="#projects" className="btn group">
            Projects
            <AiOutlineFolderOpen className="custom-transition group-hover:ml-2" />
          </a>
          <Link to="/blog" className="btn group">
            Blog
            <IoDocumentTextOutline className="custom-transition group-hover:ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
