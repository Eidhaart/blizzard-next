// src/app/layout.js (Server Component by default)
import "./globals.css";
import TranslationLoader from "./TranslationLoader"; // (Adjust path as needed)

export const metadata = {
  title: "Blizzard Bartosz Gadziomski",
  description:
    "Doświadcz zapierających dech w piersiach pokazów kaskaderskich z udziałem koni i usług produkcji filmowej z Bartoszem Gadziomskim.",
  keywords:
    "pokazy kaskaderskie, Bartosz Gadziomski, kaskaderka, produkcja filmowa, trening zwierząt, pokazy konne",
  openGraph: {
    title: "Pokazy Kaskaderskie Bartosz Gadziomski",
    description:
      "Poznaj niesamowite pokazy kaskaderskie z udziałem koni i profesjonalne usługi produkcji filmowej.",
    url: "https://blizzard.com/pl",
    siteName: "Pokazy Kaskaderskie Bartosz Gadziomski",

    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokazy Kaskaderskie Bartosz Gadziomski",
    description:
      "Poznaj niesamowite pokazy kaskaderskie z udziałem koni i profesjonalne usługi produkcji filmowej.",
    images: ["https://blizzard.com/logo.png"], // Zastąp właściwym adresem URL logo
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
