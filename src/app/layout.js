// src/app/layout.js (Server Component by default)
import "./globals.css";
import TranslationLoader from "./TranslationLoader"; // (Adjust path as needed)

export const metadata = {
  title: "Pokazy Konne - Bartosz Gadziomski",
  description:
    "Pokazy konne i kaskaderskie najwyższej klasy z Bartoszem Gadziomskim. Obejrzyj niesamowite występy na żywo i profesjonalne produkcje filmowe.",
  keywords:
    "pokazy konne, pokaz konny, pokazy kaskaderskie, Bartosz Gadziomski, kaskaderka, produkcja filmowa, trening koni",
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
        <TranslationLoader>{children}</TranslationLoader>
      </body>
    </html>
  );
}
