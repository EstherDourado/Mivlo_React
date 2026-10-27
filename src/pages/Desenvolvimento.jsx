import React from 'react';
import { Code2, ShieldCheck, Zap, Globe, MessageSquare, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SEO } from '../components/seo/SEO';
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '../utils/schema';
import { OrcamentoSection } from '../components/sections/OrcamentoSection';
import { PortfolioGrid } from '../components/ui/PortfolioGrid';
import { MethodologySection } from '../components/sections/MethodologySection';
import { FAQSection } from '../components/sections/FAQSection';
import { Contato } from '../components/sections/Contato';
import { siteConfig } from '../config/site';

export const Desenvolvimento = () => {
  const whatsappUrl = siteConfig.getWhatsAppLink('desenvolvimento');

  const devSchemas = [
    getServiceSchema('desenvolvimento'),
    getBreadcrumbSchema([
      { name: 'Início', url: '/' },
      { name: 'Desenvolvimento', url: '/desenvolvimento' }
    ]),
    // getFAQSchema(siteConfig.faqDesenvolvimento)
  ];

  return (
    <div className="pt-20 sm:pt-24 bg-[#08070D] text-white">
      <SEO
        title="MIVLO Desenvolvimento | Sites, Landing Pages e Sistemas Web"
        description="Engenharia de software e design autoral. Criação de landing pages de alta conversão, sites institucionais modernos, sistemas web e automações sob medida com carregamento ultrarrápido."
        keywords="MIVLO desenvolvimento, criação de sites, landing pages de alta conversão, sistemas web sob medida, front-end React, SEO técnico, desenvolvimento full stack, automação de processos"
        canonical={`${siteConfig.siteUrl}/desenvolvimento`}
        schema={devSchemas}
      />

      {/* HERO SECTION DESENVOLVIMENTO */}
      <section className="relative py-12 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#08070D] via-[#100D18] to-[#08070D]">
        {/* Luz ambiente roxa */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[500px] h-[400px] bg-[#6128C8]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[420px] h-[350px] bg-[#9557F5]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#9557F5]/30 bg-[#100D18]/80 backdrop-blur-md mb-4 sm:mb-6">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9557F5]" />
                <span className="text-[9px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-[#9557F5]">
                  MIVLO Tech Hub
                </span>
              </div>

              <h1 className="fluid-h1 font-extrabold text-white mb-3 sm:mb-6 leading-tight tracking-tight">
                Sua ideia transformada em <br />
                <span className="bg-gradient-to-r from-white via-[#B99AFF] to-[#9557F5] bg-clip-text text-transparent">
                  solução digital.
                </span>
              </h1>

              <p className="text-xs sm:text-base md:text-lg text-[#B9B2C5] mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed font-light px-2 sm:px-0">
                Landing Pages de alta conversão, sites institucionais modernos e sistemas web sob medida construídos com código limpo, velocidade e foco em resultados reais para o seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
                <a
                  href="#orcamento"
                  className="btn-purple w-auto min-w-[190px] sm:min-w-0 max-w-full px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm shadow-xl shadow-[#6128C8]/30 flex items-center justify-center gap-2"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-auto min-w-[190px] sm:min-w-0 max-w-full px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  <span>Orçar no WhatsApp</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS DA ENGENHARIA MIVLO (SEÇÃO CLARA #F6F4FA) */}
      <section className="py-20 lg:py-24 relative overflow-hidden w-full max-w-full bg-[#F6F4FA] text-[#08070D]">
        {/* Transição suave do Hero escuro para esta seção clara */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#08070D]/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#08070D]/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <Reveal delayClass="delay-0">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#E5E0EB] hover:border-[#6128C8]/40 hover:shadow-xl hover:shadow-[#6128C8]/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#6128C8]/10 border border-[#6128C8]/20 flex items-center justify-center text-[#6128C8] flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#08070D] text-lg mb-1">
                    Ultra Performance
                  </h4>
                  <p className="text-xs text-[#393340] font-light leading-relaxed">
                    Carregamento instantâneo inferior a 1 segundo, pontuação máxima no Google Lighthouse e SEO técnico de fábrica.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delayClass="delay-100">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#E5E0EB] hover:border-[#6128C8]/40 hover:shadow-xl hover:shadow-[#6128C8]/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#6128C8]/10 border border-[#6128C8]/20 flex items-center justify-center text-[#6128C8] flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#08070D] text-lg mb-1">
                    Código Limpo & Seguro
                  </h4>
                  <p className="text-xs text-[#393340] font-light leading-relaxed">
                    Construção em React, JavaScript moderno, C#/.NET e boas práticas de engenharia de software para facilidade de escala.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delayClass="delay-200">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#E5E0EB] hover:border-[#6128C8]/40 hover:shadow-xl hover:shadow-[#6128C8]/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#6128C8]/10 border border-[#6128C8]/20 flex items-center justify-center text-[#6128C8] flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[#08070D] text-lg mb-1">
                    Design Autoral & Persuasivo
                  </h4>
                  <p className="text-xs text-[#393340] font-light leading-relaxed">
                    Sem templates de baixa qualidade. Cada tela é desenhada para expressar a identidade única da sua empresa e converter.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE ORÇAMENTO SOB MEDIDA (ESCURA) */}
      <OrcamentoSection type="desenvolvimento" />

      {/* PORTFÓLIO FILTRADO PARA TECNOLOGIA (ESCURA - CAPSULE CARDS MOCKUPS NOTEBOOK + CELULAR) */}
      <PortfolioGrid
        initialFilter="Tecnologia"
        showHeader={true}
        title="Projetos Web & Aplicações"
        subtitle="Confira páginas de conversão, portais e dashboards em apresentação editorial e monocromática com mockups de notebook e smartphone."
      />

      {/* COMO FUNCIONA O DESENVOLVIMENTO: 6 ETAPAS (SEÇÃO CLARA #F6F4FA) */}
      <MethodologySection
        defaultType="dev"
        theme="light"
        title="Como Funciona o Ciclo de Desenvolvimento"
        subtitle="Etapas transparentes da concepção e prototipagem até o deploy e sustentação."
      />

      {/* FAQ DESENVOLVIMENTO (ESCURA) - Desativado temporariamente
      <FAQSection
        type="desenvolvimento"
        title="Perguntas Frequentes — Desenvolvimento Web"
        subtitle="Tudo o que você precisa saber sobre domínio, hospedagem, contratos e manutenção mensal."
      />
      */}

      {/* CTA DE CONTATO PADRONIZADO */}
      <Contato type="desenvolvimento" />
    </div>
  );
};
