"use client";

import { motion } from "framer-motion";
import {
  GridPattern,
  FloatingParticles,
  TechGlow,
} from "@/components/BackgroundAnimations";

export default function SobrePage() {
  const valores = [
    {
      title: "Inovação",
      description:
        "Buscamos constantemente novas tecnologias e metodologias para entregar soluções de ponta.",
      icon: "💡",
    },
    {
      title: "Excelência",
      description:
        "Comprometimento com a qualidade em cada linha de código e em cada projeto desenvolvido.",
      icon: "⭐",
    },
    {
      title: "Transparência",
      description:
        "Comunicação clara e honesta em todas as etapas do projeto, desde o planejamento até a entrega.",
      icon: "🔍",
    },
    {
      title: "Parceria",
      description:
        "Construímos relacionamentos duradouros, entendendo que o sucesso do cliente é o nosso sucesso.",
      icon: "🤝",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary-dark/90 text-white py-20 overflow-hidden">
        <GridPattern />
        <FloatingParticles />
        <TechGlow />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Sobre a Aestron
            </h1>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Transformando o futuro digital, um projeto de cada vez
            </p>
          </motion.div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold text-primary-dark mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-primary-gray">
                <p>
                  A Aestron Tecnologia nasceu da paixão por criar soluções que
                  realmente fazem a diferença. Fundada por profissionais com
                  anos de experiência no mercado de tecnologia, nossa missão é
                  democratizar o acesso a soluções digitais de alta qualidade.
                </p>
                <p>
                  Ao longo dos anos, desenvolvemos projetos para empresas de
                  diversos segmentos, desde startups inovadoras até grandes
                  corporações. Cada projeto é uma oportunidade de aprendizado e
                  crescimento, e é isso que nos motiva a continuar evoluindo.
                </p>
                <p>
                  Hoje, somos reconhecidos pela excelência técnica, pelo
                  comprometimento com nossos clientes e pela capacidade de
                  transformar desafios complexos em soluções elegantes e
                  eficientes.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 bg-gradient-to-br from-primary-blue/20 to-primary-dark/20 rounded-xl flex items-center justify-center"
            >
              <div className="text-8xl">🏢</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
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
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-display font-bold text-primary-blue mb-4">
                Missão
              </h3>
              <p className="text-primary-gray">
                Desenvolver soluções tecnológicas inovadoras que impulsionem o
                crescimento de nossos clientes, transformando desafios em
                oportunidades através da excelência técnica e do comprometimento
                com resultados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-display font-bold text-primary-blue mb-4">
                Visão
              </h3>
              <p className="text-primary-gray">
                Ser referência nacional em desenvolvimento de software e soluções
                tecnológicas, reconhecida pela inovação, qualidade e pelo
                impacto positivo que geramos na transformação digital das
                empresas.
              </p>
            </motion.div>
          </div>

          <div>
            <h3 className="text-3xl font-display font-bold text-primary-dark mb-8 text-center">
              Nossos Valores
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((valor, index) => (
                <motion.div
                  key={valor.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm text-center"
                >
                  <div className="text-4xl mb-4">{valor.icon}</div>
                  <h4 className="text-xl font-display font-semibold text-primary-dark mb-3">
                    {valor.title}
                  </h4>
                  <p className="text-primary-gray text-sm">{valor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
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
              Nossa Equipe
            </h2>
            <p className="text-xl text-primary-gray max-w-2xl mx-auto">
              Profissionais apaixonados por tecnologia e comprometidos com a
              excelência
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member, index) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-primary-gray/20 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-primary-blue/20 to-primary-dark/20 flex items-center justify-center">
                  <div className="text-6xl">👤</div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-display font-semibold text-primary-dark mb-1">
                    Membro da Equipe
                  </h4>
                  <p className="text-primary-gray text-sm">Cargo/Função</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

