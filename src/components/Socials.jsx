import React from "react";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = () => {
  return (
    <>
      <span
        className="my-3 flex flex-wrap mx-auto justify-center items-center gap-2"
    
      >
        <a
          href="https://instagram.com/luthpai"
          className="social"
          target="__blank"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </a>
        <a
          href="https://github.com/luthpai"
          className="social"
          target="__blank"
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </span>
    </>
  );
};

export default Socials;
