import React from "react";
import { Cards } from "../components/cards";

export const WorkSection = () => {
  return (
    <div
      id="work"
      className="flex justify-around items-center work-section flex-col"
    >
      <div className="mb-4">
        <h2 className="text-lime-400">Work</h2>
        <h1 className="text-2xl font-semibold text-black opacity-75">
          Discover the projects I have been working on
        </h1>
        <p className="text-base opacity-50 mt-4">
          I thrive on taking on new challenges and bringing innovative and
          impactful ideas to life through simple and elegant solutions. Please
          take a moment to peruse my latest endeavors in the projects section
          below.
        </p>
        <div className="relative w-full max-w-lg">
          <div className="absolute -bottom-1 -left-2 w-60 h-60 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        </div>
      </div>
      <Cards />
    </div>
  );
};
