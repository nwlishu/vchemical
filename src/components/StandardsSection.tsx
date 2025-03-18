"use client";
import React from "react";
import Image from "next/image";

const StandardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6">
              ความมุ่งมั่นของเราในการ
              <br />
              ปฏิบัติตามมาตรฐาน ISO และ
              <br />
              GMP
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              เราปฏิบัติตามมาตรฐาน ISO และ GMP
              เพื่อให้มั่นใจว่าสินค้าและวัตถุดิบของเรามีคุณภาพ สูงสุด
              ความมุ่งมั่นนี้ไม่เพียงแค่เพิ่มความปลอดภัยของสินค้า
              แต่ยังช่วยเสริมสร้างความ มั่นใจให้กับลูกค้าในผลิตภัณฑ์ของเรา
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/Placeholder.png"
              alt="ISO and GMP Standards"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
