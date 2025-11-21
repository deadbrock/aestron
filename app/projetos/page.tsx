"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GridPattern,
  FloatingParticles,
  CircuitLines,
  TechGlow,
} from "@/components/BackgroundAnimations";

const sistemas = [
  {
    id: 1,
    name: "Pegasus",
    title: "Pegasus - Sistema de Gestão Logística",
    description:
      "Solução completa para gestão logística empresarial. Controle de estoque, rastreamento de entregas, gestão de transportadoras e otimização de rotas em uma única plataforma.",
    category: "Gestão Logística",
    icon: "🚚",
    status: "Em Produção",
    features: [
      "Controle de estoque em tempo real",
      "Rastreamento de entregas",
      "Gestão de transportadoras",
      "Otimização de rotas",
      "Relatórios analíticos",
    ],
  },
  {
    id: 2,
    name: "FGS",
    title: "FGS - Sistema de Gestão de Recursos Humanos",
    description:
      "Plataforma completa para gestão de RH. Controle de ponto, folha de pagamento, avaliações de desempenho, gestão de benefícios e muito mais.",
    category: "Recursos Humanos",
    icon: "👥",
    status: "Em Produção",
    features: [
      "Controle de ponto eletrônico",
      "Folha de pagamento automatizada",
      "Avaliações de desempenho",
      "Gestão de benefícios",
      "Dashboard de indicadores",
    ],
  },
  {
    id: 3,
    name: "Gestão de Candidatos",
    title: "Sistema de Gestão de Candidatos",
    description:
      "Solução completa para recrutamento e seleção. Gestão de vagas, triagem de currículos, agendamento de entrevistas e acompanhamento do processo seletivo.",
    category: "Recrutamento",
    icon: "📋",
    status: "Em Produção",
    features: [
      "Gestão de vagas",
      "Triagem automática de currículos",
      "Agendamento de entrevistas",
      "Acompanhamento do processo",
      "Relatórios de recrutamento",
    ],
  },
];

export default function ProjetosPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark to-primary-dark/90 text-white py-20 overflow-hidden">
        <GridPattern />
        <FloatingParticles />
        <CircuitLines />
        <TechGlow />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Nossos Sistemas
            </h1>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Soluções prontas para uso. Escolha entre licenciamento permanente
              ou assinatura mensal e transforme a gestão da sua empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sistemas Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sistemas.map((sistema, index) => (
              <motion.div
                key={sistema.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-primary-gray/20 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-blue/20 to-primary-dark/20 overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-6xl mb-2">{sistema.icon}</div>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {sistema.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary-blue font-semibold">
                    {sistema.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold text-primary-dark mt-2 mb-3 group-hover:text-primary-blue transition-colors">
                    {sistema.title}
                  </h3>
                  <p className="text-primary-gray mb-4 text-sm">
                    {sistema.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sistema.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary-gray/10 text-primary-dark px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/projetos/${sistema.id}`}
                      className="flex-1 bg-primary-blue text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-blue/90 transition-colors text-center"
                    >
                      Ver Detalhes
                    </Link>
                    <Link
                      href={`/contato?sistema=${encodeURIComponent(sistema.name)}`}
                      className="flex-1 bg-transparent border border-primary-blue text-primary-blue px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-blue/10 transition-colors text-center"
                    >
                      Solicitar Orçamento
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-br from-primary-gray/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-primary-dark mb-4">
              Opções de Licenciamento
            </h2>
            <p className="text-xl text-primary-gray max-w-2xl mx-auto">
              Escolha a melhor forma de adquirir nossos sistemas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-primary-gray/20"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-display font-bold text-primary-dark mb-3">
                Licença Permanente
              </h3>
              <p className="text-primary-gray mb-4">
                Adquira a licença permanente do sistema e tenha controle total
                sobre sua instalação.
              </p>
              <ul className="space-y-2 text-primary-gray text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  Propriedade permanente
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  Instalação local ou cloud
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  Suporte técnico incluso (1 ano)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  Atualizações de segurança
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl border border-primary-blue shadow-lg"
            >
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-display font-bold text-primary-dark mb-3">
                Assinatura Mensal
              </h3>
              <p className="text-primary-gray mb-4">
                Assine mensalmente e tenha acesso completo com suporte contínuo
                e atualizações automáticas.
              </p>
              <ul className="space-y-2 text-primary-gray text-sm mb-6">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  Pagamento mensal flexível
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  Suporte técnico 24/7
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  Atualizações automáticas
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-2">✓</span>
                  Cancelamento sem multa
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-blue/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Precisa de uma Solução Personalizada?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Desenvolvemos sistemas sob medida para atender às necessidades
              específicas do seu negócio.
            </p>
            <Link
              href="/contato"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-gray/10 transition-all duration-200 inline-block shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicitar Desenvolvimento
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
