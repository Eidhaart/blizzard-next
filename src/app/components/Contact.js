"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact({ aboutStrings }) {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="kontakt" id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-image-container">
            <img
              src="/piesioGrzesio.jpg"
              alt="Event Service"
              className="contact-card-image"
            />
            <div className="contact-text-overlay">
              <div className="contact-text-content">
                <h2 className="contact-heading">
                  {aboutStrings.contact.heading}
                </h2>
                <p className="contact-text">{aboutStrings.contact.intro}</p>
                <div className="contact-button-container">
                  <button onClick={openModal} className="contact-cta-button">
                    {aboutStrings.contact.ctaButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="contact-modal-overlay" onClick={closeModal}>
            <div
              className="contact-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="contact-close-button" onClick={closeModal}>
                &times;
              </span>
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
