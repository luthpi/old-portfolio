import React, { useState, useEffect, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const contact = useRef(null);

  useEffect(() => {
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );
    contactObserver.observe(contact.current);

    return () => contactObserver.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      document.location.hash = "contact";
    }
  }, [isIntersecting]);
  const [inputText, setInputText] = useState("");
  const maxLength = 512;
  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const handleClick = () => {
    setInputText('');
  };
  
  return (
    <div
      id="contact"
      ref={contact}
      className="custom-transition box-border flex h-fit w-full flex-col items-center justify-center bg-[#292929] py-12 text-gray-200 md:px-20"
    >
      <h1
        className="mx-8 inline-block rounded-sm border-b-4 border-sky-600 pb-2 text-4xl font-bold"
        data-aos="fade-up"
      >
        Contact
      </h1>
      <form
        action="https://formspree.io/f/xjvzobrn"
        method="post"
        className="mx-auto mt-8 md:w-[70%]"
      >
        <ul className="mx-auto px-4">
          <li
            className="mx-auto mb-2 flex flex-col justify-center gap-2 px-2"
            data-aos="fade-left"
          >
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              id="inputName"
              name="name"
              className="h-[36px] w-full rounded-lg bg-[#343434] p-2 text-white focus:outline-0"
              placeholder="M Luthfi Afriansyah"
              spellCheck="false"
              value={inputText}
              onChange={handleChange}
              required
            />
          </li>
          <li
            className="mx-auto mb-2 flex flex-col justify-center gap-2 px-2"
            data-aos="fade-left"
          >
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              id="inputEmail"
              name="email"
              className="h-[36px] w-full rounded-lg bg-[#343434] p-2 text-white focus:outline-0"
              placeholder="luthpai.afr@gmail.com"
              spellCheck="false"
              value={inputText}
              onChange={handleChange}
              required
            />
          </li>
          <li
            className="mx-auto flex flex-col justify-center gap-2 px-2"
            data-aos="fade-left"
          >
            <label htmlFor="inputMsg">Message</label>
            <textarea
              id="inputMsg"
              name="msg"
              className="h-[85px] w-full overflow-y-hidden rounded-lg bg-[#343434] p-2 text-white focus:outline-0"
              maxLength={maxLength}
              spellCheck="false"
              required
              value={inputText}
              onChange={handleChange}
              placeholder="This form is working. Do not spam please!"
            ></textarea>
            <p data-aos="zoom-in">
              {inputText.length}/{maxLength}
            </p>
          </li>
          <li className="mx-auto px-2" data-aos="flip-left">
            <button type="submit" onClick={handleClick()} className="btn custom-transition mt-3">
              Send <FaEnvelope className="custom-transition" />
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Contact;
