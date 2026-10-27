import React from 'react';
import { Reveal } from '../ui/Reveal';
import { ArrowRight, Sparkles, MessageCircle, Layers, Code, Camera } from 'lucide-react';
import { siteConfig, asset } from '../../config/site';

export const AboutEsther = () => {
  return (
    <section 
      id="sobre" 
      className="py-20 lg:py-28 relative overflow-hidden w-full max-w-full bg-gradient-to-b from-[#FFFFFF] via-[#FAF8FD] to-[#FFFFFF] text-[#08070D]"
      role="region"
      aria-label="Sobre a Fundadora da MIVLO"
    >
      {/* Luz ambiente difusa em lavanda */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9557F5]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center max-w-6xl mx-auto">
          
          {/* COLUNA ESQUERDA: APRESENTAÇÃO TEXTUAL OBJETIVA */}
          <div className="lg:col-span-6 text-left space-y-6 order-2 lg:order-1">
            <Reveal>
              {/* Badge da Seção */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#6128C8]/10 text-[#6128C8] border border-[#6128C8]/20 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#9557F5]" />
              </div>

              {/* Título Principal */}
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#08070D] leading-[1.2] tracking-tight">
                Quem está por trás da{' '}
                <span className="bg-gradient-to-r from-[#6128C8] via-[#803FE8] to-[#9557F5] bg-clip-text text-transparent">
                  MIVLO?
                </span>
              </h2>

              {/* Texto Sugerido Oficial */}
              <p className="text-sm sm:text-base text-[#393340] font-normal leading-relaxed pt-2 max-w-xl">
                Sou <strong className="font-semibold text-[#08070D]">Esther Dourado Batista</strong>, fotógrafa, videomaker e desenvolvedora. Uno criatividade, narrativa visual e tecnologia para transformar ideias em experiências digitais e audiovisuais com identidade própria.
              </p>

              {/* Pilares de Especialidade em Pills Sutis */}
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#E5E0EB] shadow-sm text-xs font-medium text-[#393340]">
                  <Camera className="w-3.5 h-3.5 text-[#6128C8]" />
                  Audiovisual & Direção
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#E5E0EB] shadow-sm text-xs font-medium text-[#393340]">
                  <Code className="w-3.5 h-3.5 text-[#6128C8]" />
                  Engenharia Web & Sistemas
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-[#E5E0EB] shadow-sm text-xs font-medium text-[#393340]">
                  <Layers className="w-3.5 h-3.5 text-[#6128C8]" />
                  Identidade Autoral
                </span>
              </div>

              {/* Botões de Ação */}
              <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center sm:items-center gap-2.5 sm:gap-3.5">
                <a
                  href={siteConfig.getWhatsAppLink("general")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-purple w-auto min-w-[190px] sm:min-w-0 max-w-full px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm shadow-md shadow-[#6128C8]/25 flex items-center justify-center gap-2 font-semibold hover:shadow-lg hover:shadow-[#6128C8]/35 transition-all"
                  aria-label="Conversar com Esther via WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar com Esther</span>
                </a>

                <a
                  href="#quem-e-a-mivlo"
                  className="btn-ghost-light w-auto min-w-[190px] sm:min-w-0 max-w-full px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Conhecer a MIVLO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* COLUNA DIREITA: COMPOSIÇÃO ARTÍSTICA DA FUNDADORA */}
          <div className="lg:col-span-6 flex justify-center relative w-full order-1 lg:order-2">
            <Reveal delayClass="delay-100">
              <div className="relative flex items-center justify-center py-4 sm:py-6 px-3 sm:px-6 w-full max-w-[460px] mx-auto">
                
                {/* Camada 1: Halo suave de fundo em lavanda/lilás */}
                <div 
                  className="absolute -inset-4 sm:-inset-8 rounded-full bg-gradient-to-tr from-[#9557F5]/25 via-[#B99AFF]/15 to-transparent blur-3xl pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Camada 2: Forma Orgânica Roxa com Curvas Assimétricas (atrás da moldura, deslocada para a esquerda/inferior) */}
                <div 
                  className="organic-purple-blob absolute -left-3 sm:-left-6 md:-left-8 -bottom-3 sm:-bottom-6 md:-bottom-8 w-[72%] sm:w-[75%] h-[72%] sm:h-[75%] pointer-events-none z-0" 
                  aria-hidden="true" 
                />

                {/* Moldura Orgânica Escura com a Fotografia Real (sem texto cortado dentro) */}
                <div className="organic-photo-frame relative z-20 overflow-hidden w-[250px] xs:w-[280px] sm:w-[340px] md:w-[390px] lg:w-[420px] aspect-[4/4.5] border border-black/10">
                  <img
                    src={asset('img/esther.jpg')}
                    alt="Esther Dourado Batista — Fotógrafa, Videomaker e Desenvolvedora"
                    className="w-full h-full object-cover object-[center_18%] select-none transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Sutil vinheta na base apenas para dar profundidade à foto */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08070D]/50 to-transparent pointer-events-none" />
                </div>

                {/* Assinatura Manuscrita 'Esther' elevada no canto inferior direito */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-1 sm:-right-2 md:-right-4 z-30 pointer-events-none select-none">
                  <span className="font-signature text-5xl xs:text-6xl sm:text-7xl md:text-8xl text-[#7E22CE] sm:text-[#8B2EE8] drop-shadow-[0_4px_18px_rgba(255,255,255,0.95)] block transform -rotate-6 transition-transform duration-500">
                    Esther
                  </span>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

