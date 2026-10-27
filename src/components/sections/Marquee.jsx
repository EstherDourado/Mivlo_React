import React from 'react';
import { Sparkles } from 'lucide-react';

const MARQUEE_ITEMS = [
    "COBERTURA DE EVENTOS",
    "SOCIAL MÍDIA",
    "VIDEOMAKER",
    "FOTOGRAFIA",
    "STORYMAKER",
    "SITES",
    "LANDINGPAGES",
    "SISTEMAS"
];

export const Marquee = () => {
    return (
        <div 
            className="overflow-hidden whitespace-nowrap flex items-center bg-[#08070D] border-y border-white/5 py-3 sm:py-3.5 relative z-10 w-full max-w-full"
            role="region"
            aria-label="Especialidades em destaque"
        >
            {/* Gradientes sutis nas bordas */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#08070D] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#08070D] to-transparent z-10" />

            {/* Faixas contínuas sincronizadas para rotação infinita perfeita */}
            {[0, 1, 2, 3].map((trackIdx) => (
                <div 
                    key={trackIdx} 
                    className="flex shrink-0 items-center gap-6 sm:gap-10 font-display text-xs sm:text-sm md:text-base font-semibold text-[#F6F4FA]/50 uppercase tracking-widest select-none animate-marquee pr-6 sm:pr-10"
                    aria-hidden={trackIdx > 0 ? "true" : undefined}
                >
                    {MARQUEE_ITEMS.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <span>{item}</span>
                            <Sparkles className="text-[#9557F5] w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-70 shrink-0" />
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </div>
    );
};

