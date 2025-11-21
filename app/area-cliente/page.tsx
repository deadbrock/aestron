"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function AreaClientePage() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Apenas frontend - validação básica
    if (!formData.email || !formData.senha) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    // Simulação de login
    setError("Funcionalidade em desenvolvimento. Em breve você terá acesso completo.");
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-primary-gray/5 to-white">
      <section className="py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold text-primary-dark mb-2">
                Área do Cliente
              </h1>
              <p className="text-primary-gray">
                Acesse sua conta para gerenciar seus projetos
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary-dark mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-primary-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="senha"
                  className="block text-sm font-semibold text-primary-dark mb-2"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  required
                  value={formData.senha}
                  onChange={(e) =>
                    setFormData({ ...formData, senha: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-primary-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue/90 transition-all duration-200"
              >
                Entrar
              </button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-primary-blue hover:underline text-sm"
              >
                Esqueceu sua senha?
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center text-primary-gray text-sm"
          >
            <p>
              Não tem uma conta?{" "}
              <a href="/contato" className="text-primary-blue hover:underline">
                Entre em contato
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

