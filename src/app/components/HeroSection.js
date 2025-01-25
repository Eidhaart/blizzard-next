"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "./HeroSection.css";

const HeroSection = () => {
  const { t } = useTranslation(); // Import translation function

  return (
    <header className="hero-section">
      <div className="overlay"></div>
      <video className="video-background" autoPlay loop muted playsInline>
        <source
          src="https://por6wk3yiismwyi6.public.blob.vercel-storage.com/videos/pokazy-YERgiYaqNh74tUECDrcD6vBce73NSY"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>{t("hero.title")}</h1>
        <p>
          <i>{t("hero.description")}</i>
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
