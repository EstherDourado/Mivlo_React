import React from 'react';
import { SEO } from '../components/seo/SEO';
import { getOrganizationSchema, getWebSiteSchema, getFAQSchema } from '../utils/schema';
import { siteConfig } from '../config/site';
import { Hero } from '../components/sections/Hero';
import { Marquee } from '../components/sections/Marquee';
import { AboutEsther } from '../components/sections/AboutEsther';
import { QuemEMivlo } from '../components/sections/QuemEMivlo';
import { TechSphere } from '../components/sections/TechSphere';
import { PortfolioGrid } from '../components/ui/PortfolioGrid';
import { MethodologySection } from '../components/sections/MethodologySection';
import { FAQSection } from '../components/sections/FAQSection';
import { Contato } from '../components/sections/Contato';

export const Home = () => {
  const homeSchemas = [
    getWebSiteSchema(),
    getOrganizationSchema(),
    /* FAQ Schema desativado temporariamente
    getFAQSchema([
      siteConfig.faqDesenvolvimento[1],
      siteConfig.faqAudiovisual[0],
      siteConfig.faqDesenvolvimento[3],
      siteConfig.faqAudiovisual[1]
    ])
    */
  ];

  return (
    <>
      <SEO
        title="MIVLO | Audiovisual, Fotografia, Vídeo e Desenvolvimento Web"
        description="A MIVLO une desenvolvimento digital de alta performance e produção audiovisual estratégica. Criação de landing pages, sistemas web sob medida, fotografia corporativa e cobertura de feiras e eventos."
        keywords="MIVLO, audiovisual São Paulo, desenvolvimento web, criação de sites, landing pages de alta conversão, fotografia de estandes, videomaker para feiras, cobertura de eventos, Esther Dourado Batista"
        canonical={`${siteConfig.siteUrl}/`}
        schema={homeSchemas}
      />

      {/* Primeira dobra de alto impacto */}
      <Hero />

      {/* Faixa Marquee de palavras-chave animadas */}
      <Marquee />

      {/* Quem é Esther Dourado com foto oficial em destaque */}
      <AboutEsther />

      {/* Quem é a MIVLO: Media + Tech */}
      <QuemEMivlo />

      {/* Esfera Tecnológica 3D Interativa: Meu universo tecnológico */}
      <TechSphere />

      {/* Portfólio Unificado com Filtros e Modal de Preview Real */}
      <PortfolioGrid
        initialFilter="Todos"
        title="Portfólio & Entregas Reais"
        subtitle="Explore prévias detalhadas dos nossos projetos em Audiovisual e Engenharia Web."
      />

      {/* Método de Trabalho Integrado */}
      <MethodologySection
        defaultType="all"
        title="Nosso Processo de Trabalho"
        subtitle="Rigor de engenharia e olhar cinematográfico para garantir entregas com prazo e excelência."
      />

      {/* FAQ / Anulação de Objeções Geral (Desativado temporariamente)
      <FAQSection
        type="general"
        title="Dúvidas Frequentes"
        subtitle="Respostas claras para as principais perguntas sobre contratação, prazos e escopo."
      />
      */}

      {/* Contato com integração EmailJS e WhatsApp */}
      <Contato />
    </>
  );
};
