"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const InfoCard = ({
  title,
  description,
  delay = 0,
}: {
  title: string;
  description: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-50 p-6 rounded-xl"
    >
      <h3 className="text-lg font-semibold text-[#15274B] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ProductCard = ({
  code,
  name,
  imageUrl,
  delay = 0,
}: {
  code: string;
  name: string;
  imageUrl: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white flex gap-8 p-6 rounded-xl shadow-md hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative w-48 h-48 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-4 flex-grow">
        <h3 className="font-bold text-[#15274B] text-lg">{name}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{code}</p>
        <Link
          href="#"
          className="inline-flex items-center text-[#15274B] hover:text-blue-700 font-medium"
        >
          เพิ่มเติม
          <svg
            className="w-5 h-5 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const ProductCatalog: React.FC = () => {
  const products = [
    {
      code: "SK 3000",
      name: "Latex Accelerator (กาว HOT AIR CURE)",
      imageUrl: "/178363_0.jpg",
    },
    {
      code: "PAZ 57",
      name: "Tackifier and Homogenizing Agen",
      imageUrl: "/178376_0.jpg",
    },
    {
      code: "TOKUSIL",
      name: "Silicon dioxide",
      imageUrl: "/178366_0.jpg",
    },
    {
      code: "TOKUSIL",
      name: "Silicon dioxide",
      imageUrl: "/178367_0.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6">
              ผลิตภัณฑ์สารเคมีและเครื่องจักรคุณภาพสูงหลากหลายประเภทของเรา
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-600 mb-8 ">
              ที่บริษัท 3 เทคนิคอล แอนด์ แมชชีนเนอร์ จำกัด <br />
              เรามีความภูมิใจในการนำเสนอสารเคมีและเครื่องจักรที่มีคุณภาพสูงจากแบรนด์เฉพาะที่เราดูแลตลอดกระบวนการต่างๆ
              ความมุ่งมั่นของเราในด้านคุณภาพและความพึงพอใจของลูกค้าคือสิ่งที่ทำให้เราเติบโตในตลาดเสมอมา
            </p>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-4 ">
              <InfoCard
                title="สารเคมีและเครื่องจักร"
                description="ผลิตภัณฑ์ที่ผ่านมาตรฐาน ISO และ GMP เพื่อรองรับความต้องการในอุตสาหกรรมของคุณ"
                delay={0.4}
              />
              <InfoCard
                title="การรับประกันคุณภาพ"
                description="ใช้ระบบการตรวจสอบที่เชื่อถือได้ของเราเพื่อรองรับความเชื่อการจัดส่งเร่งด่วนของคุณ"
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} delay={0.4} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 flex justify-end"
        >
          <button className="bg-[#15274B] text-white px-8 py-3 rounded-full hover:bg-blue-900 transition-colors">
            <Link href="/products">สินค้าทั้งหมด</Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalog;
