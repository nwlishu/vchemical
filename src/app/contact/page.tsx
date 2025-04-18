"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-[#15274B]">
        <div className="absolute inset-0 bg-black/50 " />
        <div className="relative z-10 h-full flex items-center justify-center mt-12">
          <motion.div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              ติดต่อเรา
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/90 text-lg"
            >
              บริษัท วี เคมิคอล แอนด์ แมชินเนอรี่ จำกัด
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/80"
            >
              พร้อมที่จะมอบโซลูชั่นที่ดีที่สุดและตอบความต้องการของคุณ
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 -mt-20 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-[#15274B] mb-8">
                  Get in touch
                </h2>

                {/* Head Office */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#15274B]">Head Office</h3>
                  <p className="text-gray-600">
                    65/1 จรัญสนิทวงศ์44 แขวงบางยี่ขัน
                    <br />
                    เขตบางพลัด กรุงเทพฯ 10700
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#15274B]">Email Us</h3>
                  <p className="text-gray-600">vchemical@hotmail.co.th</p>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <h3 className="font-bold text-[#15274B]">Call Us</h3>
                  <p className="text-gray-600">
                    Phone: 02-435-5049, 081-855-2903, 080-963-0655
                    <br />
                    Fax: 02-8834521
                  </p>
                </div>
              </motion.div>

              {/* Map Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] md:h-[500px]"
              >
                <Image
                  src="/v_map.png"
                  alt="Office Location Map"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1055.4073789572844!2d100.48843033005097!3d13.776852046576325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299b4a6a8e029%3A0x3475d004f6075329!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4p-C4tSDguYDguITguKHguLTguITguK3guKUg4LmB4Lit4LiZ4LiU4LmMIOC5geC4oeC4iuC4tOC4meC5gOC4meC4reC4o-C4teC5iCDguIjguLPguIHguLHguJQ!5e0!3m2!1sen!2sth!4v1742611168847!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
