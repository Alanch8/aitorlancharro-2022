import React from "react";
import Image from "next/image";
import { MoonIcon } from "@heroicons/react/24/solid";
import brand from "../../public/images/brand-logo.svg";
import github from "../../public/images/github-icon.svg";
import linkedin from "../../public/images/linkedin-icon.svg";

export const Navbar = () => {
  return (
    // NAVBAR not bad

    <nav class="container flex justify-between px-4 py-8 mx-auto bg-white">
      <div>
        <h3 class="text-2xl font-medium text-blue-500">LOGO</h3>
      </div>
      <div class="hidden space-x-8 lg:flex">
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
        <a href="#">Menu 4</a>
      </div>
      <div class="flex lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>

    // Primer navbar

    // <nav className="navbar">
    //   <div className="container-fluid">
    //     <a className="brand-logo" aria-current="page" href="#">
    //       <Image src={brand} alt="logo"></Image>
    //     </a>
    //     <div className="menu">
    //       <a className="nav-link active" aria-current="page" href="#">
    //         Work
    //       </a>
    //       <a className="nav-link" aria-current="page" href="#">
    //         Skills
    //       </a>
    //       <a className="nav-link" aria-current="page" href="#">
    //         Contact
    //       </a>
    //       {/* <button className="menuButton" style={{ width: "25px" }}>
    //         <MoonIcon />
    //       </button> */}
    //     </div>
    //   </div>
    // </nav>
  );
};
