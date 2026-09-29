import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Video, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuemEMivlo = () => {
  return (
    <section id="quem-e-a-mivlo" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-3 block">
              Marca & Hub Modular
            </span>
            <h2 className="fluid-h2 font-extrabold text-white mb-6">
              Quem é a <span className="text-amber-gradient">MIVLO?</span>
            </h2>
            <p className="text-base md:text-xl text-brand-sand/90 font-light leading-relaxed max-w-3xl mx-auto">
              A MIVLO é uma marca independente criada para preencher o abismo entre o universo do desenvolvimento de software e a produção de mídia visual.
            </p>
          </div>
        </Reveal>

        {/* Os Dois Pilares da MIVLO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* MIVLO MEDIA */}
          <Reveal>
            <div className="glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between border border-brand-border/80 bg-brand-muted/20 hover:border-brand-amber/60 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-amber/20 border border-brand-amber/40 flex items-center justify-center text-brand-amber mb-6">
                  <Video className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-amber mb-2 block">
                  Pilar Audiovisual
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4">
                  MIVLO Media
                </h3>
                <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed mb-6">
                  Fotografia, vídeo, edição, eventos, conteúdo estratégico e storytelling de alto impacto visual.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Cobertura técnica de estandes e eventos corporativos",
                    "Making of e bastidores da montagem estrutural",
                    "Vídeos institucionais, aftermovies e depoimentos",
                    "Conteúdo vertical ágil para Instagram Reels e TikTok",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-brand-sand/90">
                      <CheckCircle2 className="w-4 h-4 text-brand-amber flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/audiovisual"
                className="btn-amber text-xs md:text-sm py-3 px-6 w-full flex items-center justify-center gap-2 group"
              >
                Conheça os serviços audiovisuais
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* MIVLO TECH */}
          <Reveal delayClass="delay-100">
            <div className="glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between border border-brand-border/80 bg-brand-muted/20 hover:border-brand-amber2/60 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-amber2/20 border border-brand-amber2/40 flex items-center justify-center text-blue-400 mb-6">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-2 block">
                  Pilar Tecnologia
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-4">
                  MIVLO Tech
                </h3>
                <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed mb-6">
                  Desenvolvimento web, sistemas, landing pages, automações de processos e soluções digitais sob medida.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Landing Pages desenhadas para máxima conversão",
                    "Sites institucionais elegantes e otimizados para SEO",
                    "Sistemas web, dashboards e automação de regras",
                    "Engenharia Full Stack moderna com código limpo e seguro",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-brand-sand/90">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/desenvolvimento"
                className="btn-ghost text-xs md:text-sm py-3 px-6 w-full flex items-center justify-center gap-2 group hover:border-blue-400 hover:text-blue-300"
              >
                Conheça os serviços de desenvolvimento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* O Objetivo Comum */}
        <Reveal delayClass="delay-200">
          <div className="mt-12 max-w-4xl mx-auto p-6 md:p-8 rounded-2xl glass-panel bg-gradient-to-r from-brand-amber/10 via-brand-graphite/60 to-brand-amber2/10 border border-white/10 text-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-amber font-bold block mb-2">
              Propósito Central
            </span>
            <p className="text-lg md:text-2xl font-display font-bold text-white leading-relaxed">
              “Transformar ideias em <span className="text-amber-gradient">experiências digitais e visuais</span> que geram presença real para o seu negócio.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
