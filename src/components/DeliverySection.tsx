"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureCard = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={className}
  >
    <h3 className="text-xl font-bold text-[#15274B] mb-2">{title}</h3>

    <p className="text-gray-600">
      <span className="md:hidden">- </span>
      {description}
    </p>
  </motion.div>
);

const DeliverySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 lg:h-[100vh] md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#15274B] mb-6">
            กระบวนการจัดส่งและการขนส่ง
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            กระบวนการจัดส่งที่มีประสิทธิภาพของเราทำให้คำสั่งซื้อของคุณถูกจัดส่งอย่างรวดเร็ว
            <br />
            โดยเรามุ่งมั่นในการจัดส่งภายใน 48 ชั่วโมง
            เพื่อให้สามารถตอบสนองความต้องการเร่งด่วนของคุณได้ทันที
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Features */}
          <div className="space-y-12">
            <FeatureCard
              title="การจัดส่งที่รวดเร็ว"
              description="เรามุ่งมั่นในการเพิ่มประสิทธิภาพเพื่อให้แน่ใจว่าผลิตภัณฑ์ของคุณจะถูกจัดส่งโดยไม่ล่าช้า"
              className="lg:text-right"
            />
            <FeatureCard
              title="การจัดส่งที่น่าเชื่อถือ"
              description="ใช้วางใจกับงานของเราในการจัดส่งคำสั่งซื้อของคุณอย่างตรงเวลาและถูกต้องทุกครั้ง"
              className="lg:text-right"
            />
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block relative h-[400px] w-full"
          >
            <Image
              src="/delivery.jpg"
              alt="Delivery Process"
              fill
              className="object-cover  shadow-lg rounded-tl-2xl rounded-br-2xl"
            />
          </motion.div>

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
