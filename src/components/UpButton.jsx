import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";

const UpButton = () => {
  return (
    <a
      href="#home"
      id="upButton"
      className="mb-[100vh] hover:scale-110 flex rounded-full p-3 w-[50px] h-[50px] flex-col items-center justify-center text-white bg-sky-500 hover:bg-sky-700 shadow-2xl text-2xl fixed"
      role="button"
      aria-label="Up Button"
    >
      <FontAwesomeIcon icon={faUpLong} />
    </a>
  );
};

export default UpButton;
