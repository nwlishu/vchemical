"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  code: string;
  detail?: string;
  specifications: {
    label: string;
    value: string;
  }[];
}

const ListProduct: React.FC<Product> = ({
  id,
  name,
  description,
  specifications,
  detail,
  image,
  code,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Reset states when product changes
  useEffect(() => {
    setIsZoomed(false);
    setMousePosition({ x: 0, y: 0 });
  }, [id]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setMousePosition({ x: 0, y: 0 });
  };

  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product not founddd
          </h1>
          <p className="text-gray-600">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <p className="text-gray-600">
            <Link href="/products">สินค้า</Link> / {name}
          </p>
          <br />
          <hr className="border-gray-300" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <br />
            <h1 className="text-3xl font-bold">ชื่อสินค้า : {name}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div
                className="relative aspect-square overflow-hidden cursor-zoom-in"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={image}
                  alt={name}
                  fill
                  className={`object-contain transition-transform duration-300 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                  style={{
                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                  }}
                />
                {isZoomed && (
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {name}
                  </h1>
                  <p className="text-lg text-gray-600">Code: {code}</p>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700">{description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Specifications
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between py-2 border-b border-gray-200"
                      >
                        <span className="text-gray-600 font-medium">
                          {spec.label}
                        </span>
                        <div
                          className="text-gray-900"
                          dangerouslySetInnerHTML={{ __html: spec.value }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="py-4 text-gray-600 font-medium ">
                    <p className="py-2">Deatil</p>
                    <div
                      className="text-gray-900"
                      dangerouslySetInnerHTML={{ __html: detail ? detail : "" }}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="w-full bg-[#15274B] text-white py-3 px-6 rounded-lg hover:bg-[#1e3a6d] transition-colors duration-300"
                  >
                    ติดต่อสอบถาม
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
