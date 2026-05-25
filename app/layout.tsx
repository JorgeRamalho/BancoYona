import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../styles.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banco Yona | O banco para um mundo em movimento",
  description:
    "Landing page de lancamento do Banco Yona, um banco digital com identidade visual inspirada em 2019.",
  openGraph: {
    title: "Banco Yona",
    description:
      "O banco digital para quem mistura carreira, cidade e futuro com a energia visual de 2019.",
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
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
