"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GridPattern,
  FloatingParticles,
  TechGlow,
} from "@/components/BackgroundAnimations";

const servicos = [
  {
    id: "sistemas",
    title: "Desenvolvimento de Sistemas",
    description:
      "Criamos sistemas personalizados e escaláveis que se adaptam perfeitamente às necessidades do seu negócio. Desde sistemas de gestão interna até plataformas complexas de múltiplos usuários.",
    features: [
      "Arquitetura escalável e moderna",
      "Interface intuitiva e responsiva",
      "Integração com APIs e serviços externos",
      "Relatórios e dashboards analíticos",
      "Segurança e backup automatizados",
    ],
    icon: "💻",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "mobile",
    title: "Aplicativos Mobile",
    description:
      "Desenvolvemos aplicativos nativos e multiplataforma para iOS e Android, garantindo performance excepcional e experiência do usuário de primeira classe.",
    features: [
      "Apps nativos iOS e Android",
      "React Native para multiplataforma",
      "Design moderno e intuitivo",
      "Integração com serviços nativos",
      "Publicação nas lojas oficiais",
    ],
    icon: "📱",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "sites",
    title: "Sites e E-commerce",
    description:
      "Sites responsivos, rápidos e otimizados para conversão. Lojas virtuais completas com gestão de produtos, pedidos, pagamentos e muito mais.",
    features: [
      "Design responsivo e moderno",
      "Otimização para SEO",
      "Performance e velocidade",
      "Integração com gateways de pagamento",
      "Painel administrativo completo",
    ],
    icon: "🌐",
    color: "from-green-500 to-green-600",
  },
  {
    id: "ia",
    title: "IA e Automação",
    description:
      "Implementamos soluções de inteligência artificial e automação para otimizar processos, reduzir custos e aumentar a eficiência operacional.",
    features: [
      "Chatbots inteligentes",
      "Machine Learning e análise preditiva",
      "Automação de processos (RPA)",
      "Processamento de linguagem natural",
      "Visão computacional",
    ],
    icon: "🤖",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "infraestrutura",
    title: "Infraestrutura Cloud",
    description:
      "Arquitetura cloud escalável, segura e de alta disponibilidade. Garantimos que seus sistemas estejam sempre disponíveis e protegidos.",
    features: [
      "Arquitetura cloud escalável",
      "Alta disponibilidade e redundância",
      "Monitoramento 24/7",
      "Backup e disaster recovery",
      "Otimização de custos",
    ],
    icon: "☁️",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "consultoria",
    title: "Consultoria Tecnológica",
    description:
      "Orientação estratégica e técnica para transformação digital. Analisamos sua infraestrutura atual e propomos melhorias e inovações.",
    features: [
      "Análise de arquitetura",
      "Planejamento estratégico",
      "Migração para cloud",
      "Otimização de processos",
      "Treinamento de equipes",
    ],
    icon: "🎯",
    color: "from-pink-500 to-pink-600",
  },
];

export default function ServicosPage() {
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
              Nossos Serviços
            </h1>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Soluções completas em tecnologia para impulsionar seu negócio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {servicos.map((servico, index) => (
              <motion.div
                key={servico.id}
                id={servico.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-2" : ""
                  } space-y-6`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{servico.icon}</div>
                    <h2 className="text-4xl font-display font-bold text-primary-dark">
                      {servico.title}
                    </h2>
                  </div>
                  <p className="text-lg text-primary-gray">
                    {servico.description}
                  </p>
                  <ul className="space-y-3">
                    {servico.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <svg
                          className="w-6 h-6 text-primary-blue flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-primary-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contato"
                    className="inline-block bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-blue/90 transition-colors duration-200"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  } relative h-80 bg-gradient-to-br ${servico.color} rounded-xl flex items-center justify-center shadow-xl`}
                >
                  <div className="text-8xl opacity-80">🚀</div>
                </div>
              </motion.div>
            ))}
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
              Não Encontrou o Que Procura?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Entre em contato e vamos conversar sobre como podemos ajudar seu
              negócio com soluções personalizadas.
            </p>
            <Link
              href="/contato"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-gray/10 transition-all duration-200 inline-block shadow-lg hover:shadow-xl hover:scale-105"
            >
              Fale Conosco
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

