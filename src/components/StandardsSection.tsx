"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const StandardsSection: React.FC = () => {
  return (
    <section className="md:py-20 bg-gray-50 lg:h-[80vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col-reverse pt-8 lg:pt-0 lg:grid lg:grid-cols-2 lg:gap-12 items-center lg:h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, bounce: 0.4 }}
            className="relative md:h-[300px] lg:h-[600px] rounded-2xl p-8 flex items-center justify-center"
          >
            <div className="absolute inset-0  rounded-2xl" />
            <div className="relative w-full h-full flex  items-center justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-36 h-36 md:w-48 md:h-48 bg-white rounded-xl shadow-md md:p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src="/iso-Photoroom (1).png"
                  alt="ISO Certification"
                  fill
                  className="object-contain p-4"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-36 h-36 md:w-48 md:h-48 bg-white rounded-xl shadow-md md:p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src="/GMP-Photoroom (1).png"
                  alt="GMP Certification"
                  fill
                  className="object-contain "
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-[#15274B] text-sm font-semibold tracking-wider uppercase">
                มาตรฐานของเรา
              </span>
              <div className="w-20 h-1 bg-[#15274B] mt-2" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-[#15274B] leading-tight"
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
