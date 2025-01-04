"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default function Navbar({ aboutStrings }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Pull out the translation function
  // If your translation namespace is "common", just do useTranslation("common")
  const { t, i18n } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("appLanguage");
    if (storedLanguage && storedLanguage !== i18n.language) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 50, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  }

  function handleChangeLanguage(lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem("appLanguage", lng);

    const currentQuery = new URLSearchParams(searchParams.toString());
    currentQuery.set("lang", lng);

    router.push(`/?${currentQuery.toString()}`);
    setIsLangMenuOpen(false);
  }

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo / Title */}
        <div
          className="navbar-logo-title"
          style={{ textAlign: windowWidth < 768 ? "center" : "left" }}
        >
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
          <a
            href="#"
            className="navbar-title"
            style={{ fontSize: windowWidth < 768 ? "0.9rem" : "1.2rem" }}
          >
            {/* Use the translated navbar title */}
            Blizzard Bartosz Gadziomski
          </a>
        </div>

        {/* Hamburger for small screens */}
        {windowWidth < 1000 && (
          <button
            className="navbar-hamburger"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsLangMenuOpen(false);
            }}
          >
            <p>Menu</p>
            <p className={isMenuOpen ? "down" : "up"}>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={isMenuOpen ? "chevron" : "chevronup"}
              />
            </p>
          </button>
        )}

        {/* Nav links */}
        <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#shows"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("shows");
            }}
            className="navbar-link"
          >
            {aboutStrings.navbar.shows}
          </a>
          <a
            href="#filmsAndAds"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("filmsAndAds");
            }}
            className="navbar-link"
          >
            {aboutStrings.navbar.filmsAndAds}
          </a>
          <a
            href="#eventServices"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("eventServices");
            }}
            className="navbar-link"
          >
            {aboutStrings.navbar.eventServices}
          </a>
          <a
            href="#dogSled"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("dogSled");
            }}
            className="navbar-link"
          >
            {aboutStrings.zaprzegitytul}
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="navbar-link"
          >
            {aboutStrings.navbar.contact}
          </a>
          {/* Add more links as needed, e.g. contact, dogSled, etc. */}
        </div>

        {/* Language Selector */}
        <div className="language-selector">
          <button
            className="language-button"
            onClick={() => {
              setIsLangMenuOpen(!isLangMenuOpen);
              setIsMenuOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faGlobe} />
            {"  "}
            {i18n.language ? i18n.language.toUpperCase() : "EN"}
            {"  "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={isLangMenuOpen ? "chevron" : "chevronup"}
            />
          </button>

          {isLangMenuOpen && (
            <div className="language-dropdown">
              <a
                onClick={() => handleChangeLanguage("en")}
                className="language-option"
              >
                <img
                  src="https://hatscripts.github.io/circle-flags/flags/gb.svg"
                  width="20"
                  alt="English"
                />{" "}
                EN
              </a>
              <a
                onClick={() => handleChangeLanguage("pl")}
                className="language-option"
              >
                <img
                  src="https://hatscripts.github.io/circle-flags/flags/pl.svg"
                  width="20"
                  alt="Polish"
                />{" "}
                PL
              </a>
              <a
                onClick={() => handleChangeLanguage("de")}
                className="language-option"
              >
                <img
                  src="https://hatscripts.github.io/circle-flags/flags/de.svg"
                  width="20"
                  alt="German"
                />{" "}
                DE
              </a>
              <a
                onClick={() => handleChangeLanguage("fr")}
                className="language-option"
              >
                <img
                  src="https://hatscripts.github.io/circle-flags/flags/fr.svg"
                  width="20"
                  alt="French"
                />{" "}
                FR
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
