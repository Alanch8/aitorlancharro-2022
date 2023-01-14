import React from "react";
import Image from "next/image";
import avatar from "../../public/images/avatar.svg";

export const HeroSection = () => {
  return (
    <div className="mt-8 flex justify-between items-center hero-section test">
      <div className="hero-info">
        <h1>
          Hi <span className="wave">👋🏼</span> I'm
        </h1>
        <h1 className="text-3xl font-bold">Aitor Lancharro</h1>
        <h2>Front-End Developer</h2>
        {/* Ejemplo de lo del typewriter https://codepen.io/Danielgroen/pen/VeRPOq */}
        <p>
          A creative Engineer based in Barcelona (Spain) with a background in
          Industrial Engineering, Full-stack Development and Design. Interested
          in UX/UI, Digital media, Innovative Thinking and Project Management.
        </p>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 my-4 rounded shadow">
          My Portfolio
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 mx-2 my-4 rounded shadow">
          Resume
        </button>
      </div>
      <div className="hero-img">
        <Image src={avatar} alt="avatar"></Image>
      </div>
    </div>
  );
};
