import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useActiveSection } from "../hooks/useActiveSection";
import "../font/font.css";
import "../styles/gradientAnimation.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { t } from "i18next";
import { SOCIAL, LINKS, NAV_SCROLL_ITEMS, NAV_PAGE_ITEMS, NAV_SECTIONS } from "../config/constants";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
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
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      // Hide header on scroll down, show on scroll up (mobile only)
      // Only hide after scrolling down 250px and moving 10px+ in scroll direction
      const scrollDelta = currentScrollY - lastScrollY.current;
      if (scrollDelta > 30 && currentScrollY > 250) {
        setIsHidden(true);
      } else if (scrollDelta < -5) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
          className={`fixed top-0 w-auto mt-7 p-4 px-5 z-10 hidden md:flex items-center justify-center rounded-full transition-all duration-300`}
          style={{
            background:
              "linear-gradient(135deg, rgba(120, 60, 90, 0.85) 0%, rgba(150, 85, 105, 0.83) 50%, rgba(175, 115, 100, 0.8) 100%)",
            backdropFilter: "blur(16px)",
            boxShadow: isScrolled
              ? "0 4px 30px rgba(0, 0, 0, 0.15)"
              : "0 4px 20px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Ticket Button */}
          <div className="mr-4">
            <a
              href={LINKS.TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cos-orange text-cos-off-black rounded-full font-omnes font-bold hover:brightness-110 transition-colors duration-200 shadow-[0_0_12px_rgba(254,195,96,0.4)]"
              aria-label={t("general.header.tickets")}
            >
              {t("general.header.tickets")}
            </a>
          </div>

          {/* Scroll Navigation Items */}
          <ul className="flex space-x-3">
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
                        ? "border-b-2 border-white/70 text-white"
                        : "text-white/75"
                    }`}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={`/#${item.key}`}
                    className="cursor-pointer font-omnes hover:text-white transition-colors duration-200 text-white/75"
                  >
                    {item.label}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-6 w-px bg-white/20 mx-3" />

          {/* Page Navigation Items */}
          <ul className="flex space-x-3">
            {NAV_PAGE_ITEMS.map((item) => (
              <li key={item.key}>
                <RouterLink
                  to={item.path}
                  className={`cursor-pointer font-omnes hover:text-white transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "border-b-2 border-white/70 text-white"
                      : "text-white/75"
                  }`}
                >
                  {item.label}
                </RouterLink>
              </li>
            ))}
          </ul>

          <div className="pl-3 border-l ml-3 border-white/15">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden fixed left-1/2 -translate-x-1/2 mt-4 px-5 py-3 z-10 rounded-full transition-all duration-300 ease-in-out ${
          isHidden ? "-top-24 opacity-0" : "top-0 opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(90, 40, 80, 0.9) 0%, rgba(180, 90, 120, 0.88) 50%, rgba(220, 140, 100, 0.85) 100%)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex items-center gap-4">
          {/* Ticket Button */}
          <div>
            <a
              href={LINKS.TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cos-orange text-cos-off-black rounded-full font-omnes font-bold hover:brightness-110 transition-colors duration-200 text-sm shadow-[0_0_12px_rgba(254,195,96,0.4)]"
              aria-label={t("general.header.tickets")}
            >
              {t("general.header.tickets")}
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={handleMenuToggle}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
          >
            <FaBars className="text-xl text-white" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 text-white z-20 p-8 overflow-y-auto"
          style={{
            background:
              "linear-gradient(180deg, rgb(90, 40, 80) 0%, rgb(160, 80, 100) 35%, rgb(200, 120, 90) 70%, rgb(180, 140, 100) 100%)",
          }}
          onClick={handleMenuClose}
        >
          <div className="w-full flex justify-end pb-16">
            <button
              onClick={handleMenuClose}
              aria-label="Close navigation menu"
              className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <FaTimes className="text-2xl" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col items-center space-y-5">
            {/* Ticket Button */}
            <div className="mb-2">
              <a
                href={LINKS.TICKET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-cos-orange text-cos-off-black rounded-full font-omnes font-bold hover:brightness-110 transition-colors duration-200 text-base shadow-[0_0_12px_rgba(254,195,96,0.4)]"
                aria-label={t("general.header.tickets")}
              >
                {t("general.header.tickets")}
              </a>
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
                  className="cursor-pointer text-lg hover:text-cos-yellow transition-colors duration-200"
                  onClick={handleMenuClose}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={item.key}
                  to={`/#${item.key}`}
                  className="cursor-pointer text-lg hover:text-cos-yellow transition-colors duration-200"
                  onClick={handleMenuClose}
                >
                  {item.label}
                </RouterLink>
              )
            )}

            {/* Divider */}
            <div className="w-16 h-px bg-white/30 my-1" />

            {/* Page links */}
            {NAV_PAGE_ITEMS.map((item) => (
              <RouterLink
                key={item.key}
                to={item.path}
                className={`cursor-pointer text-lg hover:text-cos-yellow transition-colors duration-200 ${
                  location.pathname === item.path ? "text-cos-yellow" : ""
                }`}
                onClick={handleMenuClose}
              >
                {item.label}
              </RouterLink>
            ))}
            {/* Divider */}
            <div className="w-16 h-px bg-white/30 my-1" />

            {/* Language Switcher */}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>

            {/* Social */}
            <a
              href={SOCIAL.INSTAGRAM_URL}
              aria-label="Follow us on Instagram"
              className="mt-4 p-3 hover:bg-white/10 rounded-full transition-colors duration-200"
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
