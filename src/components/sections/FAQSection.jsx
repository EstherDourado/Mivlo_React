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
    <section id="faq" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-3 block">
              Dúvidas & Clareza
            </span>
            <h2 className="fluid-h2 font-extrabold text-white mb-4">
              {title}
            </h2>
            <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
              {subtitle}
            </p>

            {type === "general" && (
              <div className="inline-flex items-center p-1 rounded-full bg-brand-muted/40 border border-brand-border/60 mt-6">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === "all" ? "bg-brand-amber text-white shadow-md" : "text-brand-sand/70 hover:text-white"
                  }`}
                >
                  Principais
                </button>
                <button
                  onClick={() => setActiveTab("audiovisual")}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === "audiovisual" ? "bg-brand-amber text-white shadow-md" : "text-brand-sand/70 hover:text-white"
                  }`}
                >
                  Audiovisual
                </button>
                <button
                  onClick={() => setActiveTab("desenvolvimento")}
                  className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === "desenvolvimento" ? "bg-brand-amber text-white shadow-md" : "text-brand-sand/70 hover:text-white"
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
