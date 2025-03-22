"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  code: string;
  specifications: {
    label: string;
    value: string;
  }[];
}

// This would typically come from your database or API
const products: Product[] = [
  {
    id: 1,
    name: "Carbon Black N330",
    description: "คาร์บอนแบล็คคุณภาพสูง สำหรับผลิตภัณฑ์ยางทั่วไป",
    category: "เคมีภัณฑ์ยาง",
    image: "/178363_0.jpg",
    code: "CB-N330",
    specifications: [
      { label: "CAS Number", value: "1333-86-4" },
      { label: "Appearance", value: "Black powder" },
      { label: "Particle Size", value: "30-40 nm" },
      { label: "Surface Area", value: "75-85 m²/g" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 2,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178364_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 3,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178365_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 4,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178366_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 5,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178367_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 6,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178368_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 7,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178369_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 8,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178370_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 9,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178371_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 10,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178372_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 11,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178373_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 12,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178374_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 13,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178375_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 14,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178376_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  {
    id: 15,
    name: "Zinc Oxide",
    description: "ซิงค์ออกไซด์ สำหรับกระบวนการวัลคาไนซ์ยาง",
    category: "เคมีภัณฑ์ยาง",
    image: "/178377_0.jpg",
    code: "ZnO",
    specifications: [
      { label: "CAS Number", value: "1317-11-7" },
      { label: "Appearance", value: "White powder" },
      { label: "Particle Size", value: "Average particle size varies" },
      { label: "Surface Area", value: "Depends on particle size" },
      { label: "Storage", value: "Store in a cool, dry place" },
    ],
  },
  // Add more products as needed
];

export default function ProductPage() {
  const params = useParams();
  const slug = parseInt(params.slug as string);
  const product = products.find((p) => p.id === slug);

  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <p className="text-gray-600">The product you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600">
          <Link href="/products">สินค้า</Link> / {product.name}
        </p>
        <br />
        <hr className="border-gray-300" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <br />
          <h1 className="text-3xl font-bold">ชื่อสินค้า : {product.name}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            
            {/* Product Image with Zoom Effect */}
            <div className="relative aspect-square overflow-hidden rounded-lg group" onMouseMove={handleMouseMove}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-150"
                style={{
                  transformOrigin: `${position.x}% ${position.y}%`,
                }}
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-lg text-gray-600">Code: {product.code}</p>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700">{product.description}</p>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
                <div className="grid grid-cols-1 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">{spec.label}</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="pt-4">
                <button className="w-full bg-[#15274B] text-white py-3 px-6 rounded-lg hover:bg-[#1e3a6d] transition-colors duration-300">
                  ติดต่อสอบถาม
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}