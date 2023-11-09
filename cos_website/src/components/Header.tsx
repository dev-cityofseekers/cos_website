/* #TODO
 make bg-transparent and wehen scrolling fade in the background, like in figma design
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useActiveSection } from "../hooks/findActiveSection";
import "../font/font.css";
//import logo_white from "./images/logo_white_transparent.png";
import "../styles/gradientAnimation.css";

var cookie = 0;
var showCookie = false;
var showW = true;

function ClickerPlusOne() {
  if (cookie == 3) {
    showCookie = true;
  } else if (cookie == 20) {
    console.log("bro, what do you want??");
  } else if (cookie == 50) {
    console.log("OK, thats enough, one more and i'll punch you!!!!");
  } else if (cookie == 51) {
    console.log("you wanted it");
    showW = false;
  }

  cookie++;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ["welcome", "program", "where", "faq", "team", "contact"];
  const activeSection = useActiveSection(sections);

  return (
    <div>
      {/* Desktop Version       */}
      <div className="w-full flex justify-center">
        <nav className="fixed top-0 w-auto mt-7 bg-gradient-background-image text-cos-off-black p-4 px-10 z-10 hidden sm:flex justify-center rounded-full">
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
      <nav className="sm:hidden fixed top-0 w-10/12 bg-gradient-background-image-vertical-short ml-10 mt-7 text-white p-4 px-10 z-10 flex justify-between items-center rounded-full">
        <a href="/">
          <img
            src="/images/logo_white_transparent.png"
            alt="logo"
            className="w-14"
          />
        </a>
        <FaBars onClick={() => setIsMenuOpen(true)} />
      </nav>

      {isMenuOpen && (
        <div className="fixed  w-full h-full bg-gradient-background-image-vertical text-white z-20 p-8">
          <div className="w-full pb-24" onClick={ClickerPlusOne}>
            <div className="invisible">{cookie}</div>
            <FaTimes
              className="text-2xl mb-8 cursor-pointer float-right "
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col items-center ">
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
            <a href="https://instagram.com/cityofseekers" className="mt-8">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
