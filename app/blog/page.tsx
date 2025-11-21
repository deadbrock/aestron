"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Tendências em Desenvolvimento Web para 2024",
    excerpt:
      "Descubra as principais tendências e tecnologias que estão moldando o futuro do desenvolvimento web neste ano.",
    author: "Equipe Aestron",
    date: "15 de Janeiro, 2024",
    category: "Tecnologia",
    readTime: "5 min",
    image: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "Como Escolher a Melhor Stack Tecnológica para Seu Projeto",
    excerpt:
      "Guia completo para ajudar você a escolher as tecnologias ideais para seu próximo projeto de software.",
    author: "Equipe Aestron",
    date: "10 de Janeiro, 2024",
    category: "Desenvolvimento",
    readTime: "7 min",
    image: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Inteligência Artificial: O Futuro dos Negócios",
    excerpt:
      "Entenda como a IA está transformando empresas e quais oportunidades ela oferece para diferentes setores.",
    author: "Equipe Aestron",
    date: "5 de Janeiro, 2024",
    category: "IA",
    readTime: "6 min",
    image: "/api/placeholder/600/400",
  },
  {
    id: 4,
    title: "Mobile First: Por Que Priorizar o Mobile",
    excerpt:
      "A importância de desenvolver aplicativos e sites pensando primeiro na experiência mobile.",
    author: "Equipe Aestron",
    date: "28 de Dezembro, 2023",
    category: "Mobile",
    readTime: "4 min",
    image: "/api/placeholder/600/400",
  },
  {
    id: 5,
    title: "Segurança em Aplicações Web: Melhores Práticas",
    excerpt:
      "Principais vulnerabilidades e como proteger suas aplicações web contra ameaças cibernéticas.",
    author: "Equipe Aestron",
    date: "20 de Dezembro, 2023",
    category: "Segurança",
    readTime: "8 min",
    image: "/api/placeholder/600/400",
  },
  {
    id: 6,
    title: "Cloud Computing: Benefícios para Pequenas Empresas",
    excerpt:
      "Como a computação em nuvem pode ajudar pequenas empresas a crescer e competir no mercado.",
    author: "Equipe Aestron",
    date: "15 de Dezembro, 2023",
    category: "Cloud",
    readTime: "5 min",
    image: "/api/placeholder/600/400",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-dark/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Artigos, tutoriais e insights sobre tecnologia, desenvolvimento e
              inovação
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-primary-gray/20 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48 bg-gradient-to-br from-primary-blue/20 to-primary-dark/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-primary-gray text-6xl">
                      📝
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary-blue font-semibold">
                        {post.category}
                      </span>
                      <span className="text-sm text-primary-gray">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-display font-semibold text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-primary-gray mb-4 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-primary-gray">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

