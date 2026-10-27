import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { siteConfig } from '../../config/site';

export const Contato = ({ type = 'contato' }) => {
  const whatsappUrl = siteConfig.getWhatsAppLink(type);

  return (
    <section id="contato" className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#100D18] via-[#08070D] to-[#08070D] text-white">
      {/* Brilhos discretos violeta e roxo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#6128C8]/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
        <Reveal>
          <div className="flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-widest uppercase bg-[#9557F5]/10 text-[#9557F5] border border-[#9557F5]/25 mb-5">
              Vamos construir
            </span>

            <h2 className="fluid-h2 font-extrabold text-white mb-4 md:mb-6 tracking-tight">
              Transforme sua ideia em uma <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-white via-[#B99AFF] to-[#9557F5] bg-clip-text text-transparent">
                entrega profissional.
              </span>
            </h2>

            <p className="text-[#B9B2C5] max-w-xl mx-auto font-light text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10">
              Tem um projeto em mente, precisa de um novo site, landing page de alta conversão ou cobertura audiovisual de alto padrão? Fale diretamente comigo no WhatsApp para solicitar seu orçamento sob medida.
            </p>

            {/* Botão Único Padronizado para o WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-purple text-xs sm:text-sm md:text-base font-bold px-7 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-xl shadow-[#6128C8]/40 flex items-center justify-center gap-2.5 transition-all transform hover:scale-105 w-auto max-w-full"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              <span>Solicitar Orçamento no WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
