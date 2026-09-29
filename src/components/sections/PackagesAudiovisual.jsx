import React from 'react';
import { Check, Star, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Reveal } from '../ui/Reveal';

export const PackagesAudiovisual = () => {
  return (
    <section id="pacotes" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-3 block">
              Investimento Transparente
            </span>
            <h2 className="fluid-h2 font-extrabold text-white mb-4">
              Pacotes de <span className="text-amber-gradient">Produção Audiovisual</span>
            </h2>
            <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
              Formatos estruturados para feiras, estandes e eventos corporativos. Escolha a intensidade de cobertura ideal para a sua marca.
            </p>
          </div>
        </Reveal>

        {/* Grade dos 3 Pacotes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch mb-20">
          {siteConfig.audiovisualPackages.map((pkg, index) => {
            const isFeatured = pkg.isFeatured;
            const whatsappLink = siteConfig.getWhatsAppLink('audiovisual') + encodeURIComponent(` sobre o pacote ${pkg.name}.`);

            return (
              <Reveal key={pkg.id} delayClass={`delay-${index * 100}`} className="h-full">
                <div
                  className={`glass-panel rounded-3xl p-8 flex flex-col justify-between h-full relative transition-all duration-500 ${
                    isFeatured
                      ? 'border-2 border-brand-amber bg-gradient-to-b from-[#2a134d] via-[#1b013b] to-[#120129] shadow-[0_20px_50px_rgba(176,106,179,0.35)] scale-105 z-10'
                      : 'border border-brand-border/60 bg-brand-muted/20 hover:border-brand-border'
                  }`}
                >
                  {/* Badge de Destaque no Topo */}
                  {isFeatured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-amber to-brand-amber2 text-white text-[11px] font-mono font-extrabold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-white" />
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    {!isFeatured && (
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-amber block mb-2">
                        {pkg.badge}
                      </span>
                    )}

                    <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-sand/70 font-light leading-relaxed mb-6 min-h-[40px]">
                      {pkg.description}
                    </p>

                    {/* Preço */}
                    <div className="p-4 rounded-2xl bg-black/30 border border-white/5 mb-6 flex items-baseline gap-1">
                      <span className="text-xs text-brand-sand/60 font-mono">R$</span>
                      <span className="text-3xl md:text-4xl font-display font-black text-white">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-brand-sand/60 ml-1">/ projeto</span>
                    </div>

                    {/* Entregáveis */}
                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-mono uppercase text-brand-sand/50 tracking-wider block font-semibold">
                        O que está incluso:
                      </span>
                      {pkg.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-brand-sand/90">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isFeatured ? 'bg-brand-amber text-white' : 'bg-white/10 text-brand-amber'
                          }`}>
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="font-light leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Ideal para */}
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-6 text-[11px] text-brand-sand/70 italic">
                      <span className="font-semibold text-white/90 not-italic block mb-0.5">Indicado para:</span>
                      {pkg.idealFor}
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-6 rounded-full text-xs md:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                        isFeatured
                          ? 'btn-amber shadow-lg shadow-brand-amber/30'
                          : 'btn-ghost'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contratar Pacote {pkg.name}
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* SERVIÇOS AVULSOS (Pesquisa de mercado Brasil 2026) */}
        <Reveal>
          <div className="mt-16 pt-16 border-t border-brand-border/40">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-2 block">
                Demandas Específicas
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-3">
                Serviços Avulsos & Diárias
              </h3>
              <p className="text-xs md:text-sm text-brand-sand/70 font-light leading-relaxed">
                Precisa de uma demanda pontual, diária avulsa ou pós-produção sob medida? Trabalhamos com valores balizados pelo mercado corporativo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {siteConfig.audiovisualStandalone.map((service, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-brand-border/60 bg-brand-muted/20 hover:border-brand-amber/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-display font-bold text-base text-white">
                        {service.title}
                      </h4>
                      <span className="text-xs font-mono font-bold text-brand-amber px-2.5 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/30 whitespace-nowrap">
                        A partir de {service.startingAt}
                      </span>
                    </div>
                    <p className="text-xs text-brand-sand/80 font-light mb-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/5 text-[11px] text-brand-sand/50 font-mono">
                    {service.details}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-brand-sand/50">
                * Projetos em outras cidades ou estados podem ter despesas de deslocamento e hospedagem cotadas à parte.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
