/* #TODO
I want the header to be positioned like the header on this site
https://www.paradiesgartenfestival.at/pg2023/

stick to bottom until the scroll position reaches a normal navbar position


#DESKTop VERSION

 <div className="w-full flex justify-center">
 <nav className="fixed top-0 w-auto mt-7 hover:bg-gradient-to-r bg-gradient-to-tl from-cos-pink to-cos-sea-blue text-cos-off-black p-4 px-10 z-10 hidden sm:flex justify-center rounded-full">
   <ul className="flex space-x-3">
     {sections.map((section) => (
       <li key={section}>
         <Link/>
       </li>
     ))}
   </ul>
 </nav>
</div>


 */

import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useActiveSection } from "../hooks/findActiveSection";
import "../font/font.css";
import logo_small from "./images/logo_small.png";
import "../styles/gradientAnimation.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ["welcome", "program", "where", "faq", "team", "contact"];
  const activeSection = useActiveSection(sections);

  return (
    <div>
      {/* Desktop Version 
      CSS CLASS "header" for gradient
      */}
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
      <nav className="sm:hidden fixed top-0 w-10/12 bg-gradient-background-image ml-10 mt-7 text-cos-off-black p-4 px-10 z-10 flex justify-between items-center rounded-full">
        <img src={logo_small} alt="logo" className="w-7" />
        <FaBars onClick={() => setIsMenuOpen(true)} />
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 w-full h-full bg-gradient-background-image-vertical text-white z-20 p-8">
          <div className="w-full pb-24">
            <FaTimes
              className="text-2xl mb-8 cursor-pointer float-right"
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
