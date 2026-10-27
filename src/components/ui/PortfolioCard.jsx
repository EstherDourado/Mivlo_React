import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioCard = ({ project }) => {
  if (!project) return null;

  // Iniciais do cliente formatadas para monograma editorial limpo
  const clientInitials = project.client
    ? project.client
        .split(' ')
        .filter((w) => w.length > 0 && !['DE', 'DA', 'DO', 'DOS', 'DAS', 'E', '&'].includes(w.toUpperCase()))
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase()
    : 'MV';

  // Categoria editorial vertical precisa baseada nos dados reais de cada projeto
  const getEditorialCategory = (proj) => {
    if (proj.type === 'web') {
      if (proj.tags?.includes('3D / Three.js') || proj.id === 'mw-cenografia') {
        return 'WEBSITE 3D';
      }
      if (proj.category?.toLowerCase().includes('cosméticos') || proj.category?.toLowerCase().includes('beleza')) {
        return 'CATÁLOGO & WEB';
      }
      if (proj.tags?.includes('Landing Page')) {
        return 'LANDING PAGE';
      }
      return 'WEBSITE';
    }

    if (proj.type === 'audiovisual') {
      if (proj.id === 'adere-expo' || proj.category?.toLowerCase().includes('estande')) {
        return 'FOTO DE ESTANDE';
      }
      if (proj.id === 'irialmag-expo' || proj.category?.toLowerCase().includes('corporativa')) {
        return 'FOTO CORPORATIVA';
      }
      if (proj.id === 'supriled-expo' || proj.category?.toLowerCase().includes('led') || proj.category?.toLowerCase().includes('iluminação')) {
        return 'FOTO DE LED';
      }
      return 'AUDIOVISUAL';
    }

    return (proj.subCategory || proj.category || 'PROJETO').toUpperCase();
  };

  const editorialCategory = getEditorialCategory(project);

  return (
    <Link
      to={`/portfolio/${project.id}`}
      className="group relative flex flex-col items-center select-none cursor-pointer w-full text-left"
      aria-label={`Ver projeto ${project.title}`}
    >
      {/* =========================================================================
          ESTRUTURA EDITORIAL: CÁPSULA VERTICAL + IDENTIFICAÇÃO LATERAL + LOGO CIRCULAR
          ========================================================================= */}
      <div className="relative w-full flex items-center justify-center">
        
        {/* B. IDENTIFICAÇÃO VERTICAL DO PROJETO COM PONTO E LINHA FINA */}
        <div 
          className="absolute left-0 sm:left-1 md:left-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 sm:gap-2 pointer-events-none z-10"
          aria-hidden="true"
        >
          {/* Ponto Circular Roxo */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#9557F5] shadow-[0_0_8px_rgba(149,87,245,0.8)] group-hover:scale-125 transition-transform duration-300" />

          {/* Linha Fina de Conexão */}
          <div className="w-[1px] h-6 sm:h-10 md:h-12 bg-gradient-to-b from-[#9557F5] via-white/20 to-transparent group-hover:via-[#9557F5]/70 transition-colors duration-300" />

          {/* Texto Rotacionado em 90 Graus */}
          <span className="[writing-mode:vertical-rl] rotate-180 text-[7px] sm:text-[9px] md:text-[10px] font-mono tracking-[0.25em] uppercase text-[#B9B2C5]/70 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
            {editorialCategory}
          </span>
        </div>

        {/* A. IMAGEM PRINCIPAL NA CÁPSULA VERTICAL (SILHUETA ALONGADA OVALADA) */}
        <div className="relative w-[78%] sm:w-[84%] max-w-[240px] aspect-[9/15] rounded-full overflow-hidden bg-[#100D18] border border-white/10 group-hover:border-[#9557F5]/70 shadow-xl group-hover:shadow-[0_0_35px_rgba(149,87,245,0.25)] transition-all duration-500">
          <img
            src={project.desktopImage || project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover object-top portfolio-monochrome group-hover:scale-105 transition-all duration-500 ease-out"
            loading="lazy"
          />

          {/* Gradiente sutil para criar profundidade interna na cápsula */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none opacity-50 group-hover:opacity-10 transition-opacity duration-500" />

          {/* Indicador discreto no canto superior (seta editorial de navegação no hover) */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
              <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
          </div>
        </div>

        {/* C. LOGO CIRCULAR SOBREPOSTA À BASE DA CÁPSULA */}
        <div className="absolute -bottom-5 sm:-bottom-6 md:-bottom-7 left-1/2 -translate-x-1/2 z-20">
          <div 
            className={`w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full shadow-2xl border-2 sm:border-[3px] border-[#08070D] flex items-center justify-center p-2 sm:p-2.5 group-hover:scale-110 group-hover:border-[#9557F5] group-hover:shadow-[0_8px_25px_rgba(149,87,245,0.4)] transition-all duration-300 ${
              project.id === 'donritter' ? 'bg-[#16110f]' : 'bg-white'
            }`}
          >
            {project.logo ? (
              <img
                src={project.logo}
                alt={`Logo ${project.client}`}
                className="w-full h-full object-contain filter-none"
              />
            ) : (
              <span className="font-display font-black text-[10px] sm:text-xs md:text-sm text-[#08070D] tracking-wider select-none">
                {clientInitials}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* RÓTULO TEXTUAL INFERIOR: TÍTULO DO PROJETO & CLIENTE */}
      <div className="mt-7 sm:mt-9 md:mt-10 text-center w-full px-2">
        <h3 className="font-display font-bold text-xs sm:text-sm md:text-base text-white group-hover:text-[#B99AFF] transition-colors duration-300 truncate leading-snug">
          {project.title.split('—')[0].trim()}
        </h3>
        <p className="text-[10px] sm:text-xs text-[#B9B2C5]/60 font-mono truncate mt-0.5 sm:mt-1">
          {project.client}
        </p>
      </div>
    </Link>
  );
};
