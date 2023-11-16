import React from "react";
import Footer from "../components/Footer";

function Imprint() {
  return (
    <div className="w-full bg-cos-main-orange">
      <div className="w-full flex justify-center">
        <a
          href="/"
          className="fixed w-4/12 mt-7 bg-gradient-background-image text-white p-4 px-10 z-10  justify-center rounded-full"
        >
          Home
        </a>
      </div>

      <div className="container mx-auto p-4 w-10/12 pt-28 max-w-4xl ">
        <h1 className="text-3xl font-bold mb-4">Imprint</h1>

        <h2 className="text-2xl font-semibold mb-2">Company Information</h2>
        <p className="mb-2">Company Name: City Of Seekers</p>
        <p className="mb-2">Address: Luxemburger str. 202, 50937 Köln</p>
        <p className="mb-2">
          Phone:{" "}
          <a href="tel:" className="text-blue-500">
            +** *** ******{" "}
          </a>
        </p>
        <p className="mb-2">
          Email:{" "}
          <a href="mailto:info@cityofseekers.eu" className="text-blue-500">
            info@cityofseekers.eu
          </a>
        </p>
        <p className="mb-4">VAT ID: DE123456789</p>

        <h2 className="text-2xl font-semibold mb-2">Representative</h2>
        <p className="mb-4">Frederike Claus</p>

        <h2 className="text-2xl font-semibold mb-2">Responsible for Content</h2>
        <p className="mb-4">Luke Ziegler</p>

        <h2 className="text-2xl font-semibold mb-2">
          Web Design and Development
        </h2>
        <p className="mb-4">
          Luke Ziegler:{"  "}
          <a href="mailto:dev@cityofseekers.eu" className="text-blue-500">
            dev@cityofseekers.eu
          </a>
        </p>

        <h2 className="text-2xl font-semibold mb-2">Disclaimer</h2>
        <p className="mb-2">
          The information provided on this website has been carefully checked
          and is regularly updated. However, no guarantee can be given that all
          information is complete, correct, and up-to-date at all times. This
          applies in particular to all connections ("links") to other websites
          that are referred to directly or indirectly. All information can be
          added, removed, or changed without prior notice. All product names,
          product designations, and logos on this website are registered
          trademarks and property of their respective owners.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
        <p className="mb-4">
          For information on how user data is collected and processed, please
          refer to our{" "}
          <a href="/privacy-policy" className="text-blue-500">
            privacy policy
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-2">Copyright</h2>
        <p className="mb-4">
          All rights reserved. Text, images, graphics, sound, animations, and
          videos on this website are protected by copyright and other protective
          laws. The content of this website may not be copied, distributed,
          altered, or made available to third parties for commercial purposes.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Imprint;
