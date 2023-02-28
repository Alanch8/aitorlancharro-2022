import React from "react";
import Image from "next/image";
import pokeapp from "../../public/images/pokeapp.jpeg";

export const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 my-5">
      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          src={pokeapp}
          alt="pokeapp"
          className="h-32 w-full object-cover rounded-b-3xl"
        ></Image>
        <div className="bg-white p-4 sm:p-6">
          <a>
            <h3 className="mt-0.5 text-xl font-semibold opacity-80 text-gray-900">
              Pokédex App
            </h3>
          </a>
          <div className="flex flex-wrap gap-1">
            <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              Figma
            </span>
            <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              Vue
            </span>
            <span className="whitespace-nowrap rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
              TailwindCSS
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            This project is a recreation of the famous Pokédex using the Pokémon
            API (PokéAPI). The app is developed with Vue 3 and styled with
            TailwindCSS. Designed with Figma.
          </p>
        </div>
      </article>
    </div>
  );
};
