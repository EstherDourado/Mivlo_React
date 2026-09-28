import React from 'react';
import { Reveal } from '../ui/Reveal';

export const Manifesto = () => {
    return (
        <section id="manifesto" className="py-16 lg:py-32 relative">
            <div className="container mx-auto px-6">
                <Reveal>
                    <div className="max-w-4xl">
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-4 md:mb-6 block">
                            Manifesto
                        </span>
                        <h2 className="fluid-h2 font-extrabold text-white mb-6 md:mb-10 leading-tight">
                            Transformamos momentos reais em{' '}
                            <span className="text-amber-gradient">ativos que valorizam marcas.</span>
                        </h2>
                    </div>
                </Reveal>
                
                <div className="space-y-4 text-sm md:text-base text-brand-sand/70 font-light">
                    <p>Meu nome é Esther Dourado Batista, sou Fotógrafa, Filmmaker e Criadora da MIVLO.</p>
                    <p>
                        Atuamos na produção audiovisual para empresas, eventos e estandes, unindo fotografia,<br />
                        vídeo e storytelling para registrar não apenas o resultado final, mas também os bastidores,<br />
                        processos, pessoas e detalhes que tornam cada projeto único.
                    </p>
                    <p>
                        Infelizmente, a grande maioria das empresas registra apenas a foto final do espaço pronto, <br />
                        perdendo todo o valor das horas de planejamento e execução que acontecem nos bastidores.
                    </p>
                    
                    <div className="pt-6 mt-6 border-t border-brand-border">
                        <h3 className="text-white font-display font-bold text-lg mb-4">Nosso Propósito:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#d946ef] mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                <span>Transformar a montagem e os bastidores em acervo narrativo.</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#d946ef] mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                <span>Fortalecer a presença da marca valorizando o acabamento e a estrutura.</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#d946ef] mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                <span>Gerar materiais que continuem conectando e vendendo após o encerramento da feira.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
