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
      history.pushState({}, "", "#contact");
    }
  }, [isIntersecting]);

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
        data-aos="fade-up"
      >
        <ul className="mx-auto flex flex-col items-start gap-1 px-4">
          <li className="mx-auto mb-2 flex w-full flex-col justify-center gap-2 px-2">
            <input
              type="text"
              variant="outlined"
              id="inputName"
              name="name"
              className="h-[40px] w-full rounded-lg bg-[#343434] px-3 py-2 text-white focus:outline-0"
              placeholder="Full Name"
              spellCheck="false"
              required
            />
          </li>
          <li className="mx-auto mb-2 flex w-full flex-col justify-center gap-2 px-2">
            <input
              type="email"
              id="inputEmail"
              name="email"
              className="h-[40px] w-full rounded-lg bg-[#343434] px-3 py-2 text-white focus:outline-0"
              placeholder="Email"
              spellCheck="false"
              required
            />
          </li>
          <li className="mx-auto flex w-full flex-col justify-center gap-2 px-2">
            <textarea
              id="inputMsg"
              name="msg"
              className="h-[85px] w-full overflow-y-hidden rounded-lg bg-[#343434] px-3 py-2 text-white focus:outline-0"
              spellCheck="false"
              required
              placeholder="Message"
            ></textarea>
          </li>
          <li className="px-2">
            <button type="submit" className="btn custom-transition mt-3">
              Send <FaEnvelope className="custom-transition" />
            </button>
          </li>
        </ul>
      </form>
      {
        (window.onbeforeunload = () => {
          for (const form of document.getElementsByTagName("form")) {
            form.reset();
          }
        })
      }
    </div>
  );
};

export default Contact;
