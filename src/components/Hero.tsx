"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <motion.div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute inset-0 bg-black/40"
        />
      </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl text-left"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-20 h-1 bg-white/50 mb-8"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-white mb-8"
          >
            ที่บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
            เรามุ่งมั่นที่จะจัดหาสารเคมีและ
            เครื่องจักรคุณภาพสูงที่ตอบโจทย์ความต้องการของอุตสาหกรรมยางและ
            อุตสาหกรรมอื่น ๆ ภารกิจของเราคือการสนับสนุนการเติบโตของลูกค้าด้วย
            ผลิตภัณฑ์ที่เชื่อถือได้และบริการที่เป็นเลิศ
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffff] hover:bg-blue-700 text-[#000] font-semibold py-3 px-8 rounded-full transition-colors duration-200"
          >
            เกี่ยวกับเรา
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
