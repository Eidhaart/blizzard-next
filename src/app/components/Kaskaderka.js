"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Shows.css";
import ContactForm from "./ContactForm";
import ModalGallery from "./ModalGallery";

export default function Kaskaderka({ aboutStrings, kaskaderkaImages }) {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [openGalleryCategory, setOpenGalleryCategory] = useState(null);

  const closeGalleryModal = () => setOpenGalleryCategory(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openExternalLink = () => {
    window.open("https://filmpolski.pl/fp/index.php?osoba=1170002", "_blank");
  };

  return (
    <section className="shows-section" id="kaskaderka-filmowa">
      <div className="shows-container">
        <h2 className="shows-heading">{aboutStrings.kaskaderka.heading}</h2>
        <p className="shows-intro">{aboutStrings.kaskaderka.intro1}</p>
        <p className="shows-intro">{aboutStrings.kaskaderka.intro2}</p>

        {/* External Link Button */}
        <div className="cta-container">
          <button onClick={openExternalLink} className="cta-button">
            {aboutStrings.kaskaderka.externalLinkButton}
          </button>
        </div>

        <br />
        <br />
        <br />

        {/* First Image Category */}
        <div className="show-category">
          <div className="show-text">
            <p>{aboutStrings.kaskaderka.categories.horseStunts.description}</p>
            <br />
            <p>{aboutStrings.kaskaderka.categories.variedStunts.description}</p>
          </div>
          <div className="show-image">
            <img src="/FilmStunts.jpg" alt="Horse Stunt Show" />
            <p
              className="gallery-button"
              onClick={() => setOpenGalleryCategory("kaskaderka")}
            >
              {t("zdj")}
            </p>
          </div>
        </div>

        {/* Gallery Modal */}
        {openGalleryCategory && (
          <ModalGallery
            images={kaskaderkaImages}
            isOpen={!!openGalleryCategory}
            closeModal={closeGalleryModal}
          />
        )}

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
