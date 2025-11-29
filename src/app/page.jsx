"use client";
import { IoIosStar } from "react-icons/io";
import React, { useState } from "react";
import { FaHeart, FaRotateLeft, FaTruckFast } from "react-icons/fa6";
import { RiFilter2Fill, RiShieldLine } from "react-icons/ri";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Casque Wireless Pro",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 234,
      image: "bg-gradient-to-br from-teal-300 to-emerald-500",
      badge: "Promo",
    },
    {
      id: 2,
      name: "Montre Intelligente",
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 156,
      image: "bg-gradient-to-br from-teal-400 to-cyan-500",
      badge: null,
    },
    {
      id: 3,
      name: "Caméra Compacte",
      price: 549,
      originalPrice: 699,
      rating: 4.9,
      reviews: 412,
      image: "bg-gradient-to-br from-emerald-400 to-teal-600",
      badge: "Bestseller",
    },
    {
      id: 4,
      name: "Écouteurs Bluetooth",
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      reviews: 89,
      image: "bg-gradient-to-br from-cyan-400 to-blue-500",
      badge: "Nouveau",
    },
    {
      id: 5,
      name: "Batterie Portable",
      price: 79,
      originalPrice: 129,
      rating: 4.7,
      reviews: 267,
      image: "bg-gradient-to-br from-teal-500 to-emerald-600",
      badge: "Promo",
    },
    {
      id: 6,
      name: "Support Phone Premium",
      price: 49,
      originalPrice: 79,
      rating: 4.4,
      reviews: 121,
      image: "bg-gradient-to-br from-emerald-300 to-teal-400",
      badge: null,
    },
  ];
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="h-96 bg-gradient-to-r from-teal-600 to-emerald-500 flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full"></div>
          <div className="absolute bottom-5 left-20 w-32 h-32 bg-white rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Technologie Premium
          </h1>
          <p className="text-lg md:text-xl mb-8 text-teal-100">
            Découvrez nos produits high-tech au meilleur prix
          </p>
          <button className="px-8 py-3 bg-white text-teal-600 font-bold rounded-lg hover:shadow-xl transition">
            Découvrir la collection
          </button>
        </div>
      </section>

      <section className="bg-gray-50 py-8 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaTruckFast className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Livraison Gratuite</h3>
                <p className="text-sm text-gray-600">À partir de 50€</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <RiShieldLine className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Paiement Sécurisé</h3>
                <p className="text-sm text-gray-600">Garantie 100% protégé</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaRotateLeft className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Retour Facile</h3>
                <p className="text-sm text-gray-600">
                  30 jours satisfait ou remboursé
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Nos Produits
              </h2>
              <p className="text-gray-600">
                Sélection exclusive de produits technologiques
              </p>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-teal-600 hover:text-teal-600 transition mt-4 md:mt-0">
              <RiFilter2Fill size={18} />
              Filtrer
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-teal-200 transition cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <div className={`w-full h-full ${product.image}`}></div>

                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-bold rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg">
                    <FaHeart size={18} className="text-gray-700" />
                  </button>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <IoIosStar key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="w-full px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/30 transition"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border-2 border-teal-600 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition">
              Voir tous les produits
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 py-16 px-4 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Restez à jour
          </h2>
          <p className="text-gray-600 mb-6">
            Inscrivez-vous pour recevoir nos meilleures offres et nouveaux
            produits
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:outline-none"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-bold rounded-lg hover:shadow-lg transition">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
