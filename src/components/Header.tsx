import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useActiveSection } from "../hooks/useActiveSection";
import "../font/font.css";
import "../styles/gradientAnimation.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "i18next";
import { LINKS, SOCIAL, NAV_SECTIONS, formatSectionName } from "../config/constants";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sections = NAV_SECTIONS;
  const activeSection = useActiveSection([...sections]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <div className="w-full flex justify-center">
        <nav
          className={`fixed top-0 w-auto mt-7 p-4 px-6 z-10 hidden md:flex items-center justify-center rounded-full transition-all duration-300 ${
            isScrolled ? "bg-gradient-background-image" : "bg-gradient-background-image"
          }`}
        >
          {/* Ticket Button */}
          <div className="relative mr-6 group">
            <button
              disabled
              className="px-4 py-2 bg-gray-400 text-gray-200 rounded-full font-omnes font-bold cursor-not-allowed shadow-lg opacity-60"
              aria-label="Tickets not yet available"
            >
              {t("general.header.tickets")}
            </button>
            <div className="absolute hidden group-hover:block bg-cos-off-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap -bottom-12 left-1/2 -translate-x-1/2 shadow-lg z-50">
              Tickets will be available soon
            </div>
          </div>

          {/* Navigation Items */}
          <ul className="flex space-x-4">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  activeClass="active"
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer font-omnes hover:text-white transition-colors duration-200 ${
                    activeSection === section
                      ? "border-b-2 border-cos-orange text-white"
                      : "text-cos-off-black"
                  }`}
                >
                  {formatSectionName(section)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pl-4 border-l ml-4 border-cos-off-black/20">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-1/2 -translate-x-1/2 w-10/12 mt-7 p-4 z-10 rounded-full bg-gradient-background-image-vertical-short">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Ticket Button */}
            <div className="relative group">
              <button
                disabled
                className="mr-6 px-4 py-2 bg-gray-400 text-gray-200 rounded-full font-omnes font-bold cursor-not-allowed shadow-lg opacity-60"
                aria-label="Tickets not yet available"
              >
                {t("general.header.tickets")}
              </button>
              <div className="absolute hidden group-hover:block bg-cos-off-black text-white text-xs px-2 py-1 rounded whitespace-nowrap -bottom-10 left-0 shadow-lg z-50">
                Tickets will be available soon
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <LanguageSwitcher />
          </div>

          <div className="flex-1 flex justify-end">
            <button
              onClick={handleMenuToggle}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <FaBars className="text-xl text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gradient-background-image-vertical text-white z-20 p-8"
          onClick={handleMenuClose}
        >
          <div className="w-full flex justify-end pb-24">
            <button
              onClick={handleMenuClose}
              aria-label="Close navigation menu"
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <FaTimes className="text-2xl" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col items-center space-y-6">
            {/* Ticket Button */}
            <div className="relative group">
              <button
                disabled
                className="px-4 py-2 bg-gray-400 text-gray-200 rounded-full font-omnes font-bold cursor-not-allowed shadow-lg opacity-60"
                aria-label="Tickets not yet available"
              >
                {t("general.header.tickets")}
              </button>
              <div className="absolute hidden group-hover:block bg-cos-off-black text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap -bottom-12 left-1/2 -translate-x-1/2 shadow-lg z-50">
                Tickets will be available soon
              </div>
            </div>
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer text-lg hover:text-cos-orange transition-colors duration-200"
                onClick={handleMenuClose}
              >
                {formatSectionName(section)}
              </Link>
            ))}
            <a
              href={"/code"}
              className="cursor-pointer text-lg hover:text-cos-orange transition-colors duration-200"
              onClick={handleMenuClose}
            >
              {" "}
              Code Of Conduct
            </a>
            <a
              href={SOCIAL.INSTAGRAM_URL}
              aria-label="Follow us on Instagram"
              className="mt-8 p-3 hover:bg-white/10 rounded-full transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
