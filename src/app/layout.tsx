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
  title: "V Chemical | บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด",
  description:
    "V Chemical - ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูงสำหรับอุตสาหกรรมเกษตรและอุตสาหกรรมยาง ค้นหาเคมีภัณฑ์ที่เหมาะสมสำหรับธุรกิจของคุณได้ที่นี่",
  authors: [{ name: "V-Chemical" }],
  creator: "V-Chemical",
  publisher: "V-Chemical",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://vchemicalandmachinery.com",
    siteName: "V-Chemical",
    title: "V Chemical | บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด",
    description:
      "V Chemical - ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูงสำหรับอุตสาหกรรมเกษตรและอุตสาหกรรมยาง ค้นหาเคมีภัณฑ์ที่เหมาะสมสำหรับธุรกิจของคุณได้ที่นี่",
    images: [
      {
        url: "https://vchemicalandmachinery.com/logo.png",
        width: 1200,
        height: 630,
        alt: "V-Chemical Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@VChemical",
    title: "V Chemical | บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด",
    description:
      "V Chemical - ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูงสำหรับอุตสาหกรรม",
    images: ["https://vchemicalandmachinery.com/logo.png"],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: [
      {
        url: "https://vchemicalandmachinery.com/logo.png",
        sizes: "32x32",
        type: "image/png",
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
