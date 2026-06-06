import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SMKN 1 Cikampek",
    template: "%s | SMKN 1 Cikampek",
  },
  description: "Website Resmi SMKN 1 Cikampek — Informasi Sekolah, Berita, dan Profil",
  keywords: ["SMKN 1 Cikampek", "SMK Cikampek", "sekolah menengah kejuruan"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}