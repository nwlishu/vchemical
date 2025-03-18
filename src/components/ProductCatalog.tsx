"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const InfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#15274B] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const ProductCard = ({
  code,
  name,
  imageUrl,
}: {
  code: string;
  name: string;
  imageUrl: string;
}) => {
  return (
    <div className="bg-white flex">
      <div className="relative h-[300px] w-[300px]">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <h3 className="font-bold text-[#15274B]">{code}</h3>
        <p className="text-gray-600 text-sm">{name}</p>
        <Link
          href="#"
          className="inline-flex items-center text-sm text-[#15274B] hover:text-blue-700"
        >
          เพิ่มเติม
          <svg
            className="w-4 h-4 ml-1"
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
    </div>
  );
};

const ProductCatalog: React.FC = () => {
  const products = [
    {
      code: "P2008-5G",
      name: "Polyanetholesulfonic acid sodium salt",
      imageUrl: "/Placeholder.png",
    },
    {
      code: "P2008-5G",
      name: "Polyanetholesulfonic acid sodium salt",
      imageUrl: "/Placeholder.png",
    },
    {
      code: "P2008-5G",
      name: "Polyanetholesulfonic acid sodium salt",
      imageUrl: "/Placeholder.png",
    },
    {
      code: "P2008-5G",
      name: "Polyanetholesulfonic acid sodium salt",
      imageUrl: "/Placeholder.png",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6">
              ผลิตภัณฑ์สารเคมีและเครื่องจักรคุณภาพสูงหลากหลายประเภทของเรา
            </h2>
          </div>
          <div>
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
              />
              <InfoCard
                title="การรับประกันคุณภาพ"
                description="ใช้ระบบการตรวจสอบที่เชื่อถือได้ของเราเพื่อรองรับความเชื่อการจัดส่งเร่งด่วนของคุณ"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#15274B] text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors">
            สินค้าทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
