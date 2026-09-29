import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Camera, Code2, Sparkles, ArrowRight } from 'lucide-react';

export const AboutEsther = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-3 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Liderança & Criação
            </span>
            <h2 className="fluid-h2 font-extrabold text-white mb-4">
              Na interseção entre <br />
              <span className="text-amber-gradient">código e imagem.</span>
            </h2>
            <p className="text-sm md:text-lg text-brand-sand/80 font-light leading-relaxed">
              Conheça quem idealizou a MIVLO para entregar soluções completas de presença digital e comunicação visual.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
          {/* FOTOGRAFIA DA ESTHER EM DESTAQUE */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal>
              <div className="relative group max-w-[380px] w-full">
                {/* Glow decorativo de fundo */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-amber via-brand-amber2 to-purple-600 opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>

                {/* Moldura com Viewfinder */}
                <div className="viewfinder relative rounded-3xl overflow-hidden glass-panel border border-brand-border/80 shadow-2xl p-2 bg-brand-muted/30">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black/40">
                    <img
                      src="/img/esther.jpg"
                      alt="Esther Dourado Batista — Criadora da MIVLO"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b013b]/90 via-transparent to-transparent opacity-80"></div>

                    {/* Legenda inferior sobreposta */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-brand-amber block mb-0.5 font-bold">
                        Fundadora & Líder Técnica
                      </span>
                      <h3 className="text-xl font-display font-extrabold text-white">
                        Esther Dourado Batista
                      </h3>
                      <p className="text-xs text-brand-sand/80 font-light">
                        Fotógrafa • Filmmaker • Desenvolvedora Full Stack
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Lateral */}
                <div className="absolute -bottom-4 -right-4 glass-panel bg-brand-graphite/95 border border-brand-border/80 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-amber/20 border border-brand-amber/40 flex items-center justify-center text-brand-amber">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-brand-sand/60 block">Visão MIVLO</span>
                    <span className="text-xs font-bold text-white">Media + Tech Dual Hub</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* APRESENTAÇÃO TEXTUAL E AUTORIDADE */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            <Reveal delayClass="delay-100">
              <div className="space-y-4">
                <span className="text-xs font-mono font-semibold tracking-wider text-brand-amber uppercase">
                  Sobre Esther Dourado Batista
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white leading-tight">
                  Construir o produto com rigor de engenharia. <br />
                  <span className="text-amber-gradient">Mostrar o valor com olhar de cinema.</span>
                </h3>
                <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
                  Sou apaixonada pela criação em dois mundos que raramente conversam: a precisão lógica do desenvolvimento de software e a sensibilidade narrativa da produção audiovisual.
                </p>
                <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
                  Na tecnologia, desenvolvo Landing Pages de alta conversão, sites institucionais modernos e sistemas web sob medida, sempre priorizando velocidade, código limpo e arquitetura escalável.
                </p>
                <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
                  No audiovisual, atuo como fotógrafa e filmmaker registrando projetos corporativos, grandes estandes em feiras e conteúdos dinâmicos para marcas que exigem elegância, agilidade e presença real.
                </p>
              </div>

              {/* Grid dos Dois Pilares com Ícones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="glass-panel p-4 rounded-xl border border-brand-border/60 bg-brand-muted/20">
                  <div className="flex items-center gap-2 mb-2 text-brand-amber">
                    <Code2 className="w-5 h-5" />
                    <h4 className="font-display font-bold text-sm text-white">Frente Tecnologia</h4>
                  </div>
                  <p className="text-xs text-brand-sand/70 font-light leading-relaxed">
                    Full Stack (React, C#, .NET, SQL, PHP), automações em IA e RPA com foco absoluto em conversão e usabilidade.
                  </p>
                </div>

                <div className="glass-panel p-4 rounded-xl border border-brand-border/60 bg-brand-muted/20">
                  <div className="flex items-center gap-2 mb-2 text-brand-amber">
                    <Camera className="w-5 h-5" />
                    <h4 className="font-display font-bold text-sm text-white">Frente Audiovisual</h4>
                  </div>
                  <p className="text-xs text-brand-sand/70 font-light leading-relaxed">
                    Fotografia corporativa, filmagem de estandes, aftermovies 4K, storymaker e acervos que continuam vendendo.
                  </p>
                </div>
              </div>

              {/* Botão de Ação */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a href="#contato" className="btn-amber text-sm px-7 py-3">
                  Fale com a Esther
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a href="#frentes" className="btn-ghost text-sm px-6 py-3">
                  Ver as frentes de atuação
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
