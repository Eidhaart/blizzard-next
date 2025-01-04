"use client";

import React, { useState } from "react";
import "./ModalGallery.css";
import { FaWindowClose } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const ModalGallery = ({ images, isOpen, closeModal }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openPreview = (index) => {
    setSelectedImageIndex(index);
  };

  const closePreview = () => {
    setSelectedImageIndex(null);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-gallery-overlay" onClick={closeModal}>
      <div
        className="modal-gallery-content"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="close-button" onClick={closeModal}>
          <IoCloseOutline />
        </span>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="gallery-grid-item"
              onClick={() => openPreview(index)}
            />
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {selectedImageIndex !== null && (
        <div className="image-preview-overlay" onClick={closePreview}>
          <div
            className="image-preview-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-button" onClick={closePreview}>
              <IoCloseOutline />
            </span>
            <img
              src={images[selectedImageIndex]}
              alt={`Preview Image ${selectedImageIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalGallery;
