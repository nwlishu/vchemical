"use client";
import React from "react";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Content */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-4">
              ติดต่อเรา
            </h2>
            <p className="text-gray-600 mb-6">
              ท่านสามารถค้นพบผลิตภัณฑ์และบริการของเราวันนี้
            </p>
          </div>

          {/* Right Button */}
          <Link
            href="/contact"
            className="bg-[#15274B] text-white hover:bg-blue-800 px-8 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
