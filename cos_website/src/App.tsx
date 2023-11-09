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
import Wallpaper from "./components/sections/Wallpaper";
import Footer from "./components/Footer";
import What from "./components/sections/What";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";

/*
#TODO
 create all sections
 fill with content (wait for autumn, better images)

 General:

 journey:

 contact:
  easiest way: <a href="mailto:contact@cityofseekers.eu>contact@cityofseekers.eu</a>"

  FAQ:
fragen von alter seite



classname="overflow-y-scroll snap-y snap-mandatory scroll-smooth"
*/

function App() {
  return (
    <>
      <Header />
      <div className=" h-screen">
        <div className="w-full bg-cos-main-orange">
          <div id="welcome" className="h-screen snap-start">
            <Welcome />
          </div>
          <div id="COS?" className="h-screen overflow-hidden snap-center">
            <What />
          </div>
          <div id="where" className=" overflow-hidden snap-center">
            <Where />
          </div>
          <div id="faq" className="h-screen overflow-hidden snap-center">
            <FAQ />
          </div>
          <div id="team" className="h-screen overflow-hidden snap-center">
            <Team />
          </div>
          <div id="contact" className="h-screen overflow-hidden snap-center">
            <Contact />
          </div>
          <div className="bg-cos-off-black  snap-end">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
