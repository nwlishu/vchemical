"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#101d36] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                className="h-12 w-auto"
                src="/logo.png"
                alt="V-Chemical Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 ">
            <Link
              href="/"
              className="text-[#ffffff] hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              หน้าแรก
            </Link>
            <Link
              href="/about"
              className="text-[#ffffff] hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              href="/products"
              className="text-[#ffffff] hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              สินค้า
            </Link>
            <Link
              href="/contact"
              className="text-[#ffffff] hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
