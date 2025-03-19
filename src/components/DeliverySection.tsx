"use client";
import React from "react";
import Image from "next/image";

const FeatureCard = ({
  title,
  description,
  className = "",
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-xl text-center font-bold text-[#15274B] mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

const DeliverySection: React.FC = () => {
  return (
    <section className="py-20 bg-white md:h-[100vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6">
            กระบวนการจัดส่งและการขนส่ง
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            กระบวนการจัดส่งที่มีประสิทธิภาพของเราทำให้คำสั่งซื้อของคุณถูกจัดส่งอย่างรวดเร็ว
            <br />
            โดยเรามุ่งมั่นในการจัดส่งภายใน 48 ชั่วโมง
            เพื่อให้สามารถตอบสนองความต้องการเร่งด่วนของคุณได้ทันที
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-12">
            <FeatureCard
              title="การจัดส่งที่รวดเร็ว"
              description="เรามุ่งมั่นในการเพิ่มประสิทธิภาพเพื่อให้แน่ใจว่าผลิตภัณฑ์ของคุณจะถูกจัดส่งโดยไม่ล่าช้า"
              className="text-right"
            />
            <FeatureCard
              title="การจัดส่งที่น่าเชื่อถือ"
              description="ใช้วางใจกับงานของเราในการจัดส่งคำสั่งซื้อของคุณอย่างตรงเวลาและถูกต้องทุกครั้ง"
              className="text-right"
            />
          </div>

          {/* Center Image */}
          <div className="relative h-[400px] w-full">
            <Image
              src="/Placeholder.png"
              alt="Delivery Process"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-12">
            <FeatureCard
              title="ความพึงพอใจของลูกค้า"
              description="ความพึงพอใจของคุณคือสิ่งที่เราคำนึงถึงเป็นอันดับแรก"
              className="text-left"
            />
            <FeatureCard
              title="สั่งซื้อเลย"
              description="สัมผัสประสบการณ์บริการจัดส่งที่รวดเร็วของเราโดยสั่งซื้อวันนี้"
              className="text-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
