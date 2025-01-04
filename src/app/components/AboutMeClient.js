"use client";

import React, { useState } from "react";
import Modal from "../components/Modal";
import "./AboutMe.css";

export default function AboutMeClient({ aboutStrings }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="about-me">
      <div className="about-me-container">
        <div className="about-me-content">
          <div className="about-me-image">
            <img src="/your-image.jpg" alt="Bartosz Gadziomski" />
          </div>
          <div className="about-me-text">
            <h2>{aboutStrings.aboutMe.title}</h2>
            <p>{aboutStrings.aboutMe.description}</p>
            <button onClick={() => setShowModal(true)} className="cta-button">
              {aboutStrings.aboutMe.buttonText}
            </button>
          </div>
        </div>
      </div>

      <Modal
        aboutStrings={aboutStrings}
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
    </section>
  );
}
