import React from 'react';
import { Camera, Film, Sparkles, Video, Play, Layers, Clapperboard, MonitorPlay, MessageCircle, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { PackagesAudiovisual } from '../components/sections/PackagesAudiovisual';
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
    title: 'Cobertura de Estandes',
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

  return (
    <div className="pt-24">
      {/* HERO SECTION AUDIOVISUAL */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-amber/40 bg-brand-amber/10 backdrop-blur-md mb-6">
                <Camera className="w-4 h-4 text-brand-amber" />
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-brand-amber">
                  MIVLO Media Hub
                </span>
              </div>

              <h1 className="fluid-h1 font-extrabold text-white mb-6 leading-tight">
                Sua marca merece <br />
                <span className="text-amber-gradient">ser vista.</span>
              </h1>

              <p className="text-base md:text-xl text-brand-sand/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Fotografia, vídeo e conteúdo audiovisual para transformar projetos, eventos e experiências em histórias que conectam e geram negócios.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#pacotes"
                  className="btn-amber w-full sm:w-auto text-sm md:text-base px-8 py-3.5 shadow-xl shadow-brand-amber/30"
                >
                  Ver Pacotes & Preços
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full sm:w-auto text-sm md:text-base px-8 py-3.5 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  Orçar no WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VITRINE DOS 8 SERVIÇOS AUDIOVISUAIS */}
      <section className="py-16 lg:py-24 relative bg-brand-muted/20 border-y border-brand-border/40">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-3 block">
                Especialidades Audiovisuais
              </span>
              <h2 className="fluid-h2 font-extrabold text-white mb-4">
                Captação, Edição e <span className="text-amber-gradient">Narrativa Visual</span>
              </h2>
              <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
                Cada formato foi desenhado para suprir as necessidades de comunicação corporativa, feiras e redes sociais.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {AUDIOVISUAL_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Reveal key={idx} delayClass={`delay-${(idx % 4) * 100}`}>
                  <div className="glass-panel p-6 rounded-2xl border border-brand-border/60 bg-brand-graphite/40 hover:border-brand-amber/50 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-brand-amber/10 border border-brand-amber/30 flex items-center justify-center text-brand-amber mb-5 group-hover:scale-110 group-hover:bg-brand-amber group-hover:text-white transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-amber transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-brand-sand/75 font-light leading-relaxed">
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

      {/* PACOTES AUDIOVISUAIS (Registro R$ 1.250, Conteúdo R$ 1.750, História R$ 2.500 [MAIS COMPLETO]) + Serviços Avulsos */}
      <PackagesAudiovisual />

      {/* PORTFÓLIO FILTRADO PARA AUDIOVISUAL */}
      <PortfolioGrid
        initialFilter="Audiovisual"
        showHeader={true}
        title="Projetos Audiovisuais Recentes"
        subtitle="Confira registros de eventos, coberturas de estandes e produções com assinatura MIVLO."
      />

      {/* COMO FUNCIONA AUDIOVISUAL: 6 ETAPAS */}
      <MethodologySection
        defaultType="audiovisual"
        title="Como Funciona a Produção Audiovisual"
        subtitle="Do primeiro alinhamento até a entrega do acervo tratado pronto para uso comercial."
      />

      {/* FAQ AUDIOVISUAL */}
      <FAQSection
        type="audiovisual"
        title="Perguntas Frequentes — Audiovisual"
        subtitle="Respostas diretas sobre diárias, prazos, direitos de imagem e cobertura de eventos."
      />

      {/* CTA DE CONTATO */}
      <Contato />
    </div>
  );
};
