"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiMenu5Line, RiShoppingCartLine } from "react-icons/ri";
import { HiXMark, HiChevronDown } from "react-icons/hi2";
import { GrFormSearch } from "react-icons/gr";
import { FaHeart } from "react-icons/fa6";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/95"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-2xl text-transparent bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text">
            TechHub
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="/" className="hover:text-teal-600 transition font-medium">
              Accueil
            </a>
            <div className="relative group">
              <button className="hover:text-teal-600 transition font-medium flex items-center gap-1">
                Catégories <HiChevronDown size={16} />
              </button>
            </div>
            <a href="#" className="hover:text-teal-600 transition font-medium">
              Promo
            </a>
            <a href="#" className="hover:text-teal-600 transition font-medium">
              Contact
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition hidden md:block">
              <GrFormSearch size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <FaHeart size={20} />
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <RiShoppingCartLine size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <HiXMark size={24} />
              ) : (
                <RiMenu5Line size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4 space-y-2">
            <a href="/" className="block py-2 hover:text-teal-600">
              Accueil
            </a>
            <a href="#" className="block py-2 hover:text-teal-600">
              Catégories
            </a>
            <a href="#" className="block py-2 hover:text-teal-600">
              Promo
            </a>
            <a href="#" className="block py-2 hover:text-teal-600">
              Contact
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
