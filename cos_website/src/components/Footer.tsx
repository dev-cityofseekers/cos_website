import "../font/font.css";
import footer_transition from "../components/images/footer_transition.png";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo_white from "./images/logo_white_transparent.png";

/**#TODO
 *
 * center items in footer,
 *
 */

function Footer() {
  return (
    <div className="bg-cos-off-black text-white">
      <img
        src={footer_transition}
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
          <div className="pb-5 font-omnes">Location</div>
          <div>Pferdeweg 2, 31787 Hameln, Germany</div>
          <img src={logo_white} alt="logo" className="w-24  sm:mx-auto  pt-6" />
        </div>
        <div className="w-full sm:w-1/3">
          <div className="pb-5 font-omnes">Legal Stuff</div>
          <div>
            <Link to="/imprint">Imprint</Link>,
            <br /> <Link to="/privacy-policy">Privacy-policy</Link>
            <a href="https://instagram.com/cityofseekers" className="mt-8">
              <FaInstagram className="text-2xl pt-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-xs text-center pb-7">
        <div>6, 7, 8 & 9. June 2025 - Hamelin, Germany</div>
        <div>@2023 City Of Seekers Festival. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
