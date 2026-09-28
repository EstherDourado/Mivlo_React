import React from 'react';
import { Reveal } from '../ui/Reveal';

export const Frentes = () => {
    return (
        <section id="frentes" className="py-16 lg:py-24 relative">
            <div className="container mx-auto px-6">
                <Reveal>
                    <div className="mb-12 md:mb-16">
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-4 md:mb-6 block">Frentes de atuação</span>
                        <h2 className="fluid-h2 font-extrabold text-white mb-4 md:mb-6">
                            Soluções independentes e <span className="text-amber-gradient">modulares.</span>
                        </h2>
                        <p className="text-base md:text-lg text-brand-sand/80 max-w-2xl font-light">
                        Escolha a área que a sua empresa precisa hoje ou combine nossas frentes para uma transformação digital completa.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Media Card */}
                    <Reveal>
                        <div className="glass-panel p-6 md:p-8 lg:p-12 h-full">
                            <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest text-brand-amber mb-4 md:mb-6 block opacity-80 transition-opacity">MIVLO MEDIA</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-4">Soluções Audiovisuais & Marketing</h3>
                            <p className="text-sm md:text-base text-brand-sand/80 mb-6 md:mb-8 font-light leading-relaxed">
                                Captação discreta, ágil e de padrão B2B para eventos, estruturas e marketing.
                            </p>
                            <ul className="space-y-4 md:space-y-5">
                                <li className="flex items-start gap-3 md:gap-4 text-brand-sand/90">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-amber mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                                    <span className="font-medium text-sm md:text-base">Captura do Making Of da construção</span>
                                </li>
                                <li className="flex items-start gap-3 md:gap-4 text-brand-sand/90">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-amber mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                                    <span className="font-medium text-sm md:text-base">Timelapse dinâmico e comparativo Antes × Depois.</span>
                                </li>
                                <li className="flex items-start gap-3 md:gap-4 text-brand-sand/90">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-amber mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                                    <span className="font-medium text-sm md:text-base">Vídeos institucionais, depoimentos e conteúdo para tráfego</span>
                                </li>
                                <li className="flex items-start gap-3 md:gap-4 text-brand-sand/90">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-amber mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                                    <span className="font-medium text-sm md:text-base">Valorização da arquitetura e destaque dos produtos.</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* Tech Card */}
                    <Reveal delayClass="delay-100">
                        <div className="glass-panel p-6 md:p-8 lg:p-12 h-full">
                            <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest text-brand-amber mb-4 md:mb-6 block opacity-80 transition-opacity">MIVLO TECH</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 md:mb-4">Desenvolvimento Digital</h3>
                            <p className="text-sm md:text-base text-brand-sand/80 mb-6 md:mb-8 font-light leading-relaxed">
                                Engenharia de software com código limpo, foco em conversão e performance.
                            </p>
                            <ul className="space-y-4 md:space-y-5">
                                <li className="flex items-start gap-3 md:gap-4 text-brand-sand/90">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-amber mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                                    <span className="font-medium text-sm md:text-base">Landing pages de alta conversão</span>
                                </li>
                                <li className="flex items-start gap-3 md:gap-4 text-brand-sand/90">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-amber mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                                    <span className="font-medium text-sm md:text-base">Sites institucionais responsivos e otimizados para SEO</span>
                                </li>
                                <li className="flex items-start gap-3 md:gap-4 text-brand-sand/90">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-amber mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                                    <span className="font-medium text-sm md:text-base">Sistemas web, dashboards e aplicações sob medida</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
