"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Shows.css";
import ContactForm from "./ContactForm";

export default function ({ aboutStrings }) {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Retrieve the activities arrays as objects
  const historicalStallsActivities = t(
    "eventService.categories.historicalStalls.activities",
    { returnObjects: true }
  );
  const otherAttractionsActivities = t(
    "eventService.categories.otherAttractions.activities",
    { returnObjects: true }
  );

  return (
    <section className="shows-section" id="eventServices">
      <div className="shows-container">
        <h2 className="shows-heading">{aboutStrings.eventService.heading}</h2>
        <p className="shows-intro">{t("eventService.intro")}</p>

        {/* First Category: Historical Stalls */}
        <div className="show-category">
          <div className="show-text-1">
            <h3>
              {aboutStrings.eventService.categories.historicalStalls.title}
            </h3>
            <ul>
              {Array.isArray(historicalStallsActivities) &&
                historicalStallsActivities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
            </ul>
          </div>
          <div className="show-image">
            <img src="/EventService.jpg" alt="Event Service" />
          </div>
        </div>

        {/* Second Category: Other Attractions */}
        <div className="show-category">
          <div className="show-image">
            <img src="/inne.jpg" alt="Other Attractions" />
          </div>
          <div className="show-text-1">
            <h3>
              {aboutStrings.eventService.categories.otherAttractions.title}
            </h3>
            <ul>
              {Array.isArray(otherAttractionsActivities) &&
                otherAttractionsActivities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
            </ul>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="cta-container">
          <button onClick={openModal} className="cta-button">
            {aboutStrings.eventService.contactButton}
          </button>
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
          </div>
        )}
      </div>
    </section>
  );
}
