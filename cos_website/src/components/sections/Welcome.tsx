import React from "react";
import { Link } from "react-scroll";
import yourLogo from "../images/logo_small.png";
import sunsetImage from "/images/hero-cut.jpg";

/*
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
}*/

function Welcome() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/images/hero-cut.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 w-full h-full flex items-center justify-center">
        <div className="text-cos-off-black font-omnes text-center text-8xl">
          Come as a stranger,
          <br /> leave as a friend.
          <div className="text-cos-off-black font-omnes text-center text-4xl">
            June 6-9 2024 <br />
            Hameln, Germany
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
