"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Shows.css";
import ModalGallery from "./ModalGallery";

export default function Zaprzegi({ aboutStrings, zaprzegiImages }) {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [openGallery, setOpenGallery] = useState(false);

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setShowModal(false);
  };

  const closeGalleryModal = () => setOpenGallery(false);

  return (
    <section className="shows-section" id="dogSled">
      <div className="shows-container">
        <h1 className="shows-heading">{aboutStrings.zaprzegitytul}</h1>

        <br />
        <br />
        <br />

        <div className="show-category">
          {/* First Video and Text */}
          <div className="show-text">
            <p className="shows-intro">{aboutStrings.zaprzegidesc1}</p>
          </div>
          <div className="show-video">
            <div
              className="video-wrapper"
              onClick={() => openModal("/film4.mp4")}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="video-card"
                poster="/film1.jpg"
              >
                <source src="/film4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="gallery-button" onClick={() => setOpenGallery(true)}>
              {t("zdj")}
            </p>
          </div>
        </div>

        <div className="show-category">
          {/* Second Video and Text */}
          <div className="show-video">
            <div
              className="video-wrapper"
              onClick={() => openModal("/film3.mp4")}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="video-card"
                poster="/film1.jpg"
              >
                <source src="/film3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="show-text">
            <p className="shows-intro">{aboutStrings.zaprzegidesc2}</p>
          </div>
        </div>

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
        {openGallery && (
          <ModalGallery
            images={zaprzegiImages}
            isOpen={!!openGallery}
            closeModal={closeGalleryModal}
          />
        )}
      </div>
    </section>
  );
}
