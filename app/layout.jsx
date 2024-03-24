import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WebNova Solutions",
  description:
    "WebNova Solutions es una agencia de desarrollo de soluciones web a medida.",
  image: "/assets/images/logoSinFondo.png",
  instagram: "@webnovasolutions",
  type: "website",
  locale: "es_ES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
