"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-teal-600 text-white py-12 px-4"
    >
      <div className="md:flex justify-around">
        <div>
          <div className="font-bold text-lg text-transparent bg-gradient-to-r from-teal-200 to-emerald-500 bg-clip-text mb-3">
            TechHub
          </div>
          <p className="text-gray-300 text-sm">
            Votre destination pour les dernières tendances tech de confiance
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {["Produits", "Support", "À propos", "Mentions"].map((title, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Lien 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Lien 2
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition">
                    Lien 3
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8">
        <p className="text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} TechHub. Tous droits réservés. | CGV
          | Politique de confidentialité
        </p>
      </div>
    </motion.footer>
  );
}
