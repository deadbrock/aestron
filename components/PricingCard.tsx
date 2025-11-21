"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PricingOption {
  id: string;
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaLink: string;
}

interface PricingCardProps {
  option: PricingOption;
  systemName: string;
}

export default function PricingCard({ option, systemName }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative bg-white border-2 rounded-xl p-8 ${
        option.popular
          ? "border-primary-blue shadow-xl scale-105"
          : "border-primary-gray/20 hover:border-primary-blue/50"
      } transition-all duration-300`}
    >
      {option.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
            Mais Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-display font-bold text-primary-dark mb-2">
          {option.name}
        </h3>
        <p className="text-primary-gray text-sm mb-4">{option.description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-display font-bold text-primary-dark">
            {option.price}
          </span>
          {option.period && (
            <span className="text-primary-gray ml-2">{option.period}</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {option.features.map((feature, index) => (
          <li key={index} className="flex items-start">
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
            <span className="text-primary-gray text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`${option.ctaLink}?sistema=${encodeURIComponent(systemName)}&plano=${encodeURIComponent(option.id)}`}
        className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
          option.popular
            ? "bg-primary-blue text-white hover:bg-primary-blue/90 shadow-lg hover:shadow-xl"
            : "bg-primary-gray/10 text-primary-blue hover:bg-primary-blue hover:text-white"
        }`}
      >
        {option.ctaText}
      </Link>
    </motion.div>
  );
}

