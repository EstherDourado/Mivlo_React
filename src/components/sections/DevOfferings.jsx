import React from 'react';
import { Check, ShieldCheck, MessageSquare, RefreshCw } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Reveal } from '../ui/Reveal';

export const DevOfferings = () => {
  return (
    <section id="servicos-dev" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-6">
        {/* PARTE 1: CATEGORIAS DE DESENVOLVIMENTO */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-3 block">
              Engenharia de Software
            </span>
            <h2 className="fluid-h2 font-extrabold text-white mb-4">
              Soluções Digitais <span className="text-amber-gradient">Sob Medida</span>
            </h2>
            <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
              Desenvolvemos aplicações robustas, código limpo e foco absoluto em conversão. Sem templates engessados ou plataformas lentas.
            </p>
          </div>
        </Reveal>

        {/* Grade dos 3 Tipos de Projetos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch mb-24">
          {siteConfig.devServices.map((service, idx) => {
            const isCustom = service.type === 'custom';
            const whatsappLink = siteConfig.getWhatsAppLink('desenvolvimento') + encodeURIComponent(` sobre ${service.name}.`);

            return (
              <Reveal key={service.id} delayClass={`delay-${idx * 100}`} className="h-full">
                <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between h-full border border-brand-border/60 bg-brand-muted/20 hover:border-blue-400/50 transition-all duration-300">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
                      {isCustom ? 'Escopo Personalizado' : 'Projeto Fechado'}
                    </span>

                    <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-sand/70 font-light leading-relaxed mb-6 min-h-[48px]">
                      {service.description}
                    </p>

                    {/* Preço de Entrada */}
                    <div className="p-4 rounded-2xl bg-black/30 border border-white/5 mb-6 flex items-baseline gap-1.5">
                      <span className="text-xs text-brand-sand/60 font-mono">
                        {isCustom ? 'Investimento:' : 'A partir de:'}
                      </span>
                      <span className="text-2xl md:text-3xl font-display font-black text-white">
                        {service.startingAt}
                      </span>
                    </div>

                    {/* Destaques Técnicos */}
                    <div className="space-y-2.5 mb-8">
                      <span className="text-[11px] font-mono uppercase text-brand-sand/50 tracking-wider block font-semibold">
                        Especificações inclusas:
                      </span>
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-brand-sand/90">
                          <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="font-light leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-6 text-[11px] text-brand-sand/70">
                      <span className="font-semibold text-white/90 block mb-0.5">Importante:</span>
                      {service.note}
                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost w-full py-3 text-xs md:text-sm font-semibold flex items-center justify-center gap-2 hover:border-blue-400 hover:text-blue-300"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {isCustom ? 'Solicitar diagnóstico gratuito' : 'Iniciar projeto'}
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* PARTE 2: PLANOS DE MANUTENÇÃO & HOSPEDAGEM RECORRENTE */}
        <Reveal>
          <div className="pt-16 border-t border-brand-border/40">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-3 inline-flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                Sustentação & Continuidade
              </span>
              <h3 className="fluid-h2 font-extrabold text-white mb-4">
                Seu site precisa <span className="text-amber-gradient">continuar funcionando.</span>
              </h3>
              <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
                Desenvolver é apenas o primeiro passo. Para garantir que sua aplicação permaneça rápida, segura contra ataques, indexada pelo Google e disponível 24 horas por dia, oferecemos planos mensais de sustentação técnica.
              </p>
            </div>

            {/* Aviso de Transparência Comercial */}
            <div className="max-w-4xl mx-auto p-5 rounded-2xl bg-brand-muted/40 border border-brand-border/80 mb-12 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-brand-sand/80 leading-relaxed font-light">
                <strong className="text-white block font-semibold mb-1">
                  Diferença clara entre Desenvolvimento Inicial e Sustentação Mensal:
                </strong>
                O investimento de desenvolvimento cobre o design, arquitetura, codificação e publicação da solução. O plano mensal cobre a infraestrutura de servidores na nuvem, segurança, backups contínuos, renovação de certificados e suporte técnico humanizado.
              </div>
            </div>

            {/* Cards dos 3 Planos Mensais */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
              {siteConfig.maintenancePlans.map((plan) => {
                const isPopular = plan.isPopular;
                const whatsappLink = siteConfig.getWhatsAppLink('desenvolvimento') + encodeURIComponent(` sobre o plano de manutenção ${plan.name}.`);

                return (
                  <div
                    key={plan.id}
                    className={`glass-panel rounded-3xl p-8 flex flex-col justify-between h-full relative transition-all duration-300 ${
                      isPopular
                        ? 'border-2 border-emerald-500/80 bg-gradient-to-b from-[#142828] via-[#1b013b] to-[#0c1524] shadow-[0_15px_40px_rgba(16,185,129,0.25)]'
                        : 'border border-brand-border/60 bg-brand-muted/20 hover:border-brand-border'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-brand-graphite text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-md">
                        Mais Recomendado
                      </div>
                    )}

                    <div>
                      <h4 className="text-xl font-display font-extrabold text-white mb-2">
                        {plan.name}
                      </h4>
                      <p className="text-xs text-brand-sand/70 font-light leading-relaxed mb-6 min-h-[36px]">
                        {plan.description}
                      </p>

                      {/* Preço Mensal */}
                      <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-6 flex items-baseline gap-1">
                        <span className="text-xs text-brand-sand/60 font-mono">R$</span>
                        <span className="text-3xl font-display font-black text-white">
                          {plan.price}
                        </span>
                        <span className="text-xs text-brand-sand/60 font-mono">{plan.billing}</span>
                      </div>

                      {/* Itens Inclusos */}
                      <div className="space-y-2.5 mb-8">
                        {plan.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs text-brand-sand/90">
                            <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="font-light leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-6 text-[11px] text-brand-sand/70">
                        <span className="font-semibold text-white/90 block mb-0.5">Perfil ideal:</span>
                        {plan.bestFor}
                      </div>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-6 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                          isPopular
                            ? 'bg-emerald-500 hover:bg-emerald-400 text-brand-graphite shadow-lg'
                            : 'btn-ghost'
                        }`}
                      >
                        Contratar {plan.name}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
