"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Desenvolvimento de Sistemas",
    description:
      "Sistemas personalizados e escaláveis para otimizar processos e aumentar a produtividade da sua empresa.",
    icon: "💻",
    href: "/servicos#sistemas",
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e multiplataforma para iOS e Android, com design moderno e performance excepcional.",
    icon: "📱",
    href: "/servicos#mobile",
  },
  {
    title: "Sites e E-commerce",
    description:
      "Sites responsivos, rápidos e otimizados para conversão. Lojas virtuais completas com gestão integrada.",
    icon: "🌐",
    href: "/servicos#sites",
  },
  {
    title: "IA e Automação",
    description:
      "Soluções inteligentes com machine learning, chatbots e automação de processos para reduzir custos.",
    icon: "🤖",
    href: "/servicos#ia",
  },
  {
    title: "Infraestrutura Cloud",
    description:
      "Arquitetura cloud escalável, segura e de alta disponibilidade para seus sistemas e aplicações.",
    icon: "☁️",
    href: "/servicos#infraestrutura",
  },
  {
    title: "Consultoria Tecnológica",
    description:
      "Análise estratégica, arquitetura de software e orientação técnica para transformação digital.",
    icon: "🎯",
    href: "/servicos#consultoria",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-dark mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-primary-gray max-w-2xl mx-auto">
            Soluções completas em tecnologia para impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-primary-gray/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-display font-semibold text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-primary-gray mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="text-primary-blue font-semibold hover:underline inline-flex items-center"
              >
                Saiba mais
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/servicos"
            className="bg-primary-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue/90 transition-all duration-200 inline-block"
          >
            Ver Todos os Serviços
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

