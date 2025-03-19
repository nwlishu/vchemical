"use client";
import React from "react";
import { motion } from "framer-motion";

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <blockquote className="mb-8">
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-medium text-[#15274B] leading-relaxed"
          >
            &ldquo;V Chemical and Machinery Co., Ltd. has been a reliable
            partner, consistently delivering quality products that meet our
            needs. Their commitment to excellence is unmatched in the
            industry.&rdquo;
          </motion.p>
        </blockquote>
      </div>
    </section>
  );
};

export default TestimonialSection;
