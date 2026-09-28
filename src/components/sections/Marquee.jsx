import React from 'react';
import { Sparkles } from 'lucide-react';

export const Marquee = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap flex items-center bg-brand-muted/30 border-y border-brand-border py-6 backdrop-blur-sm">
            <div className="animate-marquee flex items-center gap-12 font-display text-3xl md:text-5xl font-extrabold text-white/10 uppercase tracking-widest">
                <span>COBERTURA DE ESTANDES</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
                <span>SOCIAL MÍDIA</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
                <span>LANDINGPAGE</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
                <span>FOTOGRAFICA</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
                <span>SITES</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
                {/* Duplicate for seamless loop */}
                <span>COBERTURA DE ESTANDES</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
                <span>SOCIAL MÍDIA</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
                <span>LANDINGPAGE</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
                <span>FOTOGRAFICA</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
                <span>SITES</span>
                <Sparkles className="text-brand-amber w-8 h-8 md:w-10 md:h-10 opacity-60" />
            </div>
        </div>
    );
};
