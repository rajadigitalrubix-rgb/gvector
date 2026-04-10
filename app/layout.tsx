import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "G-Vector Realtech | Institutional Real Estate Advisory",
  description: "G-Vector Realtech is an institutional-grade real estate advisory firm delivering outcomes built on data, trust, and documented integrity across India.",
  keywords: "real estate advisory, institutional real estate, G-Vector Realtech, Gurgaon, Delhi, investment advisory, corporate real estate",
  icons: {
    icon: "/gvector-icon-v1.ico",
    apple: "/gvector-icon-v1.png",
  },
  openGraph: {
    title: "G-Vector Realtech | Institutional Real Estate Advisory",
    description: "Institutional-grade real estate advisory firm delivering outcomes built on data, trust, and documented integrity across India.",
    type: "website",
    url: "https://gvectorrealtech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ScrollToTop />
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
