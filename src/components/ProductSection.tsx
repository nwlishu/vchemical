"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 md:h-[100vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:h-full">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, bounce: 0.4 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <Image
              src="/Placeholder.png"
              alt="Chemical Products"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          {/* Right Content */}
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
              ทางเลือกเคมีคุณภาพเยี่ยมสำหรับอุต สาหกรรมยางและอุตสาหกรรมอื่นๆ
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 mb-8 text-lg"
            >
              บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
              <br />
              เชี่ยวชาญในการจัดหาสารเคมีคุณภาพสูงที่ตอบโจทย์เฉพาะสำหรับอุตสาหกรรมยางและ
              อุตสาหกรรมอื่นๆ ด้วยความมุ่งมั่นในคุณภาพและการส่งมอบตรงเวลา
              เพื่อให้ธุรกิจของ
              คุณเติบโตและประสบความสำเร็จด้วยทรัพยากรที่ดีที่สุด
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#15274B] text-white hover:bg-blue-800 px-8 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              <Link href="/products">ดูสินค้าทั้งหมด</Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
