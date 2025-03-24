"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white md:min-h-screen flex items-center relative">
      {/* Background pattern */}
      <div className="absolute inset-0  opacity-[0.02]" />

      <div className=" max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
        <div className="flex flex-col lg:grid md:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="text-[#15274B]/70 font-medium mb-2 block">
                เกี่ยวกับเรา
              </span>
              <div className="h-1 w-20 bg-[#15274B]" />
            </motion.div>
            <div className="lg:hidden flex justify-center">
              <Image
                src="/about-1.png"
                alt="เกี่ยวกับเรา"
                width={300} // Set a fixed width
                height={200} // Set a fixed height
                className="w-full h-60 rounded-tl-2xl rounded-br-2xl object-cover shadow-xl"
              />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold text-[#15274B] leading-tight"
            >
              สัมผัสความมุ่งมั่นของเราในการ
              <br />
              ส่งมอบสารเคมีคุณภาพสูง
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-700 text-base md:text-lg leading-relaxed "
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
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-[#15274B] mb-4">
                  การรับประกันคุณภาพ
                </h3>
                <p className="text-gray-700 text-base">
                  เราให้ความสำคัญในการปฏิบัติตามมาตรฐาน ISO และ GMP
                  สำหรับทุกผลิตภัณฑ์ที่ของเรา
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-[#15274B] mb-4">
                  ประสิทธิภาพด้านต้นทุน
                </h3>
                <p className="text-gray-700 text-base">
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
            className="hidden lg:block relative h-[300px] lg:h-[600px]  overflow-hidden "
          >
            <Image
              src="/about-1.png"
              alt="About V-Chemical"
              fill
              className="object-cover  transition-transform rounded-tl-2xl rounded-br-2xl duration-700 shadow-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
