// src/app/page.js
import { getTranslation } from "../getTranslations";
import { getGalleryImages } from "../getGalleryImages"; // Import the helper function to load images
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMeClient";
import HeroSection from "./components/HeroSection";
import ShowsClient from "./components/ShowsClient";
import Filmy from "./components/Filmy";
import Kaskaderka from "./components/Kaskaderka";
import ObslugaImprez from "./components/ObslugaImprez";
import Zaprzegi from "./components/Zaprzegi";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from "next/head";

// Tells Next.js to run on each request (so it picks up new ?lang=)
export const dynamic = "force-dynamic";

export default async function HomePage({ searchParams }) {
  const locale = searchParams.lang || "en";
  const aboutStrings = await getTranslation(locale, "aboutMe");

  // Load gallery images on the server
  const husariaImages = getGalleryImages("husaria");
  const rycerstwoImages = getGalleryImages("rycerstwo");
  const inneImages = getGalleryImages("inne");
  const kaskaderkaImages = getGalleryImages("kaskaderka");
  const filmyImages = getGalleryImages("filmy");
  const zaprzegiImages = getGalleryImages("zaprzegi");

  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pokazy Konne Bartosz Gadziomski",
              url: "https://blizzard.com",
              logo: "https://blizzard.com/logo.png",
              sameAs: [
                "https://www.facebook.com/horsebackstunts",
                "https://www.instagram.com/blizzardbartoszgadziomski",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+48 606 903 286",
                  email: "bartosz.gadziomski@gmail.com",
                  contactType: "Customer Service",
                  availableLanguage: ["English", "Polish"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "PL",
              },
              description:
                "Profesjonalne pokazy konne, pokazy kaskaderskie i produkcje filmowe z udziałem Bartosza Gadziomskiego. Niezapomniane widowiska na żywo.",
            }),
          }}
        />
      </Head>

      <HeroSection />
      <Navbar aboutStrings={aboutStrings} />
      <AboutMe aboutStrings={aboutStrings} />

      {/* Pass gallery images to ShowsClient */}
      <ShowsClient
        aboutStrings={aboutStrings}
        husariaImages={husariaImages}
        rycerstwoImages={rycerstwoImages}
        inneImages={inneImages}
      />

      <Filmy aboutStrings={aboutStrings} filmyImages={filmyImages} />
      <Kaskaderka
        aboutStrings={aboutStrings}
        kaskaderkaImages={kaskaderkaImages}
      />
      <ObslugaImprez aboutStrings={aboutStrings} />
      <Zaprzegi aboutStrings={aboutStrings} zaprzegiImages={zaprzegiImages} />
      <Contact aboutStrings={aboutStrings} />
      <Footer aboutStrings={aboutStrings} />
    </div>
  );
}
