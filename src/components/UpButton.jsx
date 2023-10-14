import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";

const UpButton = () => {
  return (
    <a
      href="#home"
      id="upButton"
      className="fixed z-50 mb-[100vh] flex h-[45px] w-[45px] flex-col items-center justify-center rounded-full bg-sky-500 p-3 text-2xl text-white shadow-2xl hover:scale-110 hover:bg-sky-700"
      role="button"
      aria-label="Up Button"
    >
      <FontAwesomeIcon icon={faUpLong} />
    </a>
  );
};

export default UpButton;
