"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Tecnologia de Ponta",
    description:
      "Utilizamos as mais modernas tecnologias e frameworks do mercado para garantir performance e escalabilidade.",
    icon: "⚡",
  },
  {
    title: "Design Excepcional",
    description:
      "Interfaces intuitivas e atraentes que proporcionam a melhor experiência para seus usuários.",
    icon: "🎨",
  },
  {
    title: "Suporte Contínuo",
    description:
      "Acompanhamento completo após o lançamento, com atualizações, manutenção e suporte técnico dedicado.",
    icon: "🛠️",
  },
  {
    title: "Segurança em Primeiro Lugar",
    description:
      "Implementamos as melhores práticas de segurança para proteger seus dados e os de seus clientes.",
    icon: "🔒",
  },
  {
    title: "Entrega Ágil",
    description:
      "Metodologias ágeis que garantem entregas rápidas e frequentes, mantendo você sempre informado.",
    icon: "🚀",
  },
  {
    title: "Custo-Benefício",
    description:
      "Soluções personalizadas que se adequam ao seu orçamento, sem comprometer qualidade ou funcionalidades.",
    icon: "💰",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-gray/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-dark mb-4">
            Por Que Escolher a Aestron?
          </h2>
          <p className="text-xl text-primary-gray max-w-2xl mx-auto">
            Diferenciais que fazem a diferença no seu projeto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-semibold text-primary-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

