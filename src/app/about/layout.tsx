import React from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About Us | V Chemical and Machinery",
  description:
    "Learn about V Chemical and Machinery Co., Ltd. - Your trusted partner in chemical and machinery solutions for the rubber industry.",
};

export default function AboutLayout({
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
