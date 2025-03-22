"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BusinessPartnerSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, bounce: 0.4 }}
          className="relative h-[400px] w-full"
        >
          <Image
            src="/handshake-business-people.jpg"
            alt="Business Partnership"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
        {/* <div>
          <Image
            src="/Placeholder.png"
            alt="Business Partnership"
            width={100}
            height={100}
            className="object-cover rounded-lg  "
          />
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="mt-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-[#15274B]"
            >
              คู่ค้าทางธุรกิจที่คุณไว้วาง
              <br />
              ใจในด้านเคมีภัณฑ์
            </motion.h2>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full lg:mt-16"
          >
            ที่บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
            <br />
            เรามีความเชี่ยวชาญในการจัดหาสารเคมีและเครื่องจักรคุณภาพสูงที่ออกแบบมาเฉพาะสำห
            รับอุตสาหกรรมยางและอื่นๆ ด้วยประสบการณ์กว่า 20 ปี
            เรามุ่งมั่นที่จะนำเสนอผลิตภัณฑ์
            และบริการที่ยอดเยี่ยมเพื่อตอบสนองความต้องการของคุณ
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartnerSection;
