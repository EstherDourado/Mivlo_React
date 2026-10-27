import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Video, Terminal, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuemEMivlo = () => {
  return (
    <section id="quem-e-a-mivlo" className="py-20 lg:py-28 relative bg-[#08070D] text-white overflow-hidden w-full max-w-full">
      {/* Transição sutil do claro acima para o escuro */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F6F4FA] to-transparent opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="text-[10px] md:text-xs font-mono font-semibold tracking-widest uppercase text-[#9557F5] mb-2 block">
              Marca & Hub Modular
            </span>
            <h2 className="fluid-h2 font-extrabold text-white mb-4">
              Quem é a <span className="text-purple-gradient">MIVLO?</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#B9B2C5] font-light leading-relaxed max-w-xl mx-auto">
              A MIVLO é uma marca independente criada para unir o rigor do desenvolvimento de software à sensibilidade da produção de mídia visual.
            </p>
          </div>
        </Reveal>

        {/* Os Dois Pilares da MIVLO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* MIVLO MEDIA */}
          <Reveal>
            <div className="glass-card-dark p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between border border-[#E5E0EB]/10 bg-[#100D18]/80 hover:border-[#9557F5]/40 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#6128C8]/15 border border-[#6128C8]/30 flex items-center justify-center text-[#9557F5] mb-5">
                  <Video className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9557F5] mb-1.5 block">
                  Pilar Audiovisual
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3">
                  MIVLO Media
                </h3>
                <p className="text-xs sm:text-sm text-[#B9B2C5] font-light leading-relaxed mb-6">
                  Fotografia, vídeo, edição, cobertura de feiras, conteúdo estratégico e storytelling de alto impacto visual.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {[
                    "Cobertura técnica de estandes e eventos corporativos",
                    "Making of e bastidores da montagem estrutural",
                    "Vídeos institucionais, aftermovies e depoimentos",
                    "Conteúdo vertical ágil para Instagram Reels e TikTok",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#B9B2C5]">
                      <CheckCircle2 className="w-4 h-4 text-[#9557F5] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/audiovisual"
                className="btn-purple text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 w-full flex items-center justify-center gap-2 group"
              >
                <span>Conheça os serviços audiovisuais</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* MIVLO TECH */}
          <Reveal delayClass="delay-100">
            <div className="glass-card-dark p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between border border-[#E5E0EB]/10 bg-[#100D18]/80 hover:border-[#9557F5]/40 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#6128C8]/15 border border-[#6128C8]/30 flex items-center justify-center text-[#9557F5] mb-5">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9557F5] mb-1.5 block">
                  Pilar Tecnologia
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3">
                  MIVLO Tech
                </h3>
                <p className="text-xs sm:text-sm text-[#B9B2C5] font-light leading-relaxed mb-6">
                  Desenvolvimento web, sistemas, landing pages, automações de processos e soluções digitais sob medida.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {[
                    "Landing Pages desenhadas para máxima conversão",
                    "Sites institucionais modernos e otimizados para SEO",
                    "Sistemas web, dashboards e automação de processos",
                    "Engenharia Full Stack moderna com código limpo e seguro",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#B9B2C5]">
                      <CheckCircle2 className="w-4 h-4 text-[#9557F5] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/desenvolvimento"
                className="btn-ghost text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 w-full flex items-center justify-center gap-2 group"
              >
                <span>Conheça os serviços de desenvolvimento</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* O Objetivo Comum */}
        <Reveal delayClass="delay-200">
          <div className="mt-10 max-w-4xl mx-auto p-5 sm:p-7 rounded-2xl glass-card-dark bg-gradient-to-r from-[#1B0A32]/40 via-[#100D18] to-[#1B0A32]/40 border border-[#E5E0EB]/10 text-center">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B99AFF] font-bold block mb-1.5">
              Propósito Central
            </span>
            <p className="text-sm sm:text-lg md:text-xl font-display font-bold text-white leading-relaxed">
              “Transformar ideias em <span className="text-purple-gradient">experiências digitais e visuais</span> que geram presença real para o seu negócio.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

