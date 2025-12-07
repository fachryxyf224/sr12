import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Toko SR12 Elbirroe - Skincare Herbal Alami",
  description: "Pusat produk SR12 Herbal Skincare terpercaya. Cantik, Sehat, Alami bersama SR12.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased flex flex-col min-h-screen bg-white`}
      >
        <PublicLayout
          navbar={<Navbar />}
          footer={<Footer />}
        >
          {children}
        </PublicLayout>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
