import React from "react";
import Image from "next/image";
import express from "../../public/images/express.svg";
import supabase from "../../public/images/supabase.svg";
import iterm2 from "../../public/images/iterm2.svg";
import vercel from "../../public/images/vercel.svg";

export const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="flex flex-col justify-around items-center skills-section mx-8 pt-20 lg:mx-36"
    >
      <div>
        <h2 className="text-lime-400">Skills</h2>
        <h1 className="text-2xl font-semibold text-black opacity-75">
          Some of the Skills and Tools I love
        </h1>
        <p className="text-base opacity-50 mt-4">
          I am continually striving to improve my skills by researching and
          exploring various programming languages, libraries, frameworks, and
          tools to deliver exceptional results in my projects.
        </p>
      </div>
      <div className="relative w-full max-w-lg">
        <div className="absolute -bottom-20 -right-2 lg:-right-72 w-60 h-60 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-2 gap-y-6 mt-6 mx-4 sm:grid-cols-3 lg:gap-x-64">
        <ul className="text-stone-500 mx-2">
          <li>
            <h2 className="font-semibold opacity-60 mb-2">Front</h2>
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-5"
                src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
              ></img>
            </span>
            HTML
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-5"
                src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
              ></img>
            </span>
            CSS
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-5"
                src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
              ></img>
            </span>
            Javascript
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-6"
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              ></img>
            </span>
            React
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-4"
                src="https://cdn.worldvectorlogo.com/logos/vue-9.svg"
              ></img>
            </span>
            Vue
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-3"
                src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
              ></img>
            </span>
            Tailwind
          </li>
        </ul>
        <ul className="text-stone-500 mx-2">
          <li>
            <h2 className="font-semibold opacity-60 mb-2">Back</h2>
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-5"
                src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              ></img>
            </span>
            NodeJS
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-5"
                src="https://cdn.worldvectorlogo.com/logos/python-5.svg"
              ></img>
            </span>
            Python
          </li>
          <li className="flex items-center mb-2">
            <span>
              <Image
                src={express}
                alt="express"
                className="mr-1 -ml-1 h-5"
              ></Image>
            </span>
            Express
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-5"
                src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
              ></img>
            </span>
            MongoDB
          </li>
          <li className="flex items-center mb-2">
            <span>
              <Image
                src={supabase}
                alt="supabase"
                className="mr-1 -ml-1 h-5"
              ></Image>
            </span>
            Supabase
          </li>
        </ul>
        <ul className="text-stone-500 mx-2">
          <li>
            <h2 className="font-semibold opacity-60 mb-2">Others</h2>
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-4"
                src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
              ></img>
            </span>
            Visual Studio
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-4"
                src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
              ></img>
            </span>
            GitHub
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 h-2.5 -ml-1"
                src="https://cdn.worldvectorlogo.com/logos/npm.svg"
              ></img>
            </span>
            Npm
          </li>
          <li className="flex items-center mb-2 -m-1">
            <span>
              <Image
                src={iterm2}
                alt="iterm2"
                className="mr-1 -ml-1 h-5"
              ></Image>
            </span>
            iTerm2
          </li>
          <li className="flex items-center mb-2">
            <span>
              <img
                className="mr-1.5 w-3 ml-1"
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              ></img>
            </span>
            Figma
          </li>
          <li className="flex items-center mb-2">
            <span>
              <Image
                src={vercel}
                alt="vercel"
                className="mr-1 -ml-1 h-4 -ml-1"
              ></Image>
            </span>
            Vercel
          </li>
        </ul>
      </div>
    </div>
  );
};
