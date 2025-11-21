"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-blue/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Pronto para Transformar Seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a alcançar novos patamares com tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-gray/10 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicitar Orçamento
            </Link>
            <Link
              href="/sobre"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Conheça Nossa História
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

