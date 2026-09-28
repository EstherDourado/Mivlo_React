import React from 'react';
import { AccordionItem } from '../ui/Accordion';
import { Reveal } from '../ui/Reveal';

export const Objecoes = () => {
    return (
        <section id="objecoes" className="py-16 lg:py-24 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <Reveal>
                    <div className="mb-12 md:mb-16">
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-4 md:mb-6 block">Anulação de Objeções</span>
                        <h2 className="fluid-h2 font-extrabold text-white">
                            Já ouvimos. <span className="text-amber-gradient">Já respondemos.</span>
                        </h2>
                    </div>
                </Reveal>

                <div className="space-y-3 md:space-y-4">
                    <AccordionItem 
                        index="01" 
                        question='"Freelancer de vídeo atrasa e não entende linguagem corporativa."'
                        answer="Nosso modelo é de hub, operando com processos de agência e rigor de engenharia. Prazos não são sugestões, são contratos. Falamos a língua do seu negócio."
                    />
                    
                    <AccordionItem 
                        index="02" 
                        delayClass="delay-100"
                        question='"Agência de tecnologia cobra caro por site lento e engessado."'
                        answer="Desenvolvemos sob medida. Sem templates pesados de WordPress. Usamos tecnologias modernas (React, Next.js, Tailwind) focadas em conversão, SEO técnico e performance máxima no Google Lighthouse."
                    />
                    
                    <AccordionItem 
                        index="03" 
                        delayClass="delay-200"
                        question='"Quero registrar a montagem, mas tenho medo de atrapalhar o andamento."'
                        answer="Porque nosso olhar não está limitado ao registro final.\n\nA MIVLO acompanha projeto, construção, transformação e experiência, criando um acervo que documenta não apenas o espaço, mas também as pessoas, os processos e os momentos que fizeram aquele projeto acontecer."
                    />
                    
                    <AccordionItem 
                        index="04" 
                        delayClass="delay-300"
                        question='"Quero aproveitar o conteúdo também nas redes sociais."'
                        answer="Pensamos o material para continuar trabalhando depois da feira.\n\nAlém das fotografias, a cobertura pode gerar vídeos verticais, making of, timelapse, depoimentos e outros formatos que ajudam a manter o projeto vivo na comunicação da marca."
                    />
                </div>
            </div>
        </section>
    );
};
