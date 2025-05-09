import "../font/font.css";
//import footer_transition from "../components/images/footer_transition.png";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="bg-cos-off-black text-white">
      <img
        src="/images/footer_transition.png"
        className="w-full h-full object-cover"
        alt="Festival"
      />
      <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 px-8 sm:space-x-4 w-10/12 mx-auto pb-14 pt-7">
        <div className="w-full sm:w-1/3">
          <p className="text-xl pb-5 font-omnes">City Of Seekers</p>
          <p>
            City of Seekers is a space for people to make new connections and
            deepen existing ones, all in an open and fun setting where it is
            easy to get into contact with strangers / new friends.
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          <div className="pb-5 font-omnes">Time and Place of the Event</div>
          <div>19.-22. June 2025</div>
          <div>Pferdeweg 2, 31787 Hameln, Germany</div>
          <img
              src="/images/logo_white_transparent.png"
              alt="logo"
              className="w-24  sm:mx-auto  pt-6"
          />
        </div>
        <div className="w-full sm:w-1/3">
          <div className="pb-5 font-omnes">Legal Stuff</div>
          <div>
            <Link to="/imprint">Imprint</Link>,
            <br /> <Link to="/privacy-policy">Privacy-policy</Link>
            <br /> <Link to="/code">Code Of Conduct</Link>
            <a
              href="https://instagram.com/cityofseekers"
              className="mt-8"
              target="_blank"
            >
              <FaInstagram className="text-2xl pt-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-xs text-center pb-7">
        <div>@2025 City Of Seekers e.V.</div>
        <div>Luxemburger Straße 202, 50937 Köln</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
