import React from "react";

//css
import "./styles.css";
import "./font/font.css";

//components

//icons & images
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import HeroImage from "./components/images/hero-cut.jpg";
import FAQ from "./components/sections/FAQ";
import Welcome from "./components/sections/Welcome";
import aboveFaqSvg from "./components/images/FAQ_border.svg";
import Where from "./components/sections/Where";
import Header from "./components/Header";

/*
#TODO
 footer
 impressum
 create all sections
 fill with content (wait for autumn, better images)

 General:

 journey:
   include google maps

 contact:
  easiest way: <a href="mailto:contact@cityofseekers.eu>contact@cityofseekers.eu</a>"

  FAQ:
    *ask commmunity what infos they would like on the faq site
    Make it ausklappable 
      frage groß mit nem ausklapp pfeil nach unten
      soll bitte smooth sein xD


*/

function Program() {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src={HeroImage}
          className="w-full h-full object-cover"
          alt="Festival"
        />
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold font-omnes">Program for 2024</h1>
          </div>
        </div>
      </div>
    </>
  );
}

function Last() {
  return <div className="h-12 "></div>;
}

function App() {
  return (
    <div className="w-full bg-cos-main-orange">
      <Header />
      <div id="welcome" className="h-screen">
        <Welcome />
      </div>
      <div id="program" className="h-screen">
        <Program />
      </div>
      <div id="where" className="">
        <Where />
      </div>
      <div id="faq" className="">
        <FAQ />
      </div>
      <Last />
    </div>
  );
}

export default App;
