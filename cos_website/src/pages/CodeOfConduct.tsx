import React from "react";
import Footer from "../components/Footer";

function CodeOfConduct() {
  return (
    <div className="w-full bg-cos-main-orange text-cos-off-black">
      <div className="w-full flex justify-center">
        <a
          href="/"
          className="fixed w-4/12 mt-7 bg-gradient-background-image text-white p-4 px-10 z-10   rounded-full"
        >
          <div className=" text-center" >
          Home</div>
        </a>
      </div>

      <div className="container mx-auto p-8 w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 pt-28 ">
        <h1 className="text-3xl font-bold mb-6">Code of Conduct</h1>

        <p className="mb-4">
          <strong>Be kind to one another</strong>
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Treat others the way you want to be treated.</li>
          <li>Keep conversations respectful to all involved.</li>
          <li>Personal attack by an individual or group against a attendee of City of Seekers is not allowed.</li>
          <li>Bullying attendees is not allowed.</li>
          <li>Offensive language used towards any group or individual will not be tolerated.</li>
          <li>Sexist, discriminatory and violent verbal or non-verbal behavior will not be tolerated.</li>
          <li>Actions and Interactions between persons without prior mutual consent is forbidden. (This includes unwanted physical contact and unwanted sexual attention)</li>
        </ul>

        <p className="mb-4"><strong>Equality for all</strong></p>
        <ul className="list-disc pl-5 mb-4">
          <li>Racism is forbidden.</li>
          <li>Sexism against a person or group is not allowed.</li>
          <li>Political or religious extremism must be kept off the festival site.</li>
          <li>Other discriminatory behavior will not be tolerated.</li>
          <li>All announcements by the organizers will be held in English.</li>
        </ul>

        <p className="mb-4"><strong>Privacy and Consent</strong></p>
        <ul className="list-disc pl-5 mb-4">
          <li>Every individual's privacy must be respected. This includes not sharing personal information, photos, or recordings without explicit consent.</li>
          <li>Consent is paramount. Ensure all interactions, whether physical or digital, are mutually agreed upon.</li>
          <li>Unsolicited sharing of someone else's information or media is strictly prohibited.</li>
        </ul>

        <p className="mb-4"><strong>Laws and Rules</strong></p>
        <ul className="list-disc pl-5 mb-4">
          <li>Compliance with all applicable laws and festival rules is mandatory.</li>
          <li>Follow the organizers' instructions to ensure a safe and enjoyable environment for everyone.</li>
        </ul>

        <p className="mb-4"><strong>Theft and Property Damage</strong></p>
        <ul className="list-disc pl-5 mb-4">
          <li>Respect others' property. Theft or intentional damage will lead to immediate action and possible legal consequences.</li>
          <li>Report any damage to property immediately to the organizers.</li>
        </ul>

        <p className="mb-4"><strong>Environmental Respect</strong></p>
        <ul className="list-disc pl-5 mb-4">
          <li>Leave no trace. Dispose of trash properly and respect natural habitats.</li>
          <li>Maintain cleanliness, especially in communal areas like sanitary facilities.</li>
        </ul>

        <p className="mb-4"><strong>Conduct and Nuisances</strong></p>
        <ul className="list-disc pl-5 mb-4">
          <li>Disruptive behavior will not be tolerated. Repeated complaints may lead to removal from the festival without a refund.</li>
          <li>In serious cases, the festival reserves the right to involve law enforcement.</li>
        </ul>

        <p className="mb-4"><strong>Contact and Assistance</strong></p>
        <ul className="list-disc pl-5 mb-4">
          <li>If you're experiencing harassment or see someone else in distress, contact an organizer immediately.</li>
          <li>Our team is here to help ensure your safety and enjoyment throughout the festival.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default CodeOfConduct;
