"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer({ aboutStrings }) {
  const { t } = useTranslation();

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main Links */}
        <div className="footer-column">
          <h3 className="footer-heading">{t("footer.links")}</h3>
          <ul className="footer-links">
            <li>
              <a
                className="footer-link"
                onClick={(e) => handleScroll(e, "shows")}
              >
                {aboutStrings.navbar.shows}
              </a>
            </li>
            <li>
              <a
                href="#filmy-reklamy"
                className="footer-link"
                onClick={(e) => handleScroll(e, "filmsAndAds")}
              >
                {aboutStrings.navbar.filmsAndAds}
              </a>
            </li>
            <li>
              <a
                href="#dogSled"
                className="footer-link"
                onClick={(e) => handleScroll(e, "dogSled")}
              >
                {aboutStrings.zaprzegitytul}
              </a>
            </li>
            <li>
              <a
                href="#obsluga-imprez"
                className="footer-link"
                onClick={(e) => handleScroll(e, "eventServices")}
              >
                {aboutStrings.navbar.eventServices}
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="footer-link"
                onClick={(e) => handleScroll(e, "contact")}
              >
                {aboutStrings.navbar.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="footer-column">
          <h3 className="footer-heading">{t("footer.follow")}</h3>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/horsebackstunts"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/blizzardbartoszgadziomski"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <address>
          <div className="footer-column">
            <h3 className="footer-heading">{t("footer.contact")}</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:bartosz.gadziomski@gmail.com"
                className="contact-link"
              >
                bartosz.gadziomski@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+48606903286" className="contact-link">
                +48 606 903 286
              </a>
            </p>
          </div>
        </address>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>
          &copy; 2024 Bartosz Gadziomski's Horse Stunt Shows. All rights
          reserved.
        </p>
        <p className="footer-designer">
          Designed by <span className="designer-name">Eidhaart</span>
        </p>
      </div>
    </footer>
  );
}
