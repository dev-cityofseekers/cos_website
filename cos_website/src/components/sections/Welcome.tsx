import React from "react";
import { Link } from "react-scroll";
import yourLogo from "../images/logo_small.png";
import sunsetImage from "../images/hero-cut.jpg";
import otherIMage from "../images/freedyi_mic.png";

function Welcome2() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${sunsetImage})` }}
    >
      <img src={yourLogo} alt="Festival Logo" className="w-40 h-40 mb-4" />

      <nav className="bg-transparent mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="program" smooth={true} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} duration={500}>
              FAQ
            </Link>
          </li>
          {/* ... other menu items ... */}
        </ul>
      </nav>

      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-2">
          Come as a stranger, leave as a friend
        </h1>
        <p className="text-lg">Join us for an unforgettable experience!</p>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <div className="relative w-full h-screen">
      <img
        src={sunsetImage}
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

export default Welcome;
