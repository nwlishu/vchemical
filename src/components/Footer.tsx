"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#15274B] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="md:flex md:justify-between grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Logo and Company Info */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo.png"
                  alt="V Chemical Logo"
                  width={50}
                  height={50}
                />
              </Link>
              <p className="text-sm text-gray-300">
                65/1 จรัญสนิทวงศ์44 แขวงบางยี่ขัน
                <br />
                เขตบางพลัด กรุงเทพฯ 10700
              </p>
            </div>

            <div className="md:flex md:gap-36">
              {/* Quick Links */}
              <div className="md:col-span-1 mb-3 lg:mb-0">
                <h3 className="text-base font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      เกี่ยวกับเรา
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      สินค้า
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      ติดต่อเรา
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="md:col-span-2">
                <h3 className="text-base font-semibold mb-3">Contact Us</h3>
                <div className="grid  grid-cols-1 gap-4">
                  <div>
                    <p className="text-sm text-gray-300 mb-2">Email:</p>
                    <p className="text-sm text-gray-300">vchem@hotmail.co.th</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-2">Phone:</p>
                    <p className="text-sm text-gray-300">02-435-5049</p>
                    <p className="text-sm text-gray-300">081-855-2903</p>
                    <p className="text-sm text-gray-300">080-963-0655</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 mb-2">FAX:</p>
                    <p className="text-sm text-gray-300">02-8834521</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#101d36] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-gray-300">
              © 2025 V CHEMICAL AND MACHINERY CO., LTD. All rights reserved.
            </p>
            <div className="flex gap-4 mt-2 md:mt-0">
              {/* <Link
                href="/privacy-policy"
                className="text-gray-300 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-300 hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-settings"
                className="text-gray-300 hover:text-white"
              >
                Cookie Settings
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
