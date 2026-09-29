import React from 'react';
import { Code2, ShieldCheck, Zap, Globe, MessageSquare, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { DevOfferings } from '../components/sections/DevOfferings';
import { PortfolioGrid } from '../components/ui/PortfolioGrid';
import { MethodologySection } from '../components/sections/MethodologySection';
import { FAQSection } from '../components/sections/FAQSection';
import { Contato } from '../components/sections/Contato';
import { siteConfig } from '../config/site';

export const Desenvolvimento = () => {
  const whatsappUrl = siteConfig.getWhatsAppLink('desenvolvimento');

  return (
    <div className="pt-24">
      {/* HERO SECTION DESENVOLVIMENTO */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 backdrop-blur-md mb-6">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-blue-400">
                  MIVLO Tech Hub
                </span>
              </div>

              <h1 className="fluid-h1 font-extrabold text-white mb-6 leading-tight">
                Sua ideia transformada em <br />
                <span className="text-amber-gradient">solução digital.</span>
              </h1>

              <p className="text-base md:text-xl text-brand-sand/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Landing Pages de alta conversão, sites institucionais modernos e sistemas web sob medida construídos com código limpo, velocidade e foco em resultados reais para o seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#servicos-dev"
                  className="btn-amber w-full sm:w-auto text-sm md:text-base px-8 py-3.5 shadow-xl shadow-brand-amber/30"
                >
                  Conhecer Soluções & Preços
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full sm:w-auto text-sm md:text-base px-8 py-3.5 flex items-center justify-center gap-2 hover:border-blue-400 hover:text-blue-300"
                >
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  Conversar com a Desenvolvedora
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS DA ENGENHARIA MIVLO */}
      <section className="py-12 relative bg-brand-muted/20 border-y border-brand-border/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="flex items-start gap-4 p-4">
              <Zap className="w-7 h-7 text-brand-amber flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-bold text-white text-base mb-1">
                  Ultra Performance
                </h4>
                <p className="text-xs text-brand-sand/70 font-light leading-relaxed">
                  Carregamento instantâneo inferior a 1 segundo, pontuação máxima no Google Lighthouse e SEO técnico de fábrica.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <ShieldCheck className="w-7 h-7 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-bold text-white text-base mb-1">
                  Código Limpo & Seguro
                </h4>
                <p className="text-xs text-brand-sand/70 font-light leading-relaxed">
                  Construção em React, JavaScript moderno, C#/.NET e boas práticas de engenharia de software para facilidade de escala.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <Globe className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-bold text-white text-base mb-1">
                  Design Autoral & Persuasivo
                </h4>
                <p className="text-xs text-brand-sand/70 font-light leading-relaxed">
                  Sem templates de baixa qualidade. Cada tela é desenhada para expressar a identidade única da sua empresa e converter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTAS DE DESENVOLVIMENTO & PLANOS DE MANUTENÇÃO */}
      <DevOfferings />

      {/* PORTFÓLIO FILTRADO PARA TECNOLOGIA */}
      <PortfolioGrid
        initialFilter="Tecnologia"
        showHeader={true}
        title="Projetos Web & Aplicações"
        subtitle="Confira páginas de conversão, portais e dashboards desenvolvidos pela MIVLO."
      />

      {/* COMO FUNCIONA O DESENVOLVIMENTO: 6 ETAPAS */}
      <MethodologySection
        defaultType="dev"
        title="Como Funciona o Ciclo de Desenvolvimento"
        subtitle="Etapas transparentes da concepção e prototipagem até o deploy e sustentação."
      />

      {/* FAQ DESENVOLVIMENTO */}
      <FAQSection
        type="desenvolvimento"
        title="Perguntas Frequentes — Desenvolvimento Web"
        subtitle="Tudo o que você precisa saber sobre domínio, hospedagem, contratos e manutenção mensal."
      />

      {/* CTA DE CONTATO */}
      <Contato />
    </div>
  );
};
