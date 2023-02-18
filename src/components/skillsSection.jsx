import React from "react";
import Image from "next/image";

export const SkillsSection = () => {
  return (
    <div
      id="skills"
      className="flex justify-around items-center skills-section"
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
      <div className="CARDS"></div>
    </div>
  );
};
