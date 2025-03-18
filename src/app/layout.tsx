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
  title: "V-Chemical",
  description:
    "V-Chemical - ผู้เชี่ยวชาญด้านเคมีภัณฑ์คุณภาพสูงสำหรับอุตสาหกรรม",
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
