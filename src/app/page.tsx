"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import StandardsSection from "@/components/StandardsSection";
import ProductCatalog from "@/components/ProductCatalog";
import TestimonialSection from "@/components/TestimonialSection";
import DeliverySection from "@/components/DeliverySection";
import ContactSection from "@/components/ContactSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import BusinessPartnerSection from "@/components/BusinessPartnerSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ProductSection />
        <StandardsSection />
        <ProductCatalog />
        <TestimonialSection />
        <DeliverySection />
        <ExcellenceSection />
        <BusinessPartnerSection />
        <ContactSection />
      </main>
    </>
  );
}
