import React from "react";
import Header from "./components/Header";
import HeroImage from "./components/images/hero-cut.jpg";
import "./styles.css";
import "./font/font.css";
import Footer from "./components/Footer";

/*
#TODO
 footer
 impressum
 create all sections
 fill with content (wait for autumn, better images)

 General:
  I would like the headings in the funny font and the default text in

 journey:
   include google maps

 contact:
  easiest way: <a href="mailto:contact@cityofseekers.eu>contact@cityofseekers.eu</a>"

  FAQ:
    ask commmunity what infos they would like on the faq site

*/

function WelcomeSection() {
  return (
    <div className="relative w-full h-screen">
      <img
        src={HeroImage}
        className="w-full h-full object-cover"
        alt="Festival"
      />
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold font-omnes">City of Seekers</h1>
          <p className="text-xl mt-4">Come as a stranger, leave as a friend</p>
          <div>
            <div className="text-2xl mt-4">6.-9. June 2024,</div>
            <div className="text-xl mt-4 font-sans">Hamelin Germany</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Program() {
  return (
    <div className="relative w-full h-screen">
      <img
        src={HeroImage}
        className="w-full h-full object-cover"
        alt="Festival"
      />
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Program for 2024</h1>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div className="relative w-full h-screen">
      <img
        src={HeroImage}
        className="w-full h-full object-cover"
        alt="Festival"
      />
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Frequently asked questions</h1>
        </div>
      </div>
    </div>
  );
}

function Last() {
  return <div className="h-12 "></div>;
}

function App() {
  return (
    <div className="w-full bg-cos-yellow">
      <Header />
      <div id="welcome" className="h-screen">
        <WelcomeSection />
      </div>
      <div id="program" className="h-screen">
        <Program />
      </div>
      <div id="faq" className="h-screen">
        <Faq />
      </div>
      <Last />
      <Footer />
    </div>
  );
}

export default App;
