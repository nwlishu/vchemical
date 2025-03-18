"use client";
import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6">
              สัมผัสความมุ่งมั่นของเราในการ
              <br />
              ส่งมอบสารเคมีและโซลูชั่นเครื่องจักร
              <br />
              คุณภาพสูง
            </h2>
            <p className="text-gray-600 mb-8">
              บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
              เชี่ยวชาญในการนำเข้าและจัดจำหน่าย เคมีภัณฑ์และเครื่องจักรคุณภาพสูง
              เรามุ่งมั่นในการรักษามาตรฐานคุณภาพเพื่อให้มั่นใจ
              ว่าผลิตภัณฑ์ของเราตรงตามมาตรฐานอุตสาหกรรมสูงสุด
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#15274B] mb-4">
                  การรับประกันคุณภาพ
                </h3>
                <p className="text-gray-600">
                  เราให้ความสำคัญในการปฏิบัติตามมาตรฐาน ISO และ GMP
                  สำหรับทุกผลิตภัณฑ์ที่ของเรา
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#15274B] mb-4">
                  ประสิทธิภาพด้านต้นทุน
                </h3>
                <p className="text-gray-600">
                  ในฐานะผู้นำเข้าโดยตรง
                  เรามีการกำหนดราคาที่แข่งขันได้เพื่อสนับสนุนการเติบโตของธุรกิจของคุณ
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/Placeholder.png"
              alt="About V-Chemical"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
