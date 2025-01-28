import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useActiveSection } from "../hooks/findActiveSection";
import "../font/font.css";
import "../styles/gradientAnimation.css";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const sections = ["welcome", "COS?", "Gallery", "where", "FAQ", "team", "contact"];
    const activeSection = useActiveSection(sections);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuToggle = (e: { stopPropagation: () => void; }) => {
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
                    className={`fixed top-0 w-auto mt-7 p-4 px-10 z-10 hidden sm:flex justify-center rounded-full transition-all duration-300 ${
                        isScrolled
                            ? "bg-gradient-background-image"
                            : "bg-gradient-background-image"
                    }`}
                >
                    <ul className="flex space-x-6">
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
                                    {section.charAt(0).toUpperCase() + section.slice(1).replace(/&/g, "& ")}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="pl-6 border-l ml-6 border-cos-off-black/20">
                        <LanguageSwitcher />
                    </div>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <nav
                className="sm:hidden fixed top-0 left-1/2 -translate-x-1/2 w-10/12 mt-7 p-4 z-10 rounded-full bg-gradient-background-image-vertical-short">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <img
                            src="/images/logo_white_transparent.png"
                            alt="logo"
                            className="w-14 transition-transform duration-200 hover:scale-105"
                            onClick={handleMenuToggle}
                        />
                    </div>

                    <div className="flex-1 flex justify-center">
                        <LanguageSwitcher/>
                    </div>

                    <div className="flex-1 flex justify-end">
                        <button
                            onClick={handleMenuToggle}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                        >
                            <FaBars className="text-xl text-white"/>
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
                            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                        >
                            <FaTimes className="text-2xl"/>
                        </button>
                    </div>

                    <div className="flex flex-col items-center space-y-6">
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
                                {section.charAt(0).toUpperCase() + section.slice(1).replace(/&/g, "& ")}
                            </Link>
                        ))}
                        <a
                            href="https://instagram.com/cityofseekers"
                            className="mt-8 p-3 hover:bg-white/10 rounded-full transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;