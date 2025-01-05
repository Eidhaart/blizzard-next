import { getTranslation } from "../getTranslations";
import { getGalleryImages } from "../getGalleryImages";
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

export const dynamic = "force-dynamic";

export default async function HomePage({ searchParams }) {
  const locale = searchParams.lang || "pl";
  const aboutStrings = await getTranslation(locale, "aboutMe");

  // Load gallery images
  const husariaImages = getGalleryImages("husaria");
  const rycerstwoImages = getGalleryImages("rycerstwo");
  const inneImages = getGalleryImages("inne");

  return (
    <div>
      <Head>
        <title>Pokazy Konne - Bartosz Gadziomski</title>
        <meta
          name="description"
          content="Zapierające dech w piersiach pokazy konne z udziałem Bartosza Gadziomskiego. Niesamowite występy i usługi kaskaderskie."
        />
        <meta
          name="keywords"
          content="pokazy konne, pokazy kaskaderskie, Bartosz Gadziomski, husaria, rycerstwo, psie zaprzęgi"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Pokazy Konne - Bartosz Gadziomski",
              url: "https://horsebackstuntshows.com",
              logo: "https://horsebackstuntshows.com/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+48 606 903 286",
                  email: "bartosz.gadziomski@gmail.com",
                  contactType: "Customer Service",
                  availableLanguage: ["Polish", "English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "PL",
              },
              description:
                "Profesjonalne pokazy konne, kaskaderskie i produkcje filmowe z udziałem Bartosza Gadziomskiego.",
            }),
          }}
        />
      </Head>

      <HeroSection />
      <Navbar aboutStrings={aboutStrings} />
      <AboutMe aboutStrings={aboutStrings} />
      <ShowsClient
        aboutStrings={aboutStrings}
        husariaImages={husariaImages}
        rycerstwoImages={rycerstwoImages}
        inneImages={inneImages}
      />
      <Filmy aboutStrings={aboutStrings} />
      <Kaskaderka aboutStrings={aboutStrings} />
      <ObslugaImprez aboutStrings={aboutStrings} />
      <Zaprzegi aboutStrings={aboutStrings} />
      <Contact aboutStrings={aboutStrings} />
      <Footer aboutStrings={aboutStrings} />
    </div>
  );
}
