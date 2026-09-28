import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const Hero = () => {
    return (
        <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                    
                    {/* Hero Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-brand-border bg-white/5 backdrop-blur-md mb-6 md:mb-8 hover:bg-white/10 transition-colors">
                                <span className="text-[9px] md:text-[10px] font-semibold tracking-widest uppercase text-brand-sand/80">
                                    Mídia · Tecnologia · Presença
                                </span>
                            </div>
                            
                            <h1 className="fluid-h1 font-extrabold text-white mb-4 md:mb-6">
                                O que você constrói<br />
                                <span className="text-amber-gradient">merece ser visto</span>
                            </h1>
                            
                            <p className="text-base md:text-xl text-brand-sand/90 mb-8 md:mb-10 max-w-xl leading-relaxed font-light">
                                A MIVLO une a sensibilidade do olhar audiovisual com a precisão da engenharia de software. Produzimos vídeos, fotografias e conteúdos estratégicos — e desenvolvemos Landing Pages, sites institucionais e sistemas web de alta performance. Contrate apenas a solução que você precisa ou integre as duas.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 md:gap-4">
                                <a href="#contato" className="btn-amber w-full sm:w-auto text-sm md:text-base">
                                    Solicitar proposta
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </a>
                                <a href="#frentes" className="btn-ghost w-full sm:w-auto text-sm md:text-base">
                                    Ver as frentes
                                </a>
                            </div>

                            {/* Mini Footer Hero */}
                            <div className="mt-10 md:mt-12 flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] uppercase tracking-widest text-brand-sand/50 font-semibold">
                                <span>MIVLO Media</span>
                                <div className="w-1 h-1 rounded-full bg-brand-amber"></div>
                                <span>MIVLO Tech</span>
                                <div className="w-1 h-1 rounded-full bg-brand-amber"></div>
                                <span>Hub Modular</span>
                            </div>
                        </Reveal>
                    </div>

                    {/* Hero Graphic (Abstract Window) */}
                    <div className="w-full lg:w-1/2 z-10">
                        <Reveal delayClass="delay-200">
                            <div className="relative w-full aspect-square max-w-[500px] mx-auto animate-float">
                                {/* Viewfinder Brackets */}
                                <div className="viewfinder absolute inset-0 glass-panel p-8 flex flex-col">
                                    {/* Top markers */}
                                    <div className="w-full flex justify-between opacity-30 mb-8 items-center">
                                        <div className="w-12 h-[1px] bg-white/40"></div>
                                        <div className="w-3 h-3 rounded-full bg-brand-amber animate-pulse-glow"></div>
                                        <div className="w-12 h-[1px] bg-white/40"></div>
                                    </div>
                                    
                                    {/* Mockup Window / Abstract Element */}
                                    <div className="flex-grow border border-brand-border rounded-xl bg-brand-muted/40 backdrop-blur-sm overflow-hidden flex flex-col relative shadow-2xl">
                                        {/* Window Header */}
                                        <div className="h-10 border-b border-brand-border bg-black/20 flex items-center px-4 gap-2">
                                            <div className="w-3 h-3 rounded-full bg-brand-amber/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-brand-amber2/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                        </div>
                                        {/* Window Content */}
                                        <div className="p-8 flex flex-col gap-5 relative h-full justify-center">
                                            <div className="h-3 w-3/4 bg-white/10 rounded-full"></div>
                                            <div className="h-3 w-1/2 bg-brand-amber/40 rounded-full"></div>
                                            <div className="h-3 w-5/6 bg-white/10 rounded-full mt-4"></div>
                                            <div className="h-3 w-2/3 bg-brand-amber2/40 rounded-full"></div>
                                            
                                            {/* Recording Circle absolute bottom right */}
                                            <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full border border-brand-amber/30 flex items-center justify-center bg-black/10">
                                                <div className="w-5 h-5 rounded-full bg-brand-amber animate-pulse-glow"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom texts */}
                                    <div className="mt-8 flex justify-between items-end">
                                        <span className="text-[10px] font-mono tracking-widest text-brand-sand/50">REC · BUILD</span>
                                        <div className="text-right">
                                            <span className="text-[9px] uppercase tracking-widest text-brand-sand/40 block mb-1">MIVLO / DUAL HUB</span>
                                            <div className="flex items-center gap-3">
                                                <div className="text-right">
                                                    <span className="text-[10px] text-white/50 block leading-none mb-1 font-semibold">ARQUITETURA</span>
                                                    <span className="text-sm font-bold text-white tracking-tight">Independent Dual Hub</span>
                                                </div>
                                                <span className="text-2xl font-display font-extrabold text-white/20 ml-2">M+T</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
