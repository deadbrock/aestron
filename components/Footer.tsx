"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { href: "/sobre", label: "Sobre Nós" },
      { href: "/servicos", label: "Serviços" },
      { href: "/projetos", label: "Projetos" },
      { href: "/contato", label: "Contato" },
    ],
    recursos: [
      { href: "/blog", label: "Blog" },
      { href: "/area-cliente", label: "Área do Cliente" },
      { href: "#", label: "Suporte" },
      { href: "#", label: "FAQ" },
    ],
    legal: [
      { href: "#", label: "Política de Privacidade" },
      { href: "#", label: "Termos de Uso" },
      { href: "#", label: "Cookies" },
    ],
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "GitHub", href: "#", icon: "github" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "Instagram", href: "#", icon: "instagram" },
  ];

  return (
    <footer className="bg-primary-dark text-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="md" showText={true} variant="light" />
            <p className="text-primary-gray text-sm">
              Transformando ideias em realidade digital. Soluções tecnológicas
              inovadoras para empresas que buscam excelência.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-primary-gray hover:text-primary-blue transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-display font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-gray hover:text-primary-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-display font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-gray hover:text-primary-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-gray hover:text-primary-blue transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-gray/20 mt-8 pt-8 text-center">
          <p className="text-primary-gray text-sm">
            © {currentYear} Aestron Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

