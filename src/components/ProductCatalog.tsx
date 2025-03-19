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
      className="bg-white flex gap-8"
    >
      {/* <div className="relative aspect-square mb-6"> */}
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        className="object-cover rounded"
      />
      {/* </div> */}
      <div className="space-y-4">
        <h3 className="font-bold text-[#15274B] text-lg">{code}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{name}</p>
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
      code: "P2008-5G",
      name: "Polyanetholesulfonic acid sodium salt",
      imageUrl: "/product1.png",
    },
    {
      code: "P2008-5G",
      name: "Polyanetholesulfonic acid sodium salt",
      imageUrl: "/product1.png",
    },
    {
      code: "P2008-5G",
      name: "Polyanetholesulfonic acid sodium salt",
      imageUrl: "/product1.png",
    },
    {
      code: "P2008-5G",
      name: "Polyanetholesulfonic acid sodium salt",
      imageUrl: "/product1.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex">
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
            <p className="text-gray-600 mb-12">
              ที่บริษัท 3 เทคนิคอล แอนด์ แมชชีนเนอร์ จำกัด
              เรามีความภูมิใจในการนำเสนอสารเคมีและเครื่องจักรที่มีคุณภาพสูงจากแบรนด์เฉพาะที่เราดูแลตลอดกระบวนการต่างๆ
              ความมุ่งมั่นของเราในด้านคุณภาพและความพึงพอใจของลูกค้าคือสิ่งที่ทำให้เราเติบโตในตลาดเสมอมา
            </p>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <InfoCard
                title="สารเคมีและเครื่องจักร"
                description="ผลิตภัณฑ์ที่ผ่านมาตรฐาน ISO และ GMP เพื่อรองรับความต้องการในอุตสาหกรรมของคุณ"
                delay={0.4}
              />
              <InfoCard
                title="การรับประกันคุณภาพ"
                description="ใช้ระบบการตรวจสอบที่เชื่อถือได้ของเราเพื่อรองรับความเชื่อการจัดส่งเร่งด่วนของคุณ"
                delay={0.6}
              />
            </div>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} delay={index * 0.2} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 flex justify-end"
        >
          <button className="bg-[#15274B] text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
            สินค้าทั้งหมด
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalog;
