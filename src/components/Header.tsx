import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useActiveSection } from "../hooks/useActiveSection";
import "../font/font.css";
import "../styles/gradientAnimation.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "i18next";
import { SOCIAL, NAV_SCROLL_ITEMS, NAV_PAGE_ITEMS, NAV_SECTIONS } from "../config/constants";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const activeSection = useActiveSection([...NAV_SECTIONS]);

  // Handle scroll to section when navigating from another page
  useEffect(() => {
    if (isHomePage && location.hash) {
      const sectionId = location.hash.replace("#", "");
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 500,
          smooth: true,
        });
      }, 100);
    }
  }, [isHomePage, location.hash]);

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

          {/* Scroll Navigation Items */}
          <ul className="flex space-x-4">
            {NAV_SCROLL_ITEMS.map((item) => (
              <li key={item.key}>
                {isHomePage ? (
                  <ScrollLink
                    activeClass="active"
                    to={item.key}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer font-omnes hover:text-white transition-colors duration-200 ${
                      activeSection === item.key
                        ? "border-b-2 border-cos-orange text-white"
                        : "text-cos-off-black"
                    }`}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={`/#${item.key}`}
                    className="cursor-pointer font-omnes hover:text-white transition-colors duration-200 text-cos-off-black"
                  >
                    {item.label}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-6 w-px bg-cos-off-black/30 mx-4" />

          {/* Page Navigation Items */}
          <ul className="flex space-x-4">
            {NAV_PAGE_ITEMS.map((item) => (
              <li key={item.key}>
                <RouterLink
                  to={item.path}
                  className={`cursor-pointer font-omnes hover:text-white transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "border-b-2 border-cos-orange text-white"
                      : "text-cos-off-black"
                  }`}
                >
                  {item.label}
                </RouterLink>
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
            {/* Scroll sections */}
            {NAV_SCROLL_ITEMS.map((item) =>
              isHomePage ? (
                <ScrollLink
                  key={item.key}
                  to={item.key}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-lg hover:text-cos-orange transition-colors duration-200"
                  onClick={handleMenuClose}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.key}
                  to={`/#${item.key}`}
                  className="cursor-pointer text-lg hover:text-cos-orange transition-colors duration-200"
                  onClick={handleMenuClose}
                >
                  {item.label}
                </RouterLink>
              )
            )}

            {/* Divider */}
            <div className="w-16 h-px bg-white/30 my-2" />

            {/* Page links */}
            {NAV_PAGE_ITEMS.map((item) => (
              <RouterLink
                key={item.key}
                to={item.path}
                className={`cursor-pointer text-lg hover:text-cos-orange transition-colors duration-200 ${
                  location.pathname === item.path ? "text-cos-orange" : ""
                }`}
                onClick={handleMenuClose}
              >
                {item.label}
              </RouterLink>
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
