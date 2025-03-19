"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white md:h-[100vh] lg:h-[100vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:h-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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
              สัมผัสความมุ่งมั่นของเราในการ ส่งมอบสารเคมี คุณภาพสูง
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 mb-8"
            >
              บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
              เชี่ยวชาญในการนำเข้าและจัดจำหน่าย เคมีภัณฑ์คุณภาพสูง
              เรามุ่งมั่นในการรักษามาตรฐานคุณภาพเพื่อให้มั่นใจ
              ว่าผลิตภัณฑ์ของเราตรงตามมาตรฐานอุตสาหกรรมสูงสุด
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3 className="text-xl font-bold text-[#15274B] mb-4">
                  การรับประกันคุณภาพ
                </h3>
                <p className="text-gray-600">
                  เราให้ความสำคัญในการปฏิบัติตามมาตรฐาน ISO และ GMP
                  สำหรับทุกผลิตภัณฑ์ที่ของเรา
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <h3 className="text-xl font-bold text-[#15274B] mb-4">
                  ประสิทธิภาพด้านต้นทุน
                </h3>
                <p className="text-gray-600">
                  ในฐานะผู้นำเข้าโดยตรง
                  เรามีการกำหนดราคาที่แข่งขันได้เพื่อสนับสนุนการเติบโตของธุรกิจของคุณ
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <Image
              src="/Placeholder.png"
              alt="About V-Chemical"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
