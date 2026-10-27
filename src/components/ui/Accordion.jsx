import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from './Reveal';

export const AccordionItem = ({ index, question, answer, delayClass = '' }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <Reveal delayClass={delayClass}>
            <div className={`accordion-item overflow-hidden group ${isActive ? 'active' : ''}`}>
                <button 
                    className="w-full px-5 py-5 md:px-8 md:py-7 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9557F5]" 
                    onClick={() => setIsActive(!isActive)}
                    aria-expanded={isActive}
                >
                    <div className="flex items-center gap-4 md:gap-6">
                        <span className="font-mono text-[11px] md:text-xs font-bold text-[#9557F5]">{index}</span>
                        <h3 className="text-base md:text-xl font-display font-bold text-white pr-4 group-hover:text-[#B99AFF] transition-colors">
                            {question}
                        </h3>
                    </div>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 accordion-icon bg-white/5">
                        <Plus className="w-4 h-4 md:w-5 md:h-5 text-[#9557F5]" />
                    </div>
                </button>
                <div className="accordion-content px-5 md:px-8 md:pl-[5.5rem]">
                    <p className="text-sm md:text-base text-[#B9B2C5] font-light leading-relaxed whitespace-pre-line">
                        {answer}
                    </p>
                </div>
            </div>
        </Reveal>
    );
};
