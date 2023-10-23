import { Link } from "react-scroll";
import "../font/font.css";

/**#TODO
 *
 * center items in footer,
 * link to impressum etc
 */
import footer_transition from "../components/images/footer_transition.png";

function Footer() {
  return (
    <div className="bg-cos-off-black text-white">
      <img
        src={footer_transition}
        className="w-full h-full object-cover"
        alt="Festival"
      />
      <div className="pb-14 flex px-8 space-x-4 sm:w-full md:w-10/12 ">
        <div className="w-2/3">
          <p className="text-xl pb-5 font-omnes">City Of Seekers</p>
          <p className="">
            City of Seekers is a space for people to make new connections and
            deepen existing ones, all in an open and fun setting where it is
            easy to get into contact with strangers / new friends.
          </p>
        </div>
        <div className="">
          <div className="pb-5 font-omnes">Location</div>
          <div>Pferdeweg 2, 31787 Hameln, Germany</div>
        </div>
        <div>
          <div className="pb-5 font-omnes">Legal Stuff</div>
          <div>
            Impressum,
            <br /> Data-protection,
            <br /> T & C
          </div>
        </div>
      </div>
      <div className="text-xs text-center">
        <div className="">6, 7, 8 & 9. June 2025 - Hamelin, Germany</div>
        <div className="">
          @2023 City Of Seekers Festival. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
