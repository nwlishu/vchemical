"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  // Add more products as needed
];

export default function ProductPage() {
  const params = useParams();
  const slug = parseInt(params.slug as string);
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product not found
          </h1>
          <p className="text-gray-600">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <br/>
      <hr/>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">Code: {product.code}</p>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700">{product.description}</p>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Specifications
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-2 border-b border-gray-200"
                    >
                      <span className="text-gray-600 font-medium">
                        {spec.label}
                      </span>
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
