"use client";
import React from "react";
import Image from "next/image";

const BusinessPartnerSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6">
              คู่ค้าทางธุรกิจที่คุณไว้วาง
              <br />
              ใจในด้านเคมีภัณฑ์และ
              <br />
              เครื่องจักร
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              ที่บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
              <br />
              เรามีความเชี่ยวชาญในการจัดหาสารเคมีและเครื่องจักรคุณภาพสูงที่ออกแบบมาเฉพาะสำห
              รับอุตสาหกรรมยางและอื่นๆ ด้วยประสบการณ์กว่า 20 ปี
              เรามุ่งมั่นที่จะนำเสนอผลิตภัณฑ์
              และบริการที่ยอดเยี่ยมเพื่อตอบสนองความต้องการของคุณ
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-[600px] w-full">
            <Image
              src="/Placeholder.png"
              alt="Business Partnership"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartnerSection;
