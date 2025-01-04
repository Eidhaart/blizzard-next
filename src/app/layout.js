// src/app/layout.js (Server Component by default)
import "./globals.css";
import TranslationLoader from "./TranslationLoader"; // (Adjust path as needed)
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Pokazy Konne - Bartosz Gadziomski",
  description:
    "Pokazy konne i kaskaderskie najwyższej klasy z Bartoszem Gadziomskim. Obejrzyj niesamowite występy na żywo i profesjonalne produkcje filmowe.",
  keywords:
    "pokazy konne, pokaz konny, pokazy kaskaderskie, Bartosz Gadziomski, kaskaderka, produkcja filmowa, trening koni,eventy, eventy historyczne, obsługa pokazów, pokazy, pokazy historyczne, pokazy kaskaderskie, kaskaderzy konni, pokazy western, dżygitówka, trick riding, woltyż francuski, pokazy konne, pokaz konny, rycerze, pokazy rycerskie, turnieje rycerskie, turniej kopijniczy, walki konne, husaria, pokazy husarii, pokazy husarskie, lisowczycy, pokazy lisowczyków, rekonstrukcje historyczne, rekonstrukcje konne, rekonstrukcje husaria, rekonstrukcje rycerstwo, pokazy rękodzieła, pokazy kaletnictwa, pokazy powroźnictwa, pokazy pszczelarskie, pokazy zielarstwa, stoiska historyczne, psi zaprzęg, psie zaprzęgi, przejażdżki psimi zaprzęgami, przejażdżka psim zaprzęgiem, psy, konie, alpaki, sokoły, ptaki drapieżne, pokazy z alpakami, pokazy sokolnicze, pokazy szermiercze, szermierka historyczna, szermierka, charty, polowanie z chartami, pokazy chartów, pokazy polowania z chartami, kaskader, kaskaderzy, kaskader konny, kaskaderzy konni, kaskaderzy filmowi, kaskader filmowy, kaskaderka filmowa,koordynator kaskaderski, koordynacja kaskaderska, palenie na koniu, palenia filmowe, upadki kontrolowane, zwierzęta, tresowane zwierzęta, zwierzęta do filmów, zwierzęta do reklam, zwierzęta do sesji zdjęciowych, sesje zdjęciowe ze zwierzętami, tresowane zwierzęta, psy do filmów, psy do reklam, psy do sesji zdjęciowych, konie do filmów, konie do reklam, konie do sesji zdjęciowych, koty do filmów, koty do reklam, koty do sesji zdjęciowych, węże do filmów, węże do reklam, węże do sesji zdjęciowych",
  openGraph: {
    title: "Pokazy Konne - Bartosz Gadziomski",
    description:
      "Zapierające dech w piersiach pokazy konne z udziałem Bartosza Gadziomskiego. Niesamowite występy i usługi kaskaderskie.",
    url: "https://blizzard.com/pl",
    siteName: "Pokazy Konne - Bartosz Gadziomski",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokazy Konne - Bartosz Gadziomski",
    description:
      "Zapierające dech w piersiach pokazy konne z udziałem Bartosza Gadziomskiego. Niesamowite występy i usługi kaskaderskie.",
    images: ["https://blizzard.com/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 
           Because layout.js is a Server Component by default,
           we wrap children in a Client Component (TranslationLoader).
        */}
        <TranslationLoader>
          {children}
          <Analytics />
        </TranslationLoader>
      </body>
    </html>
  );
}
