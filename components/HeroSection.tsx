"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GridPattern,
  FloatingParticles,
  CircuitLines,
  BinaryRain,
  HexagonGrid,
  TechGlow,
} from "./BackgroundAnimations";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-primary-dark/90">
      {/* Background Animations */}
      <GridPattern />
      <FloatingParticles />
      <CircuitLines />
      <BinaryRain />
      <HexagonGrid />
      <TechGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-tight"
          >
            Transformamos{" "}
            <span className="text-primary-blue">ideias</span> em{" "}
            <span className="text-primary-blue">realidade digital</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-gray max-w-3xl mx-auto"
          >
            Desenvolvemos soluções tecnológicas inovadoras que impulsionam seu
            negócio. Sistemas, aplicativos, sites e inteligência artificial
            sob medida para sua empresa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contato"
              className="bg-primary-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Começar Projeto
            </Link>
            <Link
              href="/servicos"
              className="bg-transparent border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue/10 transition-all duration-200"
            >
              Ver Serviços
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-gray rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

