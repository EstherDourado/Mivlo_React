import React from 'react';
import { AlignLeft, Video, Star, Calendar } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const Metodo = () => {
    return (
        <section id="metodo" className="py-16 lg:py-24 relative">
            <div className="container mx-auto px-6">
                <Reveal>
                    <div className="mb-12 md:mb-16 max-w-3xl">
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-4 md:mb-6 block">Método</span>
                        <h2 className="fluid-h2 font-extrabold text-white mb-4 md:mb-6">
                            Do projeto à experiência.<br className="hidden md:block" />
                            <span className="text-amber-gradient">Cada etapa conta uma história.</span>
                        </h2>
                        <p className="text-base md:text-lg text-brand-sand/80 font-light">
                            Não registramos apenas o estande pronto. Acompanhamos sua transformação, capturando os detalhes, pessoas, processos e experiências que fazem parte de cada projeto.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {/* Step 1 */}
                    <Reveal>
                        <div className="glass-panel p-6 md:p-8 group h-full">
                            <div className="flex justify-between items-start mb-6 md:mb-8">
                                <span className="font-mono text-[10px] md:text-xs font-bold text-brand-amber">01</span>
                                <AlignLeft className="text-brand-amber w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover:scale-110 transition-transform" />
                            </div>
                            <h4 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-3 group-hover:text-brand-amber transition-colors">Planejamento objetivo</h4>
                            <p className="text-xs md:text-sm text-brand-sand/70 leading-relaxed font-light">Entendemos o projeto, seus principais momentos e o que precisa ser valorizado. Um alinhamento direto para garantir que cada registro tenha propósito.</p>
                        </div>
                    </Reveal>
                    
                    {/* Step 2 */}
                    <Reveal delayClass="delay-100">
                        <div className="glass-panel p-6 md:p-8 group h-full">
                            <div className="flex justify-between items-start mb-6 md:mb-8">
                                <span className="font-mono text-[10px] md:text-xs font-bold text-brand-amber">02</span>
                                <Video className="text-brand-amber w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover:scale-110 transition-transform" />
                            </div>
                            <h4 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-3 group-hover:text-brand-amber transition-colors">Captação estratégica</h4>
                            <p className="text-xs md:text-sm text-brand-sand/70 leading-relaxed font-light">Registramos a evolução do estande, dos bastidores da montagem à experiência durante o evento, explorando diferentes ângulos, detalhes e momentos.</p>
                        </div>
                    </Reveal>
                    
                    {/* Step 3 */}
                    <Reveal delayClass="delay-200">
                        <div className="glass-panel p-6 md:p-8 group h-full">
                            <div className="flex justify-between items-start mb-6 md:mb-8">
                                <span className="font-mono text-[10px] md:text-xs font-bold text-brand-amber">03</span>
                                <Star className="text-brand-amber w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover:scale-110 transition-transform" />
                            </div>
                            <h4 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-3 group-hover:text-brand-amber transition-colors">Conteúdo que comunica</h4>
                            <p className="text-xs md:text-sm text-brand-sand/70 leading-relaxed font-light">Fotografia, vídeo, timelapse, making of e depoimentos são transformados em materiais pensados para valorizar o projeto e fortalecer a comunicação da marca.</p>
                        </div>
                    </Reveal>
                    
                    {/* Step 4 */}
                    <Reveal delayClass="delay-300">
                        <div className="glass-panel p-6 md:p-8 group h-full">
                            <div className="flex justify-between items-start mb-6 md:mb-8">
                                <span className="font-mono text-[10px] md:text-xs font-bold text-brand-amber">04</span>
                                <Calendar className="text-brand-amber w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover:scale-110 transition-transform" />
                            </div>
                            <h4 className="text-lg md:text-xl font-display font-bold text-white mb-2 md:mb-3 group-hover:text-brand-amber transition-colors">Acervo pronto para usar</h4>
                            <p className="text-xs md:text-sm text-brand-sand/70 leading-relaxed font-light">Entregamos os materiais tratados, editados e organizados para que o projeto continue sendo utilizado em redes sociais, portfólio, comunicação e vendas mesmo após o encerramento do evento.</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
