"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Pegasus - Gestão Logística",
    description:
      "Solução completa para gestão logística empresarial. Controle de estoque, rastreamento de entregas e otimização de rotas.",
    category: "Gestão Logística",
    icon: "🚚",
  },
  {
    id: 2,
    title: "FGS - Gestão de RH",
    description:
      "Plataforma completa para gestão de recursos humanos. Controle de ponto, folha de pagamento e avaliações de desempenho.",
    category: "Recursos Humanos",
    icon: "👥",
  },
  {
    id: 3,
    title: "Gestão de Candidatos",
    description:
      "Solução completa para recrutamento e seleção. Gestão de vagas, triagem de currículos e agendamento de entrevistas.",
    category: "Recrutamento",
    icon: "📋",
  },
];

export default function ProjectsSection() {
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
            Nossos Sistemas
          </h2>
          <p className="text-xl text-primary-gray max-w-2xl mx-auto">
            Soluções prontas para uso. Licenciamento permanente ou assinatura mensal disponível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-primary-gray/20 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-blue/20 to-primary-dark/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-blue font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-semibold text-primary-dark mt-2 mb-3 group-hover:text-primary-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary-gray mb-4">{project.description}</p>
                <Link
                  href={`/projetos/${project.id}`}
                  className="text-primary-blue font-semibold hover:underline inline-flex items-center"
                >
                  Ver detalhes
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
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/projetos"
            className="bg-primary-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue/90 transition-all duration-200 inline-block"
          >
            Ver Todos os Sistemas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

