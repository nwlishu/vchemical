"use client";
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            ที่บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
            เรามุ่งมั่นที่จะจัดหาสารเคมีและ
            เครื่องจักรคุณภาพสูงที่ตอบโจทย์ความต้องการของอุตสาหกรรมยางและ
            อุตสาหกรรมอื่น ๆ ภารกิจของเราคือการสนับสนุนการเติบโตของลูกค้าด้วย
            ผลิตภัณฑ์ที่เชื่อถือได้และบริการที่เป็นเลิศ
          </p>
          <button className="bg-[#ffff] hover:bg-blue-700 text-[#000] font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            เกี่ยวกับเรา
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
