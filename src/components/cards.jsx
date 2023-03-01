import React from "react";
import Image from "next/image";
import pokeapp from "../../public/images/pokeapp.jpeg";
import taskappview from "../../public/images/taskappview.jpeg";
import pokeball from "../../public/images/pokeball.svg";
import github from "../../public/images/github.svg";
import url from "../../public/images/url.svg";
import arrow from "../../public/images/arrow.svg";
import taskapp from "../../public/images/taskapp.svg";
import circlefav from "../../public/images/circlefav.svg";
import circleagency from "../../public/images/circleagency.jpeg";

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
      {/* pokeapp */}
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          src={pokeapp}
          alt="pokeapp"
          className="h-32 w-full object-cover rounded-b-3xl"
        ></Image>
        <div className="bg-white px-5 pb-3 sm:p-6">
          <div className="flex justify-between pt-2 pb-1">
            <div className="flex items-center">
              <span>
                <Image src={pokeball} alt="pokeball" className="mr-1"></Image>
              </span>
              <h3 className="text-xl font-semibold opacity-80 text-gray-900">
                Pokédex App
              </h3>
              <span>
                <Image src={arrow} alt="arrow" className="ml-1.5"></Image>
              </span>
            </div>
            <div className="flex items-center">
              <span>
                <Image
                  src={url}
                  alt="url"
                  className="mr-1 cursor-not-allowed hover:opacity-60"
                ></Image>
              </span>
              <span>
                <Image
                  src={github}
                  alt="github"
                  className="mr-1 cursor-not-allowed hover:opacity-60"
                ></Image>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              Figma
              <span>
                <img
                  className="ml-1.5 h-2.5"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                ></img>
              </span>
            </span>
            <span className="flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              Vue
              <span>
                <img
                  className="ml-1 h-2.5"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                ></img>
              </span>
            </span>
            <span className="flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              TailwindCSS
              <span>
                <img
                  className="ml-1 h-4"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                ></img>
              </span>
            </span>
          </div>
          <div className="dataBody">
            <p className="mt-4 text-sm leading-relaxed text-gray-500 line-clamp-3 ml-1">
              This project is a recreation of the famous Pokédex using the
              Pokémon API (PokéAPI). The app is developed with Vue 3 and styled
              with TailwindCSS. Designed with Figma.
            </p>
          </div>
        </div>
      </article>

      {/* task app */}

      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          src={taskappview}
          alt="taskappview"
          className="h-32 w-full object-cover rounded-b-3xl"
        ></Image>
        <div className="bg-white px-5 pb-3 sm:p-6">
          <div className="flex justify-between pt-2 pb-1">
            <div className="flex items-center">
              <span>
                <Image src={taskapp} alt="taskapp" className="mr-1"></Image>
              </span>
              <h3 className="text-xl font-semibold opacity-80 text-gray-900">
                TaskApp
              </h3>
              <span>
                <Image src={arrow} alt="arrow" className="ml-1.5"></Image>
              </span>
            </div>
            <div className="flex items-center">
              <a href="https://final-project-alanch8.vercel.app/auth/login">
                <Image
                  src={url}
                  alt="url"
                  className="mr-1 cursor-pointer hover:opacity-60"
                ></Image>
              </a>
              <a href="https://github.com/Alanch8/final-project">
                <Image
                  src={github}
                  alt="github"
                  className="mr-1 cursor-pointer hover:opacity-60"
                ></Image>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              Figma
              <span>
                <img
                  className="ml-1.5 h-2.5"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                ></img>
              </span>
            </span>
            <span className="flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              Vue
              <span>
                <img
                  className="ml-1 h-2.5"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                ></img>
              </span>
            </span>
            <span className="flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              TailwindCSS
              <span>
                <img
                  className="ml-1 h-4"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                ></img>
              </span>
            </span>
          </div>
          <div className="dataBody">
            <p className="mt-4 text-sm leading-relaxed text-gray-500 line-clamp-3 ml-1">
              TaskApp is the final project of the IronHack Frontend Development
              Bootcamp that I had the pleasure to attend thanks to the "Next
              Generation" grant from the European Union. The application is
              developed with Vue 3, Vite, Pinia and TailwindCSS.
            </p>
          </div>
        </div>
      </article>

      {/* Circle Agency */}

      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          src={circleagency}
          alt="circleagency"
          className="h-32 w-full object-cover rounded-b-3xl"
        ></Image>
        <div className="bg-white px-5 pb-3 sm:p-6">
          <div className="flex justify-between pt-2 pb-1">
            <div className="flex items-center">
              <span>
                <Image src={circlefav} alt="circlefav" className="mr-1"></Image>
              </span>
              <h3 className="text-xl font-semibold opacity-80 text-gray-900">
                Circle Agency
              </h3>
              <span>
                <Image src={arrow} alt="arrow" className="ml-1.5"></Image>
              </span>
            </div>
            <div className="flex items-center">
              <a href="https://alanch8.github.io/mid-term-project/">
                <Image
                  src={url}
                  alt="url"
                  className="mr-1 cursor-pointer hover:opacity-60"
                ></Image>
              </a>
              <a href="https://github.com/Alanch8/mid-term-project">
                <Image
                  src={github}
                  alt="github"
                  className="mr-1 cursor-pointer hover:opacity-60"
                ></Image>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            <span className="flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              HTML
              <span>
                <img
                  className="ml-1.5 h-3"
                  src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
                ></img>
              </span>
            </span>
            <span className="flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              CSS
              <span>
                <img
                  className="ml-1 h-3"
                  src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                ></img>
              </span>
            </span>
            <span className="flex items-center whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              Javascript
              <span>
                <img
                  className="ml-1 h-3"
                  src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                ></img>
              </span>
            </span>
          </div>
          <div className="dataBody">
            <p className="mt-4 text-sm leading-relaxed text-gray-500 line-clamp-3 ml-1">
              Circle Agency web page is the mid-term Project from the IronHack
              Bootcamp I had the pleasure to do in Barcelona thanks to a BECA
              from the European Union....
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
