'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-pink-700 text-white px-6 py-10 mt-auto"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">ShopNow</h4>
          <p className="text-sm text-gray-200">Votre destination pour les dernières tendances.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Catégories</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            <li>Hommes</li>
            <li>Femmes</li>
            <li>Accessoires</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Assistance</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            <li>FAQ</li>
            <li>Retours</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Votre email"
              className="px-3 py-2 rounded bg-gray-800 text-white"
            />
            <button type="submit" className="px-3 py-2 bg-blue-600 rounded text-white hover:bg-blue-700">
              S'abonner
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-200">
        ShopNow &copy; {new Date().getFullYear()} — Livraison rapide et produits garantis.
      </div>
    </motion.footer>
  )
}
