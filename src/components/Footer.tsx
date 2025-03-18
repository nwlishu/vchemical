"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#15274B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo Column */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.png"
                  alt="V Chemical Logo"
                  width={80}
                  height={80}
                  className="brightness-0 invert"
                />
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-gray-300">
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-gray-300">
                    สินค้า
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-300">
                    ติดต่อเรา
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Email</h3>
              <p className="mb-4">vchem@hotmail.co.th</p>

              <h3 className="text-lg font-semibold mb-4">Phone</h3>
              <p className="mb-2">02-435-5049</p>
              <p className="mb-2">081-855-2903</p>
              <p className="mb-4">080-963-0655</p>

              <h3 className="text-lg font-semibold mb-4">FAX</h3>
              <p>02-8834521</p>
            </div>

            {/* Address */}
            <div>
              <p className="text-sm leading-relaxed">
                65/1 จรัญสนิทวงศ์44 แขวงบางยี่ขัน
                <br />
                เขตบางพลัด กรุงเทพฯ 10700
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#101d36] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              © 2025 V CHEMICAL AND MACHINERY CO., LTD. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/cookie-settings" className="hover:text-gray-300">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
