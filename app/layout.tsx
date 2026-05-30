import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeInit } from "@/components/ThemeInit";
import "../styles.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banco Yona | Desde 2019. Superou a pandemia. Venceu.",
  description:
    "Banco digital desde 2019. Atravessou a pandemia, superou desafios e hoje chega mais forte — tipografia e experiencia no padrao das fintechs financeiras.",
  openGraph: {
    title: "Banco Yona — Desde 2019",
    description:
      "Fundado em 2019, o Banco Yona passou pela pandemia, superou e venceu. Banco digital com confianca de instituicao financeira.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=82",
        width: 1200,
        height: 630,
        alt: "Pessoas em coworking representando a campanha Banco Yona",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable}`}>
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
