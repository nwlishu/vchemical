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
  id,
  code,
  name,
  imageUrl,
  delay = 0,
}: {
  id: number;
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
      className=" flex flex-col md:flex-row  md:gap-3 lg:gap-6 p-6  duration-300"
    >
      <div className=" h-auto lg:w-52 lg:h-auto flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={208}
          height={208}
          className="object-cover rounded-lg "
        />
      </div>
      <div className="space-y-1.5 flex-grow">
        <h3 className="font-bold text-[#15274B] text-sm md:text-base lg:text-lg mt-2 lg:mt-0">
          {name}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {code}
        </p>
        <Link
          href={`/products/${id}`}
          className="inline-flex items-center text-sm md:text-base text-[#15274B] hover:text-blue-700 font-medium"
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
      id: 1,
      code: "Latex Accelerator (กาว HOT AIR CURE)",
      name: "SK 3000",
      imageUrl: "/178363_0.jpg",
    },
    {
      id: 14,
      code: "PAZ 57",
      name: "Tackifier and Homogenizing Agen",
      imageUrl: "/178376_0.jpg",
    },
    {
      id: 4,
      code: "Silicon dioxide",
      name: "Tokusil 255  Packing 25Kg",
      imageUrl: "/178366_0.jpg",
    },
    {
      id: 5,
      code: "Silicon dioxide",
      name: "Tokusil HOA Packing 20Kg",
      imageUrl: "/178367_0.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="mb-16 flex flex-col md:flex-row md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-[#15274B] text-sm font-semibold tracking-wider uppercase">
                สินค้าของเรา
              </span>
              <div className="w-20 h-1 bg-[#15274B] mt-2" />
            </motion.div>
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} delay={0.4} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
