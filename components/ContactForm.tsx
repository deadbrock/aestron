"use client";

import { useState, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const sistemaParam = searchParams.get("sistema");
  const planoParam = searchParams.get("plano");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    empresa: "",
    telefone: "",
    sistema: sistemaParam || "",
    plano: planoParam || "",
    mensagem: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    if (sistemaParam) {
      setFormData((prev) => ({ ...prev, sistema: sistemaParam }));
    }
    if (planoParam) {
      setFormData((prev) => ({ ...prev, plano: planoParam }));
    }
  }, [sistemaParam, planoParam]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          empresa: "",
          telefone: "",
          sistema: sistemaParam || "",
          plano: planoParam || "",
          mensagem: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-primary-dark mb-2"
          >
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-primary-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-primary-dark mb-2"
          >
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-primary-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="empresa"
            className="block text-sm font-semibold text-primary-dark mb-2"
          >
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-primary-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
            placeholder="Nome da empresa"
          />
        </div>

        <div>
          <label
            htmlFor="telefone"
            className="block text-sm font-semibold text-primary-dark mb-2"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-primary-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      {(formData.sistema || formData.plano) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formData.sistema && (
            <div>
              <label
                htmlFor="sistema"
                className="block text-sm font-semibold text-primary-dark mb-2"
              >
                Sistema de Interesse
              </label>
              <input
                type="text"
                id="sistema"
                name="sistema"
                value={formData.sistema}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-blue/30 bg-primary-blue/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                readOnly
              />
            </div>
          )}

          {formData.plano && (
            <div>
              <label
                htmlFor="plano"
                className="block text-sm font-semibold text-primary-dark mb-2"
              >
                Plano de Interesse
              </label>
              <input
                type="text"
                id="plano"
                name="plano"
                value={
                  formData.plano === "licenca-permanente"
                    ? "Licença Permanente"
                    : formData.plano === "assinatura-mensal"
                    ? "Assinatura Mensal"
                    : formData.plano === "assinatura-empresarial"
                    ? "Assinatura Empresarial"
                    : formData.plano
                }
                onChange={handleChange}
                className="w-full px-4 py-3 border border-primary-blue/30 bg-primary-blue/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                readOnly
              />
            </div>
          )}
        </div>
      )}

      <div>
        <label
          htmlFor="mensagem"
          className="block text-sm font-semibold text-primary-dark mb-2"
        >
          Mensagem *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={6}
          value={formData.mensagem}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-primary-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all resize-none"
          placeholder="Conte-nos sobre seu projeto..."
        />
      </div>

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
        >
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg"
        >
          Erro ao enviar mensagem. Tente novamente ou entre em contato por outro canal.
        </motion.div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-blue/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
      </button>
    </motion.form>
  );
}

