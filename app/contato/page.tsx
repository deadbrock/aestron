"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import {
  GridPattern,
  FloatingParticles,
  TechGlow,
} from "@/components/BackgroundAnimations";

function ContactFormWrapper() {
  return <ContactForm />;
}

export default function ContatoPage() {
  const contactInfo = [
    {
      icon: "📧",
      title: "E-mail",
      content: "contato@aestron.com.br",
      link: "mailto:contato@aestron.com.br",
    },
    {
      icon: "📞",
      title: "Telefone",
      content: "+55 (00) 0000-0000",
      link: "tel:+5500000000000",
    },
    {
      icon: "📍",
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      link: "#",
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
              Entre em Contato
            </h1>
            <p className="text-xl text-primary-gray max-w-3xl mx-auto">
              Estamos prontos para transformar suas ideias em realidade. Fale
              conosco e descubra como podemos ajudar seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold text-primary-dark mb-6">
                Envie sua Mensagem
              </h2>
              <Suspense fallback={<div>Carregando...</div>}>
                <ContactFormWrapper />
              </Suspense>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-primary-dark mb-6">
                Outras Formas de Contato
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-br from-primary-gray/5 to-white rounded-xl hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-4xl">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-primary-dark mb-1">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-primary-gray hover:text-primary-blue transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 bg-primary-blue/10 rounded-xl"
              >
                <h3 className="text-lg font-display font-semibold text-primary-dark mb-2">
                  Horário de Atendimento
                </h3>
                <p className="text-primary-gray">
                  Segunda a Sexta: 9h às 18h
                  <br />
                  Sábado: 9h às 13h
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

