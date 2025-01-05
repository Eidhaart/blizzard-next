import "./globals.css";
import TranslationLoader from "./TranslationLoader.js";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Pokazy Konne - Blizzard",
  description:
    "Pokazy konne i kaskaderskie najwyższej klasy z Bartoszem Gadziomskim. Obejrzyj niesamowite występy na żywo i profesjonalne produkcje filmowe.",
  keywords:
    "pokazy konne, pokaz konny, pokazy kaskaderskie, Bartosz Gadziomski, produkcja filmowa, husaria, rycerstwo, psie zaprzęgi",
  openGraph: {
    title: "Pokazy Konne - Blizzard",
    description:
      "Zapierające dech w piersiach pokazy konne z udziałem Bartosza Gadziomskiego. Niesamowite występy i usługi kaskaderskie.",
    url: "https://horsebackstuntshows.com",
    siteName: "Pokazy Konne - Blizzard",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokazy Konne - Blizzard",
    description:
      "Zapierające dech w piersiach pokazy konne z udziałem Bartosza Gadziomskiego. Niesamowite występy i usługi kaskaderskie.",
    images: ["https://horsebackstuntshows.com/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <TranslationLoader>
          {children}
          <Analytics />
          <SpeedInsights />
        </TranslationLoader>
      </body>
    </html>
  );
}
