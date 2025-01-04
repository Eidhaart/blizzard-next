"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Shows.css";
import ModalGallery from "./ModalGallery";
import ContactForm from "./ContactForm";

export default function ShowsClient({
  aboutStrings,
  husariaImages,
  rycerstwoImages,
  inneImages,
}) {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [showContModal, setShowContModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [openGalleryCategory, setOpenGalleryCategory] = useState(null);

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setShowModal(false);
  };

  const openContModal = () => setShowContModal(true);
  const closeContModal = () => setShowContModal(false);

  const closeGalleryModal = () => setOpenGalleryCategory(null);

  return (
    <section className="shows-section" id="shows">
      <div className="shows-container">
        <h1 className="shows-heading">{aboutStrings.shows.heading}</h1>
        <p className="shows-intro">{aboutStrings.shows.intro1}</p>
        <p className="shows-intro">{aboutStrings.shows.intro2}</p>

        <br />
        <br />
        <br />

        {/* Husaria Category */}
        <div className="show-category">
          <div className="show-text">
            <p>{aboutStrings.shows.categories.husaria.description}</p>
          </div>
          <div className="show-video">
            <h2>{aboutStrings.shows.categories.husaria.title}</h2>
            <div
              className="video-wrapper"
              onClick={() => openModal("/Husaria.mp4")}
            >
              <video autoPlay muted loop playsInline className="video-card">
                <source
                  src="/Husaria.mp4"
                  type="video/mp4"
                  alt="Pokaz Konny z Husarią"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p
              className="gallery-button"
              onClick={() => setOpenGalleryCategory("husaria")}
            >
              {t("zdj")}
            </p>
          </div>
        </div>

        {/* Rycerstwo Category */}
        <div className="show-category">
          <div className="show-video">
            <h2>{aboutStrings.shows.categories.rycerstwo.title}</h2>
            <div
              className="video-wrapper"
              onClick={() => openModal("/Rycerstwo.mp4")}
            >
              <video autoPlay muted loop playsInline className="video-card">
                <source
                  src="/Rycerstwo.mp4"
                  type="video/mp4"
                  alt="Pokaz Konny Rycerstwo"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p
              className="gallery-button"
              onClick={() => setOpenGalleryCategory("rycerstwo")}
            >
              {t("zdj")}
            </p>
          </div>
          <div className="show-text">
            <p>{aboutStrings.shows.categories.rycerstwo.description}</p>
          </div>
        </div>

        {/* Inne Category */}
        <div className="show-category">
          <div className="show-text">
            <p>{aboutStrings.shows.categories.inne.description}</p>
          </div>
          <div className="show-video">
            <h2>{aboutStrings.shows.categories.inne.title}</h2>
            <div
              className="video-wrapper"
              onClick={() => openModal("/video-file.mp4")}
            >
              <video autoPlay muted loop playsInline className="video-card">
                <source src="/video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p
              className="gallery-button"
              onClick={() => setOpenGalleryCategory("inne")}
            >
              {t("zdj")}
            </p>
          </div>
        </div>

        {/* Contact Modal */}
        <div className="cta-container">
          <button onClick={openContModal} className="cta-button">
            {aboutStrings.shows.contactButton}
          </button>
        </div>
        {showContModal && (
          <div className="contact-modal-overlay" onClick={closeModal}>
            <div
              className="contact-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="contact-close-button" onClick={closeContModal}>
                &times;
              </span>
              <ContactForm />
            </div>
          </div>
        )}

        {/* Video Modal */}
        {showModal && (
          <div className="video-modal-overlay" onClick={closeModal}>
            <div
              className="video-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="video-close-button" onClick={closeModal}>
                &times;
              </span>
              {currentVideo && (
                <video controls autoPlay style={{ width: "100%" }}>
                  <source src={currentVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        )}

        {/* Gallery Modal */}
        {openGalleryCategory && (
          <ModalGallery
            images={
              openGalleryCategory === "husaria"
                ? husariaImages
                : openGalleryCategory === "rycerstwo"
                ? rycerstwoImages
                : inneImages
            }
            isOpen={!!openGalleryCategory}
            closeModal={closeGalleryModal}
          />
        )}
      </div>
    </section>
  );
}
