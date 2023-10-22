import { Link } from "react-scroll";
import "../font/font.css";

/* #TODO
I want the header to be positioned like the header on this site
https://www.paradiesgartenfestival.at/pg2023/

stick to bottom until the scroll position reaches a normal navbar position

*/
function Header() {
  return (
    <nav className="fixed top-0 w-full bg-cos-yellow  text-black p-4 z-10">
      <ul className="flex justify-center space-x-3">
        <li>
          <Link
            to="welcome"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="program"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="faq"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="Accomodation & Journey"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Accomodation & Journey
          </Link>
        </li>

        <li>
          <Link
            to="team"
            className="cursor-pointer"
            smooth={true}
            duration={500}
          >
            Team
          </Link>
        </li>

        <li>
          <Link to="team" className="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
