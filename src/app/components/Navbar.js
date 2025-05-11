'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function Navbar() {
  return (
    <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="px-8 py-4 flex justify-between items-center bg-pink-600 text-white border-b shadow sticky top-0 z-50"
      >
        <h1 className="text-2xl font-bold"><a href="/">🛍️ ShopNow</a></h1>
        <div className="flex gap-6 text-sm font-medium">
          <a href="/produits" className="hover:underline">Produits</a>
          <a href="#" className="hover:underline">Promos</a>
          <a href="#" className="hover:underline">Panier</a>
        </div>
    </motion.nav>
  )
}
