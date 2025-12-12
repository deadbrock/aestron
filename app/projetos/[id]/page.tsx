"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PricingCard from "@/components/PricingCard";
import {
  GridPattern,
  FloatingParticles,
  CircuitLines,
  TechGlow,
} from "@/components/BackgroundAnimations";

const sistemas = {
  1: {
    id: 1,
    name: "Pegasus",
    title: "Pegasus - Sistema de Gestão Logística",
    description:
      "Solução completa para gestão logística empresarial. Controle de estoque, rastreamento de entregas, gestão de transportadoras e otimização de rotas em uma única plataforma.",
    category: "Gestão Logística",
    icon: "🚚",
    fullDescription: `O Pegasus é um sistema completo de gestão logística desenvolvido para empresas que buscam otimizar suas operações de transporte, estoque e distribuição. 

Com interface intuitiva e funcionalidades avançadas, o sistema permite controle total sobre toda a cadeia logística, desde o recebimento de mercadorias até a entrega final ao cliente.

Principais benefícios:
- Redução de custos operacionais
- Aumento da eficiência no controle de estoque
- Melhoria no tempo de entrega
- Rastreamento em tempo real
- Relatórios detalhados para tomada de decisão`,
    features: [
      "Controle de estoque em tempo real com múltiplos armazéns",
      "Rastreamento completo de entregas com atualizações automáticas",
      "Gestão integrada de transportadoras e fornecedores",
      "Otimização automática de rotas de entrega",
      "Relatórios analíticos e dashboards personalizados",
      "Integração com sistemas de e-commerce",
      "Gestão de notas fiscais e documentos",
      "Controle de custos e margens de lucro",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    pricingOptions: [
      {
        id: "licenca-permanente",
        name: "Licença Permanente",
        description: "Adquira a licença completa do sistema",
        price: "Sob Consulta",
        features: [
          "Licença permanente do sistema",
          "Instalação e configuração inicial",
          "Treinamento da equipe (até 10 usuários)",
          "Suporte técnico por 1 ano",
          "Atualizações de segurança",
          "Documentação completa",
        ],
        popular: false,
        ctaText: "Solicitar Orçamento",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-mensal",
        name: "Assinatura Mensal",
        description: "Acesso completo com pagamento mensal",
        price: "A partir de R$ 299",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Suporte técnico 24/7",
          "Atualizações automáticas",
          "Backup diário na nuvem",
          "Até 5 usuários simultâneos",
          "Cancelamento sem multa",
        ],
        popular: true,
        ctaText: "Assinar Agora",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-empresarial",
        name: "Assinatura Empresarial",
        description: "Para empresas com maior demanda",
        price: "Sob Consulta",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Usuários ilimitados",
          "Suporte técnico prioritário",
          "Personalizações inclusas",
          "Integrações customizadas",
          "Gerente de conta dedicado",
        ],
        popular: false,
        ctaText: "Falar com Vendas",
        ctaLink: "/contato",
      },
    ],
  },
  2: {
    id: 2,
    name: "FGS",
    title: "FGS - Sistema de Gestão de Recursos Humanos",
    description:
      "Plataforma completa para gestão de RH. Controle de ponto, folha de pagamento, avaliações de desempenho, gestão de benefícios e muito mais.",
    category: "Recursos Humanos",
    icon: "👥",
    fullDescription: `O FGS (Sistema de Gestão de Recursos Humanos) é uma solução completa desenvolvida para modernizar e otimizar todos os processos de gestão de pessoas.

Desde o controle de ponto até a gestão estratégica de talentos, o FGS oferece todas as ferramentas necessárias para uma gestão de RH eficiente e moderna.

Principais benefícios:
- Redução de erros na folha de pagamento
- Automação de processos burocráticos
- Melhoria na gestão de talentos
- Conformidade com legislação trabalhista
- Aumento da satisfação dos colaboradores`,
    features: [
      "Controle de ponto eletrônico com biometria",
      "Folha de pagamento automatizada e integrada",
      "Avaliações de desempenho e feedback contínuo",
      "Gestão completa de benefícios e vale-refeição",
      "Dashboard de indicadores de RH",
      "Gestão de treinamentos e desenvolvimento",
      "Controle de férias e ausências",
      "Relatórios para eSocial e obrigações trabalhistas",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    pricingOptions: [
      {
        id: "licenca-permanente",
        name: "Licença Permanente",
        description: "Adquira a licença completa do sistema",
        price: "Sob Consulta",
        features: [
          "Licença permanente do sistema",
          "Instalação e configuração inicial",
          "Treinamento da equipe (até 15 usuários)",
          "Suporte técnico por 1 ano",
          "Atualizações de segurança",
          "Documentação completa",
        ],
        popular: false,
        ctaText: "Solicitar Orçamento",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-mensal",
        name: "Assinatura Mensal",
        description: "Acesso completo com pagamento mensal",
        price: "A partir de R$ 399",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Suporte técnico 24/7",
          "Atualizações automáticas",
          "Backup diário na nuvem",
          "Até 10 usuários simultâneos",
          "Cancelamento sem multa",
        ],
        popular: true,
        ctaText: "Assinar Agora",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-empresarial",
        name: "Assinatura Empresarial",
        description: "Para empresas com maior demanda",
        price: "Sob Consulta",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Usuários ilimitados",
          "Suporte técnico prioritário",
          "Personalizações inclusas",
          "Integrações customizadas",
          "Gerente de conta dedicado",
        ],
        popular: false,
        ctaText: "Falar com Vendas",
        ctaLink: "/contato",
      },
    ],
  },
  3: {
    id: 3,
    name: "Gestão de Candidatos",
    title: "Sistema de Gestão de Candidatos",
    description:
      "Solução completa para recrutamento e seleção. Gestão de vagas, triagem de currículos, agendamento de entrevistas e acompanhamento do processo seletivo.",
    category: "Recrutamento",
    icon: "📋",
    fullDescription: `O Sistema de Gestão de Candidatos é uma plataforma moderna e eficiente para otimizar todo o processo de recrutamento e seleção.

Com inteligência artificial para triagem de currículos e ferramentas completas de gestão, o sistema reduz significativamente o tempo de contratação e melhora a qualidade das seleções.

Principais benefícios:
- Redução do tempo de contratação em até 60%
- Melhoria na qualidade das contratações
- Organização completa do processo seletivo
- Experiência positiva para candidatos
- Dados e métricas para decisões estratégicas`,
    features: [
      "Gestão completa de vagas e processos seletivos",
      "Triagem automática de currículos com IA",
      "Agendamento automático de entrevistas",
      "Acompanhamento completo do processo",
      "Relatórios de recrutamento e métricas",
      "Integração com sites de vagas",
      "Banco de talentos inteligente",
      "Comunicação automatizada com candidatos",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Python", "IA"],
    pricingOptions: [
      {
        id: "licenca-permanente",
        name: "Licença Permanente",
        description: "Adquira a licença completa do sistema",
        price: "Sob Consulta",
        features: [
          "Licença permanente do sistema",
          "Instalação e configuração inicial",
          "Treinamento da equipe (até 8 usuários)",
          "Suporte técnico por 1 ano",
          "Atualizações de segurança",
          "Documentação completa",
        ],
        popular: false,
        ctaText: "Solicitar Orçamento",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-mensal",
        name: "Assinatura Mensal",
        description: "Acesso completo com pagamento mensal",
        price: "A partir de R$ 199",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Suporte técnico 24/7",
          "Atualizações automáticas",
          "Backup diário na nuvem",
          "Até 5 usuários simultâneos",
          "Cancelamento sem multa",
        ],
        popular: true,
        ctaText: "Assinar Agora",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-empresarial",
        name: "Assinatura Empresarial",
        description: "Para empresas com maior demanda",
        price: "Sob Consulta",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Usuários ilimitados",
          "Suporte técnico prioritário",
          "Personalizações inclusas",
          "Integrações customizadas",
          "Gerente de conta dedicado",
        ],
        popular: false,
        ctaText: "Falar com Vendas",
        ctaLink: "/contato",
      },
    ],
  },
  4: {
    id: 4,
    name: "AestronTec",
    title: "AestronTec - Plataforma Tecnológica Empresarial",
    description:
      "Sistema completo de gestão empresarial integrado. Módulos de vendas, estoque, financeiro, CRM e muito mais em uma única plataforma moderna e intuitiva.",
    category: "Gestão Empresarial",
    icon: "🏢",
    fullDescription: `O AestronTec é uma plataforma completa de gestão empresarial que integra todos os setores da sua empresa em um único sistema.

Com módulos integrados e interface moderna, o AestronTec oferece controle total sobre vendas, estoque, financeiro, relacionamento com clientes e muito mais.

Principais benefícios:
- Integração completa entre todos os setores
- Redução de retrabalho e erros
- Visão 360º do negócio
- Automação de processos
- Decisões baseadas em dados em tempo real`,
    features: [
      "Gestão financeira completa com contas a pagar e receber",
      "CRM integrado para gestão de clientes e oportunidades",
      "Controle de vendas com PDV e e-commerce",
      "Gestão de estoque com múltiplos depósitos",
      "Emissão de notas fiscais eletrônicas",
      "Relatórios gerenciais e dashboards personalizados",
      "Gestão de compras e fornecedores",
      "Controle de projetos e tarefas",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript", "Redis"],
    pricingOptions: [
      {
        id: "licenca-permanente",
        name: "Licença Permanente",
        description: "Adquira a licença completa do sistema",
        price: "Sob Consulta",
        features: [
          "Licença permanente do sistema",
          "Instalação e configuração inicial",
          "Treinamento da equipe (até 15 usuários)",
          "Suporte técnico por 1 ano",
          "Atualizações de segurança",
          "Documentação completa",
        ],
        popular: false,
        ctaText: "Solicitar Orçamento",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-mensal",
        name: "Assinatura Mensal",
        description: "Acesso completo com pagamento mensal",
        price: "A partir de R$ 499",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Suporte técnico 24/7",
          "Atualizações automáticas",
          "Backup diário na nuvem",
          "Até 15 usuários simultâneos",
          "Cancelamento sem multa",
        ],
        popular: true,
        ctaText: "Assinar Agora",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-empresarial",
        name: "Assinatura Empresarial",
        description: "Para empresas com maior demanda",
        price: "Sob Consulta",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Usuários ilimitados",
          "Suporte técnico prioritário",
          "Personalizações inclusas",
          "Integrações customizadas",
          "Gerente de conta dedicado",
        ],
        popular: false,
        ctaText: "Falar com Vendas",
        ctaLink: "/contato",
      },
    ],
  },
  5: {
    id: 5,
    name: "BarberTron",
    title: "BarberTron - Sistema para Barbearias",
    description:
      "Software especializado para gestão de barbearias e salões. Agendamento online, controle de caixa, comissões, produtos e fidelização de clientes.",
    category: "Gestão de Salões",
    icon: "💈",
    fullDescription: `O BarberTron é um sistema especializado para barbearias e salões de beleza que desejam profissionalizar sua gestão e oferecer a melhor experiência aos clientes.

Com agendamento online integrado, controle financeiro completo e ferramentas de fidelização, o BarberTron ajuda seu negócio a crescer de forma sustentável.

Principais benefícios:
- Redução de faltas com lembretes automáticos
- Aumento da receita com programa de fidelidade
- Controle preciso de comissões
- Gestão de produtos e serviços
- Aplicativo exclusivo para clientes`,
    features: [
      "Agendamento online inteligente com confirmação automática",
      "Controle de caixa e fechamento diário",
      "Cálculo automático de comissões",
      "Gestão de produtos e controle de estoque",
      "Programa de fidelidade e cashback",
      "App exclusivo para clientes agendarem",
      "Relatórios de desempenho por profissional",
      "Integração com WhatsApp para lembretes",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "React Native"],
    pricingOptions: [
      {
        id: "licenca-permanente",
        name: "Licença Permanente",
        description: "Adquira a licença completa do sistema",
        price: "Sob Consulta",
        features: [
          "Licença permanente do sistema",
          "Instalação e configuração inicial",
          "Treinamento da equipe (até 8 usuários)",
          "Suporte técnico por 1 ano",
          "Atualizações de segurança",
          "Documentação completa",
        ],
        popular: false,
        ctaText: "Solicitar Orçamento",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-mensal",
        name: "Assinatura Mensal",
        description: "Acesso completo com pagamento mensal",
        price: "A partir de R$ 149",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Suporte técnico 24/7",
          "Atualizações automáticas",
          "Backup diário na nuvem",
          "Até 5 profissionais",
          "Cancelamento sem multa",
        ],
        popular: true,
        ctaText: "Assinar Agora",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-empresarial",
        name: "Assinatura Empresarial",
        description: "Para redes de barbearias",
        price: "Sob Consulta",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Profissionais ilimitados",
          "Suporte técnico prioritário",
          "Personalizações inclusas",
          "Múltiplas unidades",
          "Gerente de conta dedicado",
        ],
        popular: false,
        ctaText: "Falar com Vendas",
        ctaLink: "/contato",
      },
    ],
  },
  6: {
    id: 6,
    name: "SweetFlow",
    title: "SweetFlow - Sistema para Confeitarias",
    description:
      "Solução completa para gestão de confeitarias e doceiras. Controle de pedidos, produção, estoque de ingredientes, vendas e delivery integrado.",
    category: "Gestão de Confeitarias",
    icon: "🍰",
    fullDescription: `O SweetFlow é um sistema desenvolvido especialmente para confeitarias, doceiras e cake designers que desejam organizar e profissionalizar seu negócio.

Com controle completo de pedidos, produção, ingredientes e vendas, o SweetFlow ajuda você a focar no que faz de melhor: criar doces incríveis.

Principais benefícios:
- Organização completa de encomendas
- Controle preciso de custos e lucros
- Gestão de ingredientes e receitas
- Catálogo digital profissional
- Integração com delivery e redes sociais`,
    features: [
      "Gestão de pedidos e encomendas com calendário",
      "Controle de produção e lista de tarefas",
      "Estoque de ingredientes com alertas de reposição",
      "Catálogo digital de produtos com fotos",
      "Cálculo automático de custos por receita",
      "Integração com delivery e WhatsApp",
      "Gestão de clientes e histórico de pedidos",
      "Relatórios de vendas e produtos mais vendidos",
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
    pricingOptions: [
      {
        id: "licenca-permanente",
        name: "Licença Permanente",
        description: "Adquira a licença completa do sistema",
        price: "Sob Consulta",
        features: [
          "Licença permanente do sistema",
          "Instalação e configuração inicial",
          "Treinamento da equipe (até 5 usuários)",
          "Suporte técnico por 1 ano",
          "Atualizações de segurança",
          "Documentação completa",
        ],
        popular: false,
        ctaText: "Solicitar Orçamento",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-mensal",
        name: "Assinatura Mensal",
        description: "Acesso completo com pagamento mensal",
        price: "A partir de R$ 99",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Suporte técnico 24/7",
          "Atualizações automáticas",
          "Backup diário na nuvem",
          "Até 3 usuários simultâneos",
          "Cancelamento sem multa",
        ],
        popular: true,
        ctaText: "Assinar Agora",
        ctaLink: "/contato",
      },
      {
        id: "assinatura-empresarial",
        name: "Assinatura Empresarial",
        description: "Para confeitarias maiores",
        price: "Sob Consulta",
        period: "/mês",
        features: [
          "Acesso completo ao sistema",
          "Usuários ilimitados",
          "Suporte técnico prioritário",
          "Personalizações inclusas",
          "Múltiplas unidades",
          "Gerente de conta dedicado",
        ],
        popular: false,
        ctaText: "Falar com Vendas",
        ctaLink: "/contato",
      },
    ],
  },
};

export default function SistemaDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const sistema = sistemas[params.id as keyof typeof sistemas];

  useEffect(() => {
    if (!sistema) {
      router.push("/projetos");
    }
  }, [sistema, router]);

  if (!sistema) {
    return null;
  }

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
          >
            <Link
              href="/projetos"
              className="inline-flex items-center text-primary-gray hover:text-white mb-6 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para Sistemas
            </Link>
            <span className="text-primary-blue font-semibold">
              {sistema.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mt-4 mb-6">
              {sistema.title}
            </h1>
            <p className="text-xl text-primary-gray max-w-3xl">
              {sistema.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sistema Image/Icon */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 bg-gradient-to-br from-primary-blue/20 to-primary-dark/20 rounded-xl overflow-hidden flex items-center justify-center"
          >
            <div className="text-9xl">{sistema.icon}</div>
          </motion.div>
        </div>
      </section>

      {/* Sistema Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-primary-dark mb-4">
                Sobre o Sistema
              </h2>
              <div className="text-lg text-primary-gray leading-relaxed whitespace-pre-line">
                {sistema.fullDescription}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold text-primary-dark mb-4">
                Funcionalidades Principais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sistema.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-primary-gray/5 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5 text-primary-blue flex-shrink-0 mr-3 mt-0.5"
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
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-display font-bold text-primary-dark mb-4">
                Tecnologias Utilizadas
              </h2>
              <div className="flex flex-wrap gap-3">
                {sistema.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-lg font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-primary-gray/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-dark mb-4">
              Planos e Preços
            </h2>
            <p className="text-xl text-primary-gray max-w-2xl mx-auto">
              Escolha a melhor opção para sua empresa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sistema.pricingOptions.map((option, index) => (
              <PricingCard
                key={option.id}
                option={option}
                systemName={sistema.name}
              />
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
              Dúvidas ou Precisa de Personalização?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Entre em contato conosco e vamos conversar sobre como podemos
              atender suas necessidades específicas.
            </p>
            <Link
              href={`/contato?sistema=${encodeURIComponent(sistema.name)}`}
              className="bg-white text-primary-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-gray/10 transition-all duration-200 inline-block shadow-lg hover:shadow-xl hover:scale-105"
            >
              Falar com Especialista
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
