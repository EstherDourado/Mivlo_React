import React from 'react';
import { Camera, Film, Sparkles, Video, Play, Layers, Clapperboard, MonitorPlay, MessageCircle, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SEO } from '../components/seo/SEO';
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from '../utils/schema';
import { OrcamentoSection } from '../components/sections/OrcamentoSection';
import { PortfolioGrid } from '../components/ui/PortfolioGrid';
import { MethodologySection } from '../components/sections/MethodologySection';
import { FAQSection } from '../components/sections/FAQSection';
import { Contato } from '../components/sections/Contato';
import { siteConfig } from '../config/site';

const AUDIOVISUAL_SERVICES = [
  {
    title: 'Fotografia Profissional',
    desc: 'Registro fotográfico com iluminação controlada e enquadramentos que valorizam arquitetura, produtos e equipe.',
    icon: Camera,
  },
  {
    title: 'Videomaker & Cinema 4K',
    desc: 'Captação dinâmica em resolução 4K com estabilização mecânica e equipamentos de ponta para feiras e eventos.',
    icon: Video,
  },
  {
    title: 'Storymaker em Tempo Real',
    desc: 'Conteúdo vertical ágil e dinâmico produzido e postado durante o evento para engajamento instantâneo nas redes.',
    icon: Sparkles,
  },
  {
    title: 'Edição & Color Grading',
    desc: 'Pós-produção com tratamento fino de cor, sound design envolvente e ritmo musical cinematográfico.',
    icon: Clapperboard,
  },
  {
    title: 'Cobertura de Eventos',
    desc: 'Documentação completa de palestras, congressos, encontros corporativos e premiações com discrição e pontualidade.',
    icon: Film,
  },
  {
    title: 'Cobertura de Eventos',
    desc: 'Acompanhamento especializado desde os montadores até o fluxo de negócios e recepção dos visitantes.',
    icon: Layers,
  },
  {
    title: 'Making Of & Bastidores',
    desc: 'Transformamos as horas de esforço e montagem em uma narrativa documental de alto valor percebido para a marca.',
    icon: Play,
  },
  {
    title: 'Vídeos Institucionais',
    desc: 'Aftermovies e filmes corporativos pensados para apresentar o posicionamento da sua empresa ao mercado.',
    icon: MonitorPlay,
  },
];

export const Audiovisual = () => {
  const whatsappUrl = siteConfig.getWhatsAppLink('audiovisual');

  const audiovisualSchemas = [
    getServiceSchema('audiovisual'),
    getBreadcrumbSchema([
      { name: 'Início', url: '/' },
      { name: 'Audiovisual', url: '/audiovisual' }
    ]),
    // getFAQSchema(siteConfig.faqAudiovisual)
  ];

  return (
    <div className="pt-20 sm:pt-24 bg-[#08070D] text-white">
      <SEO
        title="MIVLO Audiovisual | Fotografia, Videomaker e Cobertura de Eventos"
        description="Produção audiovisual corporativa com olhar cinematográfico e rigor técnico. Fotografia profissional, vídeos institucionais, cobertura de feiras, estandes e conteúdo dinâmico para redes sociais."
        keywords="MIVLO audiovisual, fotografia profissional São Paulo, videomaker para feiras, cobertura de estandes, vídeos corporativos, storymaker em tempo real, captação 4K, edição e color grading"
        canonical={`${siteConfig.siteUrl}/audiovisual`}
        schema={audiovisualSchemas}
      />

      {/* HERO SECTION AUDIOVISUAL */}
      <section className="relative py-12 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#08070D] via-[#100D18] to-[#08070D]">
        {/* Luz ambiente roxa */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[500px] h-[400px] bg-[#6128C8]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[420px] h-[350px] bg-[#9557F5]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-[#9557F5]/30 bg-[#100D18]/80 backdrop-blur-md mb-4 sm:mb-6">
                <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#9557F5]" />
                <span className="text-[9px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-[#9557F5]">
                  MIVLO Media Hub
                </span>
              </div>

              <h1 className="fluid-h1 font-extrabold text-white mb-3 sm:mb-6 leading-tight tracking-tight">
                Sua marca merece <br />
                <span className="bg-gradient-to-r from-white via-[#B99AFF] to-[#9557F5] bg-clip-text text-transparent">
                  ser vista.
                </span>
              </h1>

              <p className="text-xs sm:text-base md:text-lg text-[#B9B2C5] mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed font-light px-2 sm:px-0">
                Fotografia, vídeo e conteúdo audiovisual para transformar projetos, eventos e experiências em histórias que conectam e geram negócios.
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
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  <span>Orçar no WhatsApp</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VITRINE DOS 8 SERVIÇOS AUDIOVISUAIS (SEÇÃO CLARA #F6F4FA) */}
      <section className="py-20 lg:py-28 relative overflow-hidden w-full max-w-full bg-[#F6F4FA] text-[#08070D]">
        {/* Transição suave do Hero escuro para esta seção clara */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#08070D]/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#08070D]/10 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-widest uppercase bg-[#6128C8]/10 text-[#6128C8] border border-[#6128C8]/25 mb-4">
                Especialidades Audiovisuais
              </span>
              <h2 className="fluid-h2 font-extrabold text-[#08070D] mb-4 tracking-tight">
                Captação, Edição e <span className="bg-gradient-to-r from-[#6128C8] to-[#9557F5] bg-clip-text text-transparent">Narrativa Visual</span>
              </h2>
              <p className="text-sm md:text-base text-[#393340] font-light leading-relaxed max-w-2xl mx-auto">
                Cada formato foi desenhado para suprir as necessidades de comunicação corporativa, feiras e redes sociais.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {AUDIOVISUAL_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Reveal key={idx} delayClass={`delay-${(idx % 4) * 100}`}>
                  <div className="p-6 rounded-2xl bg-white border border-[#E5E0EB] hover:border-[#6128C8]/40 hover:shadow-xl hover:shadow-[#6128C8]/5 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#6128C8]/10 border border-[#6128C8]/20 flex items-center justify-center text-[#6128C8] mb-5 group-hover:scale-110 group-hover:bg-[#6128C8] group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#08070D] mb-2 group-hover:text-[#6128C8] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-[#393340] font-light leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE ORÇAMENTO SOB MEDIDA (ESCURA) */}
      <OrcamentoSection type="audiovisual" />

      {/* PORTFÓLIO FILTRADO PARA AUDIOVISUAL (ESCURA) */}
      <PortfolioGrid
        initialFilter="Audiovisual"
        showHeader={true}
        title="Projetos Audiovisuais Recentes"
        subtitle="Confira registros de eventos, coberturas de estandes e produções com assinatura editorial e monocromática MIVLO."
      />

      {/* COMO FUNCIONA AUDIOVISUAL: 6 ETAPAS (SEÇÃO CLARA #F6F4FA) */}
      <MethodologySection
        defaultType="audiovisual"
        theme="light"
        title="Como Funciona a Produção Audiovisual"
        subtitle="Do primeiro alinhamento até a entrega do acervo tratado pronto para uso comercial."
      />

      {/* FAQ AUDIOVISUAL (ESCURA) - Desativado temporariamente
      <FAQSection
        type="audiovisual"
        title="Perguntas Frequentes — Audiovisual"
        subtitle="Respostas diretas sobre diárias, prazos, direitos de imagem e cobertura de eventos."
      />
      */}

      {/* CTA DE CONTATO PADRONIZADO */}
      <Contato type="audiovisual" />
    </div>
  );
};
