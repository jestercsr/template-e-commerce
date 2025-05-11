'use client';
import { motion } from 'framer-motion';

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="h-[400px] bg-gray-300 rounded animate-pulse" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-6 w-1/3 bg-gray-100 rounded animate-pulse mb-6" />
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-100 rounded animate-pulse my-2" />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
