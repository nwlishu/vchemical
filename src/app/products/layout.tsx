import React from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Products | V Chemical and Machinery",
  description:
    "Browse our high-quality chemicals and machinery products for the rubber industry.",
};

export default function ProductsLayout({
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
