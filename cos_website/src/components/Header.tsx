/* #TODO
I want the header to be positioned like the header on this site
https://www.paradiesgartenfestival.at/pg2023/

stick to bottom until the scroll position reaches a normal navbar position

*/

/*
 <li>
              <Link
                to="welcome"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="program"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="Accomodation & Journey"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                Accomodation & Journey
              </Link>
            </li>

            <li>
              <Link
                to="team"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                Team
              </Link>
            </li>

            <li>
              <Link to="team" className="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
 */

import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useActiveSection } from "../hooks/findActiveSection";
import "../font/font.css";
import logo_small from "./images/logo_small.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    "welcome",
    "program",
    "faq",
    "accommodation",
    "team",
    "contact",
  ];
  const activeSection = useActiveSection(sections);

  return (
    <div>
      {/* Desktop Version */}
      <div className="w-full flex justify-center">
        <nav className="fixed top-0 w-auto mt-7 bg-cos-yellow text-cos-off-black p-4 px-10 z-10 hidden sm:flex justify-center rounded-full">
          <ul className="flex space-x-3">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  activeClass="active"
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer font-omnes ${
                    activeSection === section ? "border-b-2 border-black" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() +
                    section.slice(1).replace(/&/g, "& ")}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Version */}
      <nav className="sm:hidden fixed top-0 w-10/12 bg-cos-yellow ml-10 mt-7 text-cos-off-black p-4 px-10 z-10 flex justify-between items-center rounded-full">
        <img src={logo_small} alt="logo" className="w-7" />
        <FaBars onClick={() => setIsMenuOpen(true)} />
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 w-full h-full bg-black text-white z-20 p-8">
          <div className="w-full ">
            <FaTimes
              className="text-2xl mb-8 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col items-center">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer mb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1).replace(/&/g, "& ")}
              </Link>
            ))}
            <a href="https://instagram.com" className="mt-8">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
