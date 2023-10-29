import React from "react";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Socials = (props: object) => {
  return (
    <div data-aos={props.aos ? props.aos : ""}>
      <span className="mx-auto my-3 flex flex-wrap items-center justify-center gap-2">
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
    </div>
  );
};

export default Socials;
