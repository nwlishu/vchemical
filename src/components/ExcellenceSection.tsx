"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const StatCard = ({
  number,
  description,
}: {
  number: string;
  description: string;
}) => {
  return (
    <div className="mb-8">
      <h3 className="text-5xl font-bold text-[#15274B] mb-2">{number}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ExcellenceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white md:h-[100vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:h-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm font-medium text-[#15274B] mb-2 block">
              Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6">
              ความมุ่งมั่นของเราต่อคุณภาพ และความน่าเชื่อถือ
            </h2>
            <p className="text-gray-600 mb-8">
              วัยประสบการณ์มากกว่า 25 ปี
              <br />
              เราภาคภูมิใจในการนำเสนอผลิตภัณฑ์ที่คุณภาพสูงให้กับลูกค้าของเรา
              ความมุ่งมั่นในคุณภาพของเราทำให้มั่นใจได้ว่าเรามาตรฐานอุตสาหกรรมที่สูงที่สุด
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <StatCard
                number="95%"
                description="อัตราความพึงพอใจของลูกค้าจากการสำรวจล่าสุด"
              />
              <StatCard
                number="48h"
                description="ระยะเวลาจัดส่งเฉลี่ยสำหรับผลิตภัณฑ์ของเรา"
              />
            </div>

            <Link
              href="/contact"
              className="inline-block bg-[#15274B] text-white hover:bg-blue-800 px-8 py-3 rounded-full text-sm font-medium transition-colors duration-200"
            >
              ติดต่อเรา
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px]"
          >
            <Image
              src="/pexels-fabriciohollanda-27670224.jpg"
              alt="Excellence in Quality"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
