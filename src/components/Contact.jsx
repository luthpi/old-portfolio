import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="md:px-20 w-full h-fit py-12 bg-[#292929] text-gray-200 flex flex-col justify-center items-center box-border custom-transition"
    >
      <h1 className="text-4xl border-b-4 rounded-sm font-bold border-sky-600 pb-2 inline-block mx-8">
        Contact
      </h1>
      <form
        action="https://formspree.io/f/xjvzobrn"
        method="post"
        className="mt-8 mx-auto"
      >
        <ul className="mx-auto px-4">
          <li className="flex flex-col justify-center gap-2 mx-auto mb-2 px-2">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              id="inputName"
              name="name"
              className="bg-[#343434] text-white rounded-lg h-[36px] w-full focus:outline-0 p-2"
              placeholder="M Luthfi Afriansyah"
              spellCheck="false"
              required
            />
          </li>
          <li className="flex flex-col justify-center gap-2 mx-auto mb-2 px-2">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              id="inputEmail"
              name="email"
              className="bg-[#343434] text-white rounded-lg h-[36px] w-full focus:outline-0 p-2"
              placeholder="luthpai.afr@gmail.com"
              spellCheck="false"
              required
            />
          </li>
          <li className="flex flex-col justify-center gap-2 mx-auto px-2">
            <label htmlFor="inputMsg">Message</label>
            <textarea
              id="inputMsg"
              name="msg"
              className="bg-[#343434] text-white rounded-lg h-[85px] w-full focus:outline-0 p-2 overflow-y-hidden"
              maxLength={300}
              spellCheck="false"
              required
              placeholder="This form is working. Do not spam please!"
            ></textarea>
          </li>
          <li className="mx-auto px-2">
            <button type="submit" className="btn custom-transition mt-3">
              Send <FaEnvelope className="custom-transition" />
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Contact;
