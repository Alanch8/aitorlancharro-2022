import React from "react";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-around items-center contact-section"
    >
      <div>
        <h2 className="text-lime-400">Contact</h2>
        <h1 className="text-2xl font-semibold text-black opacity-75">
          I would be honored to collaborate with you on your upcoming project
        </h1>
        <p className="text-base opacity-50 mt-4 mb-4">
          I am eager to learn about new and exciting opportunities, engage in
          thought-provoking discussions, and establish valuable connections. I
          look forward to connecting with you!
        </p>
      </div>
      <div className="w-full">
        <h2 className="opacity-70">Contact me via email</h2>
        <div className="relative mb-6 mt-2">
          <input
            type="text"
            id="mail"
            className="bg-gray-50 border border-gray-300 text-red text-m rounded-lg block w-full p-2.5"
            placeholder="aitor.lancharro@gmail.com"
            disabled
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 cursor-pointer opacity-60 hover:bg-gray-200 rounded p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </div>
        </div>
        <h2 className="opactiy-70">Follow me on social media</h2>
        <form className="mt-2">
          <label>Name</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-red text-m rounded-lg block w-full p-2.5 mb-3"
            placeholder="Your Name"
            required
          />
          <label>Email Address</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-red text-m rounded-lg block w-full p-2.5 mb-3"
            placeholder="Your Email"
            required
          />
          <label>Message</label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-red text-m rounded-lg block w-full p-2.5 mb-4 resize-none"
            placeholder="Your Message"
            rows="5"
            required
          />
          <div className="absolute right-8">
            <button className="bg-gray-900 text-slate-50 flex hover:text-black hover:bg-white font-semibold py-2 px-4 border border-gray-900 rounded-full focus:outline-none focus:ring active:bg-indigo-500 active:text-white cursor-pointer">
              Send Message
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 20"
                fill="currentColor"
                className="w-5 h-6 ml-2"
              >
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
