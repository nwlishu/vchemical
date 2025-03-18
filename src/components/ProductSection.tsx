"use client";
import React from "react";
import Image from "next/image";

const ProductSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/Placeholder.png"
              alt="Chemical Products"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6">
              ทางเลือกเคมีคุณภาพเยี่ยมสำหรับอุต
              <br />
              สาหกรรมยางและอุตสาหกรรมอื่นๆ
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
              <br />
              เชี่ยวชาญในการจัดหาสารเคมีคุณภาพสูงที่ตอบโจทย์เฉพาะสำหรับอุตสาหกรรมยางและ
              <br />
              อุตสาหกรรมอื่นๆ ด้วยความมุ่งมั่นในคุณภาพและการส่งมอบตรงเวลา
              เพื่อให้ธุรกิจของ
              <br />
              คุณเติบโตและประสบความสำเร็จด้วยทรัพยากรที่ดีที่สุด
            </p>
            <button className="bg-[#15274B] text-white hover:bg-blue-800 px-8 py-3 rounded-lg text-sm font-medium transition-colors duration-200">
              ดูสินค้าทั้งหมด
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
