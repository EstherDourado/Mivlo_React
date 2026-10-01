import React, { useEffect, useState } from 'react';
import { X, Globe, CheckCircle2, MessageSquare, ExternalLink, Images } from 'lucide-react';
import { siteConfig } from '../../config/site';

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

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
  }, [project, onClose]);

  if (!project) return null;

  const isWeb = project.type === 'web';
  const whatsappUrl = siteConfig.getWhatsAppLink(isWeb ? 'desenvolvimento' : 'audiovisual');

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
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
            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white">
                {project.title}
              </h3>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-semibold transition-colors border border-white/15"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Ver Código no GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              )}
            </div>
            <p className="text-brand-sand/80 text-sm md:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* PREVIEW VISUAL: Mockup de Navegador para Web OU Frame de Cinema para Audiovisual */}
          {isWeb ? (
            /* Mockup de Navegador para Projetos Web */
            <div className="rounded-2xl border border-brand-border/80 overflow-hidden bg-[#0d041c] shadow-2xl">
              {/* Barra do Navegador */}
              <div className="h-10 bg-[#14062a] border-b border-brand-border/60 flex items-center px-4 gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                {/* Fake / Real URL Bar */}
                <a 
                  href={project.githubUrl || "#"} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 max-w-md mx-auto bg-black/40 hover:bg-black/60 transition-colors border border-white/5 rounded-lg px-3 py-1 flex items-center justify-between text-xs text-brand-sand/70 font-mono"
                >
                  <div className="flex items-center gap-2 truncate">
                    <Globe className="w-3.5 h-3.5 text-brand-amber flex-shrink-0" />
                    <span className="truncate">{project.githubUrl ? project.githubUrl.replace('https://', '') : `https://${project.id}.mivlo.com.br`}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60 ml-2 flex-shrink-0" />
                </a>
              </div>

              {/* Imagem / Banner do Projeto Web */}
              <div className="relative aspect-video max-h-[400px] w-full overflow-hidden bg-black/40 flex items-center justify-center p-4">
                <img
                  src={project.gallery ? project.gallery[activeMediaIndex] : project.coverImage}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-700 hover:scale-105"
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
                      className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 bg-black/60 ${
                        activeMediaIndex === i ? 'border-brand-amber scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Tela ${i + 1}`} className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Visualizador Audiovisual / Frame de Cinema com Foto Ativa */
            <div className="rounded-2xl border border-brand-border/80 overflow-hidden bg-[#0d041c] shadow-2xl relative">
              <div className="relative aspect-video max-h-[440px] w-full overflow-hidden bg-black flex items-center justify-center">
                {/* Viewfinder brackets nos cantos */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-amber/80 z-10 pointer-events-none"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-amber/80 z-10 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-amber/80 z-10 pointer-events-none"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-amber/80 z-10 pointer-events-none"></div>

                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/90">
                    EVENTO: {project.eventFolder || project.title.split(' ')[0]} • FOTO {activeMediaIndex + 1} DE {project.gallery?.length || 6}
                  </span>
                </div>

                <img
                  src={project.gallery ? project.gallery[activeMediaIndex] : project.coverImage}
                  alt={`${project.title} - Foto ${activeMediaIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Grade de 6 Miniaturas do Evento */}
              {project.gallery && (
                <div className="p-4 bg-[#120524] border-t border-brand-border/40">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-brand-amber flex items-center gap-1.5 uppercase">
                      <Images className="w-3.5 h-3.5" />
                      Galeria do Evento (6 Fotografias)
                    </span>
                    <span className="text-[11px] text-brand-sand/50 font-mono">
                      Clique em qualquer foto para ampliar
                    </span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {project.gallery.map((imgUrl, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveMediaIndex(i)}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                          activeMediaIndex === i
                            ? 'border-brand-amber scale-105 shadow-lg shadow-brand-amber/40 ring-2 ring-brand-amber/20'
                            : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                        }`}
                        aria-label={`Ver foto ${i + 1}`}
                      >
                        <img src={imgUrl} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                        <span className="absolute bottom-1 right-1 text-[9px] font-mono bg-black/70 text-white px-1 rounded">
                          #{i + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Descrição Detalhada & Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-amber">
                Sobre o Projeto
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
                  Destaques & Entregáveis
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

              {/* Botões de Ação dentro do Modal */}
              <div className="pt-5 mt-5 border-t border-white/10 space-y-2.5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-white/10"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Acessar Repositório
                  </a>
                )}
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
