/* #TODO
 make bg-transparent and wehen scrolling fade in the background, like in figma design
 */

import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useActiveSection } from "../hooks/findActiveSection";
import "../font/font.css";
import "../styles/gradientAnimation.css";
//import gradientSVG from "./images/gradient_vert.svg"; 


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ["welcome", "COS?", "Gallery", "where","Tickets", "FAQ", "team", "contact"];
  const activeSection = useActiveSection(sections);


  const headerStyle = {
    //backgroundImage: `url(${gradientSVG})`,
    backgroundSize: 'cover', // under construction, verusche hier das bg image vom mobile header zu einem svg umzuwandeln, das file existiert aber ist schwierig gerade haha
    backgroundPosition: 'center', 
  
  };

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
      <nav className="sm:hidden fixed top-0 w-10/12 bg-gradient-background-image-vertical-short ml-10 mt-7 text-white p-4 px-10 z-10 flex justify-between items-center rounded-full" onClick={() => setIsMenuOpen(true)}>
        
          <img
            src="/images/logo_white_transparent.png"
            alt="logo"
            className="w-14"
          />
        
        <FaBars  />
      </nav>

      {isMenuOpen && (
        <div className="fixed  w-full h-full bg-gradient-background-image-vertical text-white z-20 p-8" onClick={() => setIsMenuOpen(false)} /*style={headerStyle}*/
        >
          
          <div className="w-full pb-24">
            
            <FaTimes
              className="text-2xl mb-8 cursor-pointer float-right "
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
