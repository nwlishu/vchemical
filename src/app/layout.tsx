import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const roboto = Noto_Sans_Thai({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "V-Chemical | ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูง",
  description:
    "V-Chemical - ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูงสำหรับอุตสาหกรรม เรามีผลิตภัณฑ์เคมีภัณฑ์คุณภาพสูงที่หลากหลายสำหรับอุตสาหกรรมเกษตรและอุตสาหกรรมยาง",
  authors: [{ name: "V-Chemical" }],
  creator: "V-Chemical",
  publisher: "V-Chemical",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://vchemicalandmachinery.com",
    siteName: "V-Chemical",
    title: "V-Chemical | ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูง",
    description:
      "V-Chemical - ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูงสำหรับอุตสาหกรรม เรามีผลิตภัณฑ์เคมีภัณฑ์คุณภาพสูงที่หลากหลายสำหรับอุตสาหกรรมเกษตรและอุตสาหกรรมยาง",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "V-Chemical Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V-Chemical | ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูง",
    description:
      "V-Chemical - ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูงสำหรับอุตสาหกรรม",
    images: ["/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "32x32",
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
    <html lang="th">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
