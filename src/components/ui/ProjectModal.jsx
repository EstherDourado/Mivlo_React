import React, { useEffect, useState } from 'react';
import { X, Globe, CheckCircle2, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../config/site';

export const ProjectModal = ({ project, onClose }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isWeb = project.type === 'web';
  const whatsappUrl = siteConfig.getWhatsAppLink(isWeb ? 'desenvolvimento' : 'audiovisual');

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#180a30] border border-brand-border/80 rounded-3xl shadow-2xl text-left flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do Modal */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#180a30]/95 backdrop-blur-md border-b border-brand-border/60">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-[11px] font-mono font-bold uppercase rounded-full bg-brand-amber/20 text-brand-amber border border-brand-amber/30">
              {project.category}
            </span>
            <span className="text-xs text-brand-sand/60 hidden sm:inline">
              {project.client} • {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-brand-sand/70 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Fechar prévia"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Título & Resumo */}
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-brand-sand/80 text-sm md:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* PREVIEW VISUAL: Mockup de Navegador para Web OU Frame de Cinema para Audiovisual */}
          {isWeb ? (
            /* Mockup de Navegador */
            <div className="rounded-2xl border border-brand-border/80 overflow-hidden bg-[#0d041c] shadow-2xl">
              {/* Barra do Navegador */}
              <div className="h-10 bg-[#14062a] border-b border-brand-border/60 flex items-center px-4 gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                {/* Fake URL Bar */}
                <div className="flex-1 max-w-md mx-auto bg-black/40 border border-white/5 rounded-lg px-3 py-1 flex items-center gap-2 text-xs text-brand-sand/60 font-mono">
                  <Globe className="w-3.5 h-3.5 text-brand-amber" />
                  <span className="truncate">https://{project.id}.mivlo.com.br</span>
                </div>
              </div>

              {/* Conteúdo / Screenshot do Projeto */}
              <div className="relative aspect-video max-h-[380px] w-full overflow-hidden bg-black/40">
                <img
                  src={project.gallery ? project.gallery[activeMediaIndex] : project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Miniaturas de Telas se houver galeria */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="p-3 bg-[#120524] border-t border-brand-border/40 flex items-center gap-2 overflow-x-auto">
                  <span className="text-[11px] font-mono text-brand-sand/50 mr-2 uppercase">Vistas:</span>
                  {project.gallery.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveMediaIndex(i)}
                      className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeMediaIndex === i ? 'border-brand-amber scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Tela ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Visualizador Audiovisual / Frame de Cinema */
            <div className="rounded-2xl border border-brand-border/80 overflow-hidden bg-[#0d041c] shadow-2xl relative">
              <div className="relative aspect-video max-h-[400px] w-full overflow-hidden bg-black">
                {/* Viewfinder brackets nos cantos */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-amber/80 z-10 pointer-events-none"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-amber/80 z-10 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-amber/80 z-10 pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-amber/80 z-10 pointer-events-none"></div>

                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/90">
                    MIVLO CINEMA · 4K UHD
                  </span>
                </div>

                <img
                  src={project.gallery ? project.gallery[activeMediaIndex] : project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Galeria de Fotos / Takes */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="p-3 bg-[#120524] border-t border-brand-border/40 flex items-center gap-2 overflow-x-auto">
                  <span className="text-[11px] font-mono text-brand-sand/50 mr-2 uppercase">Galeria:</span>
                  {project.gallery.map((imgUrl, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveMediaIndex(i)}
                      className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeMediaIndex === i ? 'border-brand-amber scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Take ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Descrição Detalhada */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-amber">
                Sobre a Entrega
              </h4>
              <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
                {project.description}
              </p>

              {/* Tecnologias / Equipamentos Utilizados */}
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-brand-sand/60 mb-2">
                  {isWeb ? 'Tecnologias & Ferramentas' : 'Equipamento & Pós-Produção'}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Resultados / Métricas */}
            <div className="glass-panel p-5 rounded-2xl bg-brand-muted/30 border border-brand-border/60 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Impacto & Entregáveis
                </h4>
                <ul className="space-y-2.5 text-xs text-brand-sand/80">
                  {project.metrics.map((metric, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-amber mt-1.5 flex-shrink-0"></span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA dentro do modal */}
              <div className="pt-5 mt-5 border-t border-white/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber w-full text-xs py-2.5 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Quero um projeto assim
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
