"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import products from "./data.json";

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

const ITEMS_PER_PAGE = 6;

const categories = ["ทั้งหมด", "อุตสาหกรรมเกษตร", "อุตสาหกรรมยาง"];

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    // whileInView={{ opacity: 1, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    // viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative ">
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        // fill
        className="max-w-full h-124 object-cover rounded "
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-[#15274B] mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{product.category}</span>
        <Link
          href={`/products/${product.id}`}
          className="bg-[#15274B] text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
        >
          ดูรายละเอียด
        </Link>
      </div>
    </div>
  </motion.div>
);

const PaginationButton = ({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
      disabled
        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
        : "bg-white text-[#15274B] hover:bg-gray-100"
    }`}
  >
    {children}
  </button>
);

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [currentPage, setCurrentPage] = useState(1);

  // Add useEffect to handle scroll reset when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]); // This will trigger when currentPage changes

  const filteredProducts =
    selectedCategory === "ทั้งหมด"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Update category selection to also reset page
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative h-[300px] bg-[#15274B]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ผลิตภัณฑ์ของเรา
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto px-4">
              เคมีภัณฑ์สูง ตอบโจทย์ทุกความต้องการของอุตสาหกรรม
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-[#15274B] text-white"
                    : "bg-white text-[#15274B] hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                ไม่พบสินค้าในหมวดหมู่ที่เลือก
              </p>
            </motion.div>
          )}
          {filteredProducts.length > 0 && (
            <div className="mt-12 flex justify-center items-center gap-4">
              <PaginationButton
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ก่อนหน้า
              </PaginationButton>

              <span className="text-[#15274B]">
                หน้า {currentPage} จาก {totalPages}
              </span>

              <PaginationButton
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                ถัดไป
              </PaginationButton>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
