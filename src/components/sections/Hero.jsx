import React from 'react';
import { ArrowRight, MessageSquare, Video, Code2 } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-44 lg:pb-32 overflow-hidden min-h-[70vh] sm:min-h-[85vh] flex items-center bg-[#08070D] text-white w-full max-w-full">
      {/* Elementos luminosos roxos nas extremidades */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#6128C8]/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#9557F5]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/10 bg-[#100D18]/80 backdrop-blur-md mb-4 sm:mb-8 hover:border-[#9557F5]/40 transition-colors">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#9557F5] animate-pulse"></span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#B9B2C5]">
                Tecnologia · Audiovisual · Presença Digital
              </span>
            </div>

            <h1 className="fluid-h1 font-extrabold text-white mb-3 sm:mb-6 leading-tight tracking-tight">
              Sua marca em tela.<br />
              <span className="bg-gradient-to-r from-white via-[#B99AFF] to-[#9557F5] bg-clip-text text-transparent">
                Sua marca em código.
              </span>
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-[#B9B2C5] mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed font-light px-2 sm:px-0">
              Desenvolvimento digital e produção audiovisual para transformar ideias, projetos e experiências em soluções que geram presença real. Engenharia de software e olhar cinematográfico sob a mesma liderança.
            </p>

            {/* CTAs Requeridos Centralizados */}
            <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-2.5 sm:gap-4 max-w-sm sm:max-w-none mx-auto">
              <a
                href="#portfolio"
                className="btn-purple w-auto min-w-[190px] sm:min-w-0 max-w-full px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm shadow-lg shadow-[#6128C8]/25 flex items-center justify-center gap-2"
              >
                <span>Explorar Portfólio</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />
              </a>
              <a
                href="#contato"
                className="btn-ghost w-auto min-w-[190px] sm:min-w-0 max-w-full px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span>Fale comigo</span>
              </a>
            </div>

            {/* Badges dos Pilares Interativos Centralizados */}
            <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono">
              <Link
                to="/audiovisual"
                className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#6128C8]/15 border border-[#6128C8]/30 text-[#B99AFF] hover:bg-[#6128C8] hover:text-white transition-all flex items-center gap-1 sm:gap-1.5"
              >
                <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                MIVLO Media
              </Link>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/20"></div>
              <Link
                to="/desenvolvimento"
                className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#9557F5]/15 border border-[#9557F5]/30 text-[#9557F5] hover:bg-[#9557F5] hover:text-white transition-all flex items-center gap-1 sm:gap-1.5"
              >
                <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                MIVLO Tech
              </Link>
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/20"></div>
              <span className="text-[#B9B2C5]/60 uppercase tracking-widest text-[9px] sm:text-[11px]">
                Hub Modular Independente
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
