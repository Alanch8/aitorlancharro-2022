import { useState } from "react";

import Image from "next/image";
import brand from "../../public/images/brand-logo.svg";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  https: return (
    <div className="navbar flex items-center justify-between border-b border-gray-200 py-4 px-8 lg:px-32">
      <a href="/">
        <Image src={brand} alt="logo"></Image>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <div className={isNavOpen ? "hideHamburger" : ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[170px]">
              <li className="font-bold hover:text-rose-400">
                <a href="#work" onClick={() => setIsNavOpen(false)}>
                  Work
                </a>
              </li>
              <li className="font-bold hover:text-emerald-400">
                <a href="#skills" onClick={() => setIsNavOpen(false)}>
                  Skills
                </a>
              </li>
              <li className="font-bold hover:text-violet-400">
                <a href="#contact" onClick={() => setIsNavOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li className="my-2 font-bold hover:text-rose-400">
            <a href="#work">Work</a>
          </li>
          <li className="my-2 font-bold hover:text-emerald-400">
            <a href="#skills">Skills</a>
          </li>
          <li className="my-2 font-bold hover:text-violet-400">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
