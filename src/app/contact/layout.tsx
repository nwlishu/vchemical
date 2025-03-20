import React from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact Us | V Chemical and Machinery",
  description:
    "Get in touch with V Chemical and Machinery Co., Ltd. Find our contact information, location, and ways to reach us.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
