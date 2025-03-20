"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const StandardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white md:h-[100vh] lg:h-[100vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, bounce: 0.4 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <Image
              src="/Placeholder.png"
              alt="ISO and GMP Standards"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6"
            >
              ความมุ่งมั่นของเราในการ ปฏิบัติตามมาตรฐาน ISO และ GMP
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              เราปฏิบัติตามมาตรฐาน ISO และ GMP
              เพื่อให้มั่นใจว่าสินค้าและวัตถุดิบของเรามีคุณภาพ สูงสุด
              ความมุ่งมั่นนี้ไม่เพียงแค่เพิ่มความปลอดภัยของสินค้า
              แต่ยังช่วยเสริมสร้างความ มั่นใจให้กับลูกค้าในผลิตภัณฑ์ของเรา
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
