"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-[#15274B]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              เกี่ยวกับเรา
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto px-4">
              บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด - ผู้นำด้านเคมีภัณฑ์
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#15274B]">
                ประสบการณ์กว่า 25 ปี ในอุตสาหกรรมยาง
              </h2>
              <p className="text-gray-600 text-lg">
                บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด ก่อตั้งขึ้นในปี พ.ศ.
                2541
                โดยมีความมุ่งมั่นที่จะเป็นผู้นำในการจัดจำหน่ายเคมีภัณฑ์และเครื่องจักรสำหรับอุตสาหกรรมยาง
              </p>
              <p className="text-gray-600 text-lg">
                เรามีความเชี่ยวชาญในการคัดสรรผลิตภัณฑ์คุณภาพสูง
                พร้อมให้คำปรึกษาและบริการหลังการขายที่ครบวงจร
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[400px]"
            >
              <Image
                src="/pexels-fabriciohollanda-27670224.jpg"
                alt="Company Overview"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#15274B] mb-4">
              คุณค่าองค์กรของเรา
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              เรายึดมั่นในหลักการทำงานที่มีคุณภาพ โปร่งใส
              และใส่ใจในทุกรายละเอียด
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "คุณภาพสูงสุด",
                description:
                  "เรามุ่งมั่นในการคัดสรรผลิตภัณฑ์ที่มีคุณภาพสูงสุดให้กับลูกค้า",
                icon: "🌟",
              },
              {
                title: "ความน่าเชื่อถือ",
                description:
                  "เราสร้างความไว้วางใจผ่านการบริการที่ซื่อสัตย์และตรงไปตรงมา",
                icon: "🤝",
              },
              {
                title: "นวัตกรรม",
                description:
                  "เราพัฒนาอย่างต่อเนื่องเพื่อนำเสนอโซลูชั่นที่ดีที่สุด",
                icon: "💡",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-bold text-[#15274B] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#15274B] mb-8">
              วิสัยทัศน์ของเรา
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              &rdquo;มุ่งมั่นสู่การเป็นผู้นำในการจัดจำหน่ายเคมีภัณฑ์และเครื่องจักรสำหรับอุตสาหกรรมยางด้วยผลิตภัณฑ์คุณภาพสูง
              การบริการที่เป็นเลิศและความรับผิดชอบต่อสังคมและสิ่งแวดล้อม&rdquo;
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
