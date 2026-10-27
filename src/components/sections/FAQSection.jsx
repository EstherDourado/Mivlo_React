import React, { useState } from 'react';
import { AccordionItem } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';
import { siteConfig } from '../../config/site';

export const FAQSection = ({ type = "general", title = "Perguntas Frequentes", subtitle = "Tire suas dúvidas e entenda como funciona cada detalhe da nossa entrega." }) => {
  const [activeTab, setActiveTab] = useState(type === "general" ? "all" : type);

  let items = [];
  if (activeTab === "audiovisual") {
    items = siteConfig.faqAudiovisual;
  } else if (activeTab === "desenvolvimento") {
    items = siteConfig.faqDesenvolvimento;
  } else {
    // General: combinamos as principais de ambas as frentes
    items = [
      siteConfig.faqDesenvolvimento[1], // Existe mensalidade?
      siteConfig.faqAudiovisual[0],     // Quantas fotos receberei?
      siteConfig.faqDesenvolvimento[3], // O site será responsivo?
      siteConfig.faqAudiovisual[1],     // Em quanto tempo recebo o material?
      siteConfig.faqDesenvolvimento[7], // Sistemas possuem orçamento personalizado?
      siteConfig.faqAudiovisual[6],     // Cobertura de montagem de estandes?
    ];
  }

  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden w-full max-w-full bg-gradient-to-b from-[#08070D] via-[#100D18] to-[#08070D] text-white">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#6128C8]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-widest uppercase bg-[#9557F5]/10 text-[#9557F5] border border-[#9557F5]/25 mb-4">
              Dúvidas & Clareza
            </span>
            <h2 className="fluid-h2 font-extrabold text-white mb-4 tracking-tight">
              {title}
            </h2>
            <p className="text-sm md:text-base text-[#B9B2C5] font-light leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            {type === "general" && (
              <div className="inline-flex items-center p-1 rounded-full bg-[#100D18] border border-[#393340] mt-6 shadow-lg shadow-black/40">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === "all" ? "bg-[#6128C8] text-white shadow-md shadow-[#6128C8]/40" : "text-[#B9B2C5] hover:text-white"
                  }`}
                >
                  Principais
                </button>
                <button
                  onClick={() => setActiveTab("audiovisual")}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === "audiovisual" ? "bg-[#6128C8] text-white shadow-md shadow-[#6128C8]/40" : "text-[#B9B2C5] hover:text-white"
                  }`}
                >
                  Audiovisual
                </button>
                <button
                  onClick={() => setActiveTab("desenvolvimento")}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === "desenvolvimento" ? "bg-[#6128C8] text-white shadow-md shadow-[#6128C8]/40" : "text-[#B9B2C5] hover:text-white"
                  }`}
                >
                  Desenvolvimento
                </button>
              </div>
            )}
          </div>
        </Reveal>

        <div className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              index={String(index + 1).padStart(2, '0')}
              question={item.q}
              answer={item.a}
              delayClass={`delay-${(index % 4) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
