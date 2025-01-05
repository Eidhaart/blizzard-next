import "./globals.css";
import TranslationLoader from "./TranslationLoader.jsss";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Pokazy Konne - Bartosz Gadziomski",
  description:
    "Pokazy konne i kaskaderskie najwyższej klasy z Bartoszem Gadziomskim. Obejrzyj niesamowite występy na żywo i profesjonalne produkcje filmowe.",
  keywords:
    "pokazy konne, pokaz konny, pokazy kaskaderskie, Bartosz Gadziomski, produkcja filmowa, husaria, rycerstwo, psie zaprzęgi",
  openGraph: {
    title: "Pokazy Konne - Bartosz Gadziomski",
    description:
      "Zapierające dech w piersiach pokazy konne z udziałem Bartosza Gadziomskiego. Niesamowite występy i usługi kaskaderskie.",
    url: "https://horsebackstuntshows.com",
    siteName: "Pokazy Konne - Bartosz Gadziomski",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokazy Konne - Bartosz Gadziomski",
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
        </TranslationLoader>
      </body>
    </html>
  );
}
