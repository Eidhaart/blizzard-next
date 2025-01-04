"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "./Modal.css";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ showModal, handleClose, aboutStrings }) => {
  const { t } = useTranslation();

  // Split the description text into paragraphs by detecting \n\n
  const descriptionParagraphs = aboutStrings.aboutMe.description2.split("\n\n");

  return (
    <div
      className={`modal-overlay ${showModal ? "visible" : ""}`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={handleClose}>
          <IoCloseOutline />
        </span>
        <div className="modal-banner">
          <img src="/banner.jpg" alt="Banner" className="modal-banner-img" />
        </div>
        <div className="modal-description">
          <h2>{t("aboutMe.title2")}</h2>
          <br />
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
