import React, { useState } from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { ProjectModal } from './ProjectModal';
import { Reveal } from './Reveal';

export const PortfolioGrid = ({ initialFilter = "Todos", showHeader = true, title = "Portfólio em Destaque", subtitle = "Conheça trabalhos reais executados nas frentes de Desenvolvimento e Audiovisual." }) => {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["Todos", "Tecnologia", "Audiovisual", "Fotografia", "Vídeo", "Web"];

  const filteredProjects = siteConfig.portfolio.filter((project) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "Tecnologia") return project.category === "Tecnologia";
    if (activeFilter === "Audiovisual") return project.category === "Audiovisual";
    if (activeFilter === "Fotografia") return project.subCategory === "Fotografia";
    if (activeFilter === "Vídeo") return project.subCategory === "Vídeo";
    if (activeFilter === "Web") return project.subCategory === "Web";
    return true;
  });

  return (
    <section id="portfolio" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-6">
        {showHeader && (
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-3 block">
                Resultados Reais
              </span>
              <h2 className="fluid-h2 font-extrabold text-white mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-lg text-brand-sand/80 font-light leading-relaxed">
                {subtitle}
              </p>
            </div>
          </Reveal>
        )}

        {/* Barra de Filtros */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10 md:mb-14">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-amber to-brand-amber2 text-white shadow-lg shadow-brand-amber/30 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-brand-sand/70 hover:text-white border border-white/5'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delayClass={`delay-${(index % 3) * 100}`}>
              <div 
                onClick={() => setSelectedProject(project)}
                className="glass-panel group cursor-pointer flex flex-col h-full overflow-hidden border border-brand-border/60 hover:border-brand-amber/50 transition-all duration-500 rounded-2xl bg-brand-muted/20"
              >
                {/* Imagem do Projeto com Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#180a30] via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  {/* Badges de Categoria & Especificidades */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-brand-amber border border-brand-amber/30">
                      {project.category}
                    </span>
                    {project.photoCount ? (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        {project.photoCount} Fotos do Estande
                      </span>
                    ) : project.githubUrl ? (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                        GitHub Repo
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 backdrop-blur-md text-white/80 border border-white/10">
                        {project.subCategory}
                      </span>
                    )}
                  </div>

                  {/* Botão Hover Preview */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <span className="px-4 py-2 rounded-full bg-brand-amber text-white font-medium text-xs flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      Ver Prévia
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 md:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 group-hover:text-brand-amber transition-colors flex items-start justify-between gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-brand-sand/50 group-hover:text-brand-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
                    </h3>
                    <p className="text-xs md:text-sm text-brand-sand/70 font-light leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Badges & Cliente */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techs.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-brand-sand/60">
                          {t}
                        </span>
                      ))}
                      {project.techs.length > 2 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-brand-sand/40">
                          +{project.techs.length - 2}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-brand-sand/40 uppercase tracking-wider font-semibold">
                      {project.client}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Modal de Detalhes */}
        {selectedProject && (
          <ProjectModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};
