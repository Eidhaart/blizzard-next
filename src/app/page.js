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
        <title>Pokazy Konne - Blizzard</title>
        <meta
          name="description"
          content="Zapierające dech w piersiach pokazy konne z udziałem Bartosza Gadziomskiego. Niesamowite występy i usługi kaskaderskie."
        />
        <meta
          name="keywords"
          content="pokazy konne, pokazy kaskaderskie, Bartosz Gadziomski, husaria, rycerstwo, psie zaprzęgi, eventy historyczne, obsługa pokazów, pokazy, pokazy historyczne, pokazy kaskaderskie, kaskaderzy konni, pokazy western, dżygitówka, trick riding, woltyż francuski, pokazy konne, pokaz konny, rycerze, pokazy rycerskie, turnieje rycerskie, turniej kopijniczy, walki konne, husaria, pokazy husarii, pokazy husarskie, lisowczycy, pokazy lisowczyków, rekonstrukcje historyczne, rekonstrukcje konne, rekonstrukcje husaria, rekonstrukcje rycerstwo, pokazy rękodzieła, pokazy kaletnictwa, pokazy powroźnictwa, pokazy pszczelarskie, pokazy zielarstwa, stoiska historyczne, psi zaprzęg, psie zaprzęgi, przejażdżki psimi zaprzęgami, przejażdżka psim zaprzęgiem, psy, konie, alpaki, sokoły, ptaki drapieżne, pokazy z alpakami, pokazy sokolnicze, pokazy szermiercze, szermierka historyczna, szermierka, charty, polowanie z chartami, pokazy chartów, pokazy polowania z chartami, kaskader, kaskaderzy, kaskader konny, kaskaderzy konni, kaskaderzy filmowi, kaskader filmowy, kaskaderka filmowa,koordynator kaskaderski, koordynacja kaskaderska, palenie na koniu, palenia filmowe, upadki kontrolowane, zwierzęta, tresowane zwierzęta, zwierzęta do filmów, zwierzęta do reklam, zwierzęta do sesji zdjęciowych, sesje zdjęciowe ze zwierzętami, tresowane zwierzęta, psy do filmów, psy do reklam, psy do sesji zdjęciowych, konie do filmów, konie do reklam, konie do sesji zdjęciowych, koty do filmów, koty do reklam, koty do sesji zdjęciowych, węże do filmów, węże do reklam, węże do sesji zdjęciowych"
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
