import "../font/font.css";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FESTIVAL, LOCATION, SOCIAL, ORGANIZATION } from "../config/constants";

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
          <p className="text-xl pb-5 font-omnes">{FESTIVAL.NAME}</p>
          <p>
            City of Seekers is a space for people to make new connections and deepen existing ones,
            all in an open and fun setting where it is easy to get into contact with strangers / new
            friends.
          </p>
        </div>
        <div className="w-full sm:w-1/3">
          <div className="pb-5 font-omnes">Time and Place of the Event</div>
          <div>{FESTIVAL.DATE_DISPLAY}</div>
          <div>{LOCATION.FULL_ADDRESS}</div>
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
              href={SOCIAL.INSTAGRAM_URL}
              className="mt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl pt-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-xs text-center pb-7">
        <div>
          ©{ORGANIZATION.COPYRIGHT_YEAR} {ORGANIZATION.NAME}
        </div>
        <div>{ORGANIZATION.REGISTRATION_ADDRESS}</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
