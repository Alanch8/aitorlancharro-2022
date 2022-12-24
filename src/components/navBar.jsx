import React from "react";
import Image from "next/image";
import { MoonIcon } from "@heroicons/react/24/solid";
import brand from "../../public/images/brand-logo.svg";
import github from "../../public/images/github-icon.svg";
import linkedin from "../../public/images/linkedin-icon.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="brand-icon" aria-current="page" href="#">
          <Image src={brand} alt="logo"></Image>
        </a>
        <div className="menu">
          <a className="nav-link active" aria-current="page" href="#">
            Work
          </a>
          <a className="nav-link active" aria-current="page" href="#">
            Skills
          </a>
          <a className="nav-link active" aria-current="page" href="#">
            Contact
          </a>
          <button className="menuButton" style={{ width: "25px" }}>
            <MoonIcon />
          </button>
          <button className="menuButton">
            <Image src={github} alt="logo"></Image>
          </button>
          <button className="menuButton">
            <i>
              <Image src={linkedin} alt="logo"></Image>
            </i>
          </button>
        </div>
      </div>
    </nav>
  );
};
