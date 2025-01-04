"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Shows.css";
import ContactForm from "./ContactForm";
import ModalGallery from "./ModalGallery";

export default function Filmy({ aboutStrings, filmyImages }) {
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
    window.open("https://filmpolski.pl/fp/index.php?osoba=11180823", "_blank");
  };

  return (
    <section className="shows-section" id="filmsAndAds">
      <div className="shows-container">
        <h2 className="shows-heading">{aboutStrings.filmy.heading}</h2>
        <p className="shows-intro">{aboutStrings.filmy.intro}</p>

        {/* External Link Button */}
        <div className="cta-container">
          <button onClick={openExternalLink} className="cta-button">
            {aboutStrings.filmy.externalLinkButton}
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>

        {/* First Image Category */}
        <div className="show-category">
          <div className="show-text">
            <p>{aboutStrings.filmy.categories.animalsOnSet.description}</p>
          </div>
          <div className="show-image">
            <div className="show-text">
              <h2>{aboutStrings.filmy.categories.animalsOnSet.title}</h2>
            </div>
            <img src="/AnimalsOnSet.jpg" alt="Animals on Set" />
            <p
              className="gallery-button"
              onClick={() => setOpenGalleryCategory("animals")}
            >
              {t("zdj")}
            </p>
          </div>
        </div>

        {/* Gallery Modal */}
        {openGalleryCategory && (
          <ModalGallery
            images={filmyImages}
            isOpen={!!openGalleryCategory}
            closeModal={closeGalleryModal}
          />
        )}

        {/* Second Image Category */}
        <div className="show-category">
          <div className="show-image">
            <div className="show-text">
              <h2>
                {aboutStrings.filmy.categories.trainersAndPhotoshoots.title}
              </h2>
            </div>
            <img src="/AnimalTrainer.jpg" alt="Animal Trainer" />
          </div>
          <div className="show-text">
            <p>
              {aboutStrings.filmy.categories.trainersAndPhotoshoots.description}
            </p>
          </div>
        </div>

        {/* Contact Modal */}
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
