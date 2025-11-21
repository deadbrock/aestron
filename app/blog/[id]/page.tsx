"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const posts = {
  1: {
    id: 1,
    title: "Tendências em Desenvolvimento Web para 2024",
    content: `
      <p>O desenvolvimento web continua evoluindo rapidamente, e 2024 traz consigo novas tendências e tecnologias que estão moldando o futuro da web.</p>
      
      <h3>1. Framework React e Next.js</h3>
      <p>O Next.js 14 continua dominando o mercado com suas melhorias em Server Components e App Router, oferecendo performance excepcional e melhor experiência de desenvolvimento.</p>
      
      <h3>2. TypeScript como Padrão</h3>
      <p>TypeScript se tornou essencial para projetos modernos, oferecendo type safety e melhor experiência de desenvolvimento em equipes maiores.</p>
      
      <h3>3. Web Components e Micro Frontends</h3>
      <p>A arquitetura de micro frontends está ganhando tração, permitindo que equipes trabalhem de forma independente em diferentes partes de uma aplicação.</p>
      
      <h3>4. Performance e Core Web Vitals</h3>
      <p>A otimização de performance continua sendo prioridade, com foco em Core Web Vitals e experiência do usuário.</p>
    `,
    author: "Equipe Aestron",
    date: "15 de Janeiro, 2024",
    category: "Tecnologia",
    readTime: "5 min",
  },
  2: {
    id: 2,
    title: "Como Escolher a Melhor Stack Tecnológica para Seu Projeto",
    content: `
      <p>Escolher a stack tecnológica correta é fundamental para o sucesso de qualquer projeto de software.</p>
      
      <h3>Fatores a Considerar</h3>
      <ul>
        <li>Escalabilidade necessária</li>
        <li>Tamanho e experiência da equipe</li>
        <li>Orçamento e prazos</li>
        <li>Requisitos de performance</li>
        <li>Manutenibilidade a longo prazo</li>
      </ul>
      
      <h3>Stacks Populares</h3>
      <p>Para aplicações web modernas, consideramos stacks como MERN (MongoDB, Express, React, Node.js) ou Next.js com TypeScript para projetos full-stack.</p>
    `,
    author: "Equipe Aestron",
    date: "10 de Janeiro, 2024",
    category: "Desenvolvimento",
    readTime: "7 min",
  },
};

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const post = posts[params.id as keyof typeof posts];

  useEffect(() => {
    if (!post) {
      router.push("/blog");
    }
  }, [post, router]);

  if (!post) {
    return null;
  }

  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary-blue hover:text-primary-dark mb-8 transition-colors"
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
          Voltar para Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-blue font-semibold">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-dark mt-4 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-primary-gray mb-8">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} de leitura</span>
          </div>

          <div
            className="prose prose-lg max-w-none text-primary-gray"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </article>
    </div>
  );
}

