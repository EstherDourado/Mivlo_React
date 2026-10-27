import React, { useState } from 'react';
import { siteConfig } from '../../config/site';
import { PortfolioCard } from './PortfolioCard';
import { Reveal } from './Reveal';

export const PortfolioGrid = ({
  initialFilter = "Todos",
  showHeader = true,
  title = "Portfólio em Destaque",
  subtitle = "Projetos digitais de alta performance e coberturas audiovisuais com rigor técnico e acabamento premium."
}) => {
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const filters = ["Todos", "Tecnologia", "Audiovisual"];

  const filteredProjects = siteConfig.portfolio.filter((project) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "Tecnologia" || activeFilter === "Web") {
      return (
        project.type === "web" ||
        project.category === "Tecnologia" ||
        project.subCategory === "Web" ||
        project.tags?.includes("Tecnologia") ||
        project.tags?.includes("Web")
      );
    }
    if (activeFilter === "Audiovisual" || activeFilter === "Fotografia") {
      return (
        project.type === "audiovisual" ||
        project.category === "Audiovisual" ||
        project.subCategory === "Fotografia" ||
        project.tags?.includes("Audiovisual") ||
        project.tags?.includes("Fotografia")
      );
    }
    return project.tags?.includes(activeFilter) || project.category === activeFilter;
  });

  return (
    <section id="portfolio" className="py-20 lg:py-28 relative bg-[#08070D] text-white overflow-hidden w-full max-w-full">
      {/* Transição suave do fundo claro anterior para este fundo escuro */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#F6F4FA] to-transparent opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {showHeader && (
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-[#9557F5] mb-2.5 inline-block px-3 py-1 rounded-full bg-[#6128C8]/15 border border-[#6128C8]/30">
                Entregas Reais & Portfólio
              </span>
              <h2 className="fluid-h2 font-extrabold text-white mb-3">
                {title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#B9B2C5] font-light leading-relaxed">
                {subtitle}
              </p>
            </div>
          </Reveal>
        )}

        {/* Barra de Filtros Discreta */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 sm:mb-14">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${isActive
                    ? 'bg-[#6128C8] text-white shadow-md shadow-[#6128C8]/40 font-semibold'
                    : 'bg-[#100D18] hover:bg-[#1B0A32] text-[#B9B2C5] hover:text-white border border-white/10'
                  }`}
              >
                {filter === "Tecnologia" ? "Web & Sites" : filter === "Audiovisual" ? "Audiovisual & Foto" : filter}
              </button>
            );
          })}
        </div>

        {/* Grade Editorial: 2 Colunas no Celular, 3 no Tablet, 4 no Desktop com Espaçamento Generoso */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-12 sm:gap-y-16 md:gap-y-20">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delayClass={`delay-${(index % 4) * 100}`}>
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-[#B9B2C5]/60 text-xs font-mono">
            Nenhum projeto encontrado para este filtro no momento.
          </div>
        )}
      </div>
    </section>
  );
};

