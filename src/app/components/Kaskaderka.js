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
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const closeGalleryModal = () => setOpenGalleryCategory(null);

  const openModal = () => {
    setShowModal(true);
  };

  const openVideoModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
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

        {/* First Image Category */}
        <div className="show-category">
          <div className="show-text">
            <p>{aboutStrings.kaskaderka.categories.horseStunts.description}</p>
          </div>
          <div className="show-video">
            <div
              className="video-wrapper"
              onClick={() =>
                openVideoModal(
                  "https://firebasestorage.googleapis.com/v0/b/horsebackstuntshows.firebasestorage.app/o/Kaskaderkamini.mp4?alt=media"
                )
              }
            >
              <video autoPlay muted loop playsInline className="video-card">
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/horsebackstuntshows.firebasestorage.app/o/Kaskaderka.mov?alt=media"
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
          {/* <div className="show-image">
            <img src="/FilmStunts.jpg" alt="Horse Stunt Show" />
            <p
              className="gallery-button"
              onClick={() => setOpenGalleryCategory("kaskaderka")}
            >
              {t("zdj")}
            </p>
          </div> */}
        </div>
        <div className="show-category">
          <div className="show-video">
            <div
              className="video-wrapper"
              onClick={() =>
                openVideoModal(
                  "https://firebasestorage.googleapis.com/v0/b/horsebackstuntshows.firebasestorage.app/o/Kaskaderka piesza v. 4.mp4?alt=media"
                )
              }
            >
              <video autoPlay muted loop playsInline className="video-card">
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/horsebackstuntshows.firebasestorage.app/o/kaskaderkapiesza.mp4?alt=media"
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
          <div className="show-text">
            <p>{aboutStrings.kaskaderka.categories.variedStunts.description}</p>
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
