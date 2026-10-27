import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Globe,
  MessageCircle,
  ExternalLink,
  Smartphone,
  Monitor,
  Columns,
  Images,
  Maximize2,
  X
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { projectsData } from '../data/projectsData';
import { Reveal } from '../components/ui/Reveal';
import { PortfolioGrid } from '../components/ui/PortfolioGrid';
import { Contato } from '../components/sections/Contato';
import { SEO } from '../components/seo/SEO';
import { getProjectSchema, getBreadcrumbSchema } from '../utils/schema';

export const ProjectDetail = () => {
  const { id } = useParams();
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [viewMode, setViewMode] = useState('both'); // 'both' | 'desktop' | 'mobile'

  // Encontrar o projeto pelo ID
  const project = projectsData.find((p) => p.id === id);

  // Resetar estados visuais ao trocar de projeto
  useEffect(() => {
    setActiveMediaIndex(0);
    setFullscreenImage(null);
    setViewMode('both');
  }, [id]);

  // Atualizar título da página para SEO
  useEffect(() => {
    if (project) {
      document.title = `${project.title} — MIVLO Portfólio`;
    } else {
      document.title = 'Projeto não encontrado — MIVLO';
    }
    return () => {
      document.title = 'MIVLO — Sua marca em tela. Sua marca em código.';
    };
  }, [project]);

  if (!project) {
    return (
      <div className="pt-36 pb-24 min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-light-purple-grid text-[#08070D]">
        <h2 className="fluid-h2 font-extrabold text-[#08070D] mb-4">
          Projeto não encontrado
        </h2>
        <p className="text-[#393340] max-w-md mb-8 font-light">
          O projeto que você está procurando pode ter sido movido ou o link está incorreto.
        </p>
        <Link to="/#portfolio" className="btn-purple px-8 py-3 text-sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Portfólio
        </Link>
      </div>
    );
  }

  const isWeb = project.type === 'web';
  const whatsappUrl = siteConfig.getWhatsAppLink(isWeb ? 'desenvolvimento' : 'audiovisual');

  const clientInitials = project.client
    ? project.client
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase()
    : 'MV';

  const projectSchemas = [
    getProjectSchema(project),
    getBreadcrumbSchema([
      { name: 'Início', url: '/' },
      { name: 'Portfólio', url: '/#portfolio' },
      { name: project.title, url: `/portfolio/${project.id}` }
    ])
  ];

  const desktopSrc = project.desktopImage || project.coverImage;
  const mobileSrc = project.mobileImage || project.desktopImage || project.coverImage;

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <SEO
        title={`${project.title} | Case MIVLO`}
        description={`${project.tagline} Conheça a apresentação visual deste projeto entregue pela MIVLO.`}
        canonical={`${siteConfig.siteUrl}/portfolio/${project.id}`}
        ogType="article"
        ogImage={project.coverImage}
        schema={projectSchemas}
      />

      {/* ================================================================
          SEÇÃO CLARA COM TEXTURA DE GRADE ROXA CLARINHA NO FUNDO
          ================================================================ */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 bg-light-purple-grid text-[#08070D] relative overflow-hidden border-b border-[#E5E0EB]">
        {/* Luzes difusas suaves mantendo a paleta roxa */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#9557F5]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 text-left">
          {/* NAVEGAÇÃO / BREADCRUMB */}
          <div className="mb-6 sm:mb-8">
            <Link
              to={isWeb ? '/desenvolvimento#portfolio' : '/audiovisual#portfolio'}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-mono font-medium text-[#393340] hover:text-[#6128C8] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#6128C8]" />
              <span>Voltar ao Portfólio</span>
            </Link>
          </div>

          {/* A. CABEÇALHO CLEAN DO PROJETO */}
          <Reveal>
            <header className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-[#E5E0EB]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                {/* Identidade & Títulos */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                  {/* Logo do Cliente */}
                  <div
                    className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 flex items-center justify-center shadow-lg border border-[#E5E0EB] flex-shrink-0 ${
                      project.id === 'donritter' ? 'bg-[#16110f]' : 'bg-white'
                    }`}
                  >
                    {project.logo ? (
                      <img
                        src={project.logo}
                        alt={`Logo oficial de ${project.client}`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-[#6128C8]/10 flex items-center justify-center text-[#6128C8] font-display font-extrabold text-base sm:text-xl tracking-widest border border-[#6128C8]/25">
                        {clientInitials}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-1.5 flex-wrap">
                      <span className="px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-[#6128C8]/10 text-[#6128C8] border border-[#6128C8]/25">
                        {project.category}
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#393340]/70 font-mono">
                        {project.client} • {project.year}
                      </span>
                    </div>

                    <h1 className="text-xl sm:text-3xl md:text-4xl font-display font-extrabold text-[#08070D] leading-tight">
                      {project.title.split('—')[0].trim()}
                    </h1>

                    <p className="text-xs sm:text-sm md:text-base text-[#393340] font-normal mt-1.5 max-w-2xl leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Botões de Ação Diretos */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-purple text-xs sm:text-sm px-5 sm:px-6 py-2.5 flex items-center gap-2 shadow-lg shadow-[#6128C8]/25"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Visitar Site Online</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  )}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-light text-xs sm:text-sm px-5 py-2.5 flex items-center gap-2 bg-white/80 backdrop-blur-sm border-[#E5E0EB] hover:border-[#6128C8]"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-500" />
                    <span>Solicitar Orçamento</span>
                  </a>
                </div>
              </div>
            </header>
          </Reveal>

          {/* B. VISUALIZAÇÃO CLEAN DO SITE (COMPUTADOR & MOBILE) OU GALERIA AUDIOVISUAL */}
          <Reveal>
            <div>
              {isWeb ? (
                <>
                  {/* Barra Seletora de Dispositivo (Computador / Mobile / Ambos) */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 bg-white/90 backdrop-blur-md p-2.5 sm:px-5 sm:py-3 rounded-2xl border border-[#E5E0EB] shadow-sm w-full max-w-full overflow-hidden">
                    <div className="grid grid-cols-3 sm:inline-flex items-center gap-1 sm:gap-1.5 bg-[#F6F4FA] p-1 rounded-xl border border-[#E5E0EB] w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => setViewMode('both')}
                        className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all min-w-0 whitespace-nowrap ${
                          viewMode === 'both'
                            ? 'bg-[#6128C8] text-white shadow-sm'
                            : 'text-[#393340] hover:text-[#08070D]'
                        }`}
                      >
                        <Columns className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="sm:hidden truncate">Ambos</span>
                        <span className="hidden sm:inline">Computador + Mobile</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setViewMode('desktop')}
                        className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all min-w-0 whitespace-nowrap ${
                          viewMode === 'desktop'
                            ? 'bg-[#6128C8] text-white shadow-sm'
                            : 'text-[#393340] hover:text-[#08070D]'
                        }`}
                      >
                        <Monitor className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">Computador</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setViewMode('mobile')}
                        className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all min-w-0 whitespace-nowrap ${
                          viewMode === 'mobile'
                            ? 'bg-[#6128C8] text-white shadow-sm'
                            : 'text-[#393340] hover:text-[#08070D]'
                        }`}
                      >
                        <Smartphone className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">Mobile</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end gap-4 text-xs text-[#393340]/80 font-mono w-full sm:w-auto">
                      <span className="hidden md:inline-block">
                        Role dentro das telas para navegar pelo layout completo
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setFullscreenImage(viewMode === 'mobile' ? mobileSrc : desktopSrc)
                        }
                        className="text-[#6128C8] hover:text-[#9557F5] font-semibold flex items-center gap-1.5 transition-colors py-0.5"
                      >
                        <Maximize2 className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Tela Cheia</span>
                      </button>
                    </div>
                  </div>

                  {/* CONTAINER DOS DISPOSITIVOS */}
                  <div
                    className={`grid gap-8 items-start ${
                      viewMode === 'both'
                        ? 'grid-cols-1 lg:grid-cols-12'
                        : 'grid-cols-1'
                    }`}
                  >
                    {/* MOCKUP COMPUTADOR (DESKTOP) */}
                    {(viewMode === 'both' || viewMode === 'desktop') && (
                      <div
                        className={
                          viewMode === 'both'
                            ? 'lg:col-span-8 w-full min-w-0'
                            : 'w-full max-w-5xl mx-auto min-w-0'
                        }
                      >
                        <div className="mb-2.5 flex items-center justify-between gap-2 px-1">
                          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#6128C8] flex items-center gap-1.5 min-w-0">
                            <Monitor className="w-3.5 h-3.5 flex-shrink-0" />
                            <span className="truncate">Versão Computador</span>
                          </span>
                          <span className="text-[10px] sm:text-[11px] font-mono text-[#393340]/60 whitespace-nowrap flex-shrink-0">
                            Role a imagem ↕
                          </span>
                        </div>

                        <div className="rounded-2xl sm:rounded-3xl border border-[#E5E0EB] overflow-hidden bg-white shadow-2xl shadow-[#6128C8]/10 w-full max-w-full">
                          {/* Barra Superior do Navegador */}
                          <div className="h-10 sm:h-11 bg-[#F6F4FA] border-b border-[#E5E0EB] flex items-center px-3 sm:px-4 gap-2 sm:gap-3 min-w-0">
                            <div className="flex items-center gap-1.5 flex-shrink-0">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>

                            <div className="flex-1 min-w-0 max-w-md mx-auto bg-white border border-[#E5E0EB] rounded-lg px-2.5 sm:px-3 py-1 flex items-center justify-between text-[10px] sm:text-[11px] text-[#393340] font-mono shadow-inner">
                              <div className="flex items-center gap-1.5 min-w-0 truncate">
                                <span className="text-[#6128C8] font-bold flex-shrink-0">🔒</span>
                                <span className="truncate">
                                  {project.liveUrl
                                    ? project.liveUrl.replace('https://', '').replace(/\/$/, '')
                                    : `${project.id}.mivlo.com.br`}
                                </span>
                              </div>
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-[#6128C8] hover:text-[#9557F5] transition-colors ml-1.5 flex-shrink-0"
                                  title="Abrir site"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>

                            <button
                              type="button"
                              onClick={() => setFullscreenImage(desktopSrc)}
                              className="text-[#393340]/60 hover:text-[#6128C8] transition-colors flex-shrink-0"
                              title="Ampliar versão computador"
                            >
                              <Maximize2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Viewport Desktop com Rolagem */}
                          <div className="relative w-full max-h-[540px] sm:max-h-[600px] overflow-y-auto preview-scroll-light bg-[#08070D]">
                            <img
                              src={desktopSrc}
                              alt={`Versão computador de ${project.title}`}
                              className="w-full h-auto object-contain cursor-zoom-in block"
                              onClick={() => setFullscreenImage(desktopSrc)}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* MOCKUP CELULAR (MOBILE) */}
                    {(viewMode === 'both' || viewMode === 'mobile') && (
                      <div
                        className={
                          viewMode === 'both'
                            ? 'lg:col-span-4 w-full flex flex-col items-center'
                            : 'w-full flex flex-col items-center'
                        }
                      >
                        <div className="mb-2.5 flex items-center justify-between w-full max-w-[300px] px-1">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6128C8] flex items-center gap-1.5">
                            <Smartphone className="w-3.5 h-3.5" />
                            Versão Mobile
                          </span>
                          <span className="text-[11px] font-mono text-[#393340]/60">
                            Role a tela ↕
                          </span>
                        </div>

                        <div className="mockup-smartphone w-full max-w-[300px] shadow-2xl shadow-[#6128C8]/20">
                          {/* Dynamic Island */}
                          <div className="w-24 h-5 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-2.5 gap-1.5 shadow-inner">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e]" />
                            <div className="w-2 h-2 rounded-full bg-[#9557F5]/50" />
                          </div>

                          {/* Tela do Smartphone com Rolagem Interna */}
                          <div className="mockup-smartphone-screen h-[520px] sm:h-[555px] overflow-y-auto preview-scroll relative">
                            <img
                              src={mobileSrc}
                              alt={`Versão mobile de ${project.title}`}
                              className="w-full h-auto object-contain cursor-zoom-in block"
                              onClick={() => setFullscreenImage(mobileSrc)}
                            />
                          </div>

                          {/* Barra Home */}
                          <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mt-2.5 mb-1" />
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                /* APRESENTAÇÃO AUDIOVISUAL CLEAN EM FUNDO CLARO */
                <div className="rounded-3xl border border-[#E5E0EB] overflow-hidden bg-white shadow-2xl shadow-[#6128C8]/10">
                  <div className="relative aspect-video max-h-[580px] w-full overflow-hidden bg-[#08070D] flex items-center justify-center">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#9557F5] animate-pulse" />
                      <span className="text-[11px] font-mono uppercase tracking-widest text-white/90">
                        {project.client} • FOTO {activeMediaIndex + 1} DE{' '}
                        {project.gallery?.length || 1}
                      </span>
                    </div>

                    <img
                      src={
                        project.gallery
                          ? project.gallery[activeMediaIndex]
                          : project.coverImage
                      }
                      alt={`${project.title} - Foto ${activeMediaIndex + 1}`}
                      className="w-full h-full object-cover cursor-zoom-in"
                      onClick={() =>
                        setFullscreenImage(
                          project.gallery
                            ? project.gallery[activeMediaIndex]
                            : project.coverImage
                        )
                      }
                    />
                  </div>

                  {project.gallery && (
                    <div className="p-4 sm:p-6 bg-[#F6F4FA] border-t border-[#E5E0EB]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-[#6128C8] flex items-center gap-1.5 uppercase">
                          <Images className="w-3.5 h-3.5" />
                          Galeria do Projeto ({project.gallery.length} Fotografias)
                        </span>
                        <span className="text-[11px] text-[#393340]/70 font-mono">
                          Clique em qualquer foto para alternar
                        </span>
                      </div>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                        {project.gallery.map((imgUrl, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveMediaIndex(i)}
                            className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                              activeMediaIndex === i
                                ? 'border-[#6128C8] scale-105 shadow-md shadow-[#6128C8]/30'
                                : 'border-transparent opacity-70 hover:opacity-100'
                            }`}
                            aria-label={`Ver foto ${i + 1}`}
                          >
                            <img
                              src={imgUrl}
                              alt={`${project.title} — Foto ${i + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          MESMA SEÇÃO DE PORTFÓLIO NO FINAL DE CADA PÁGINA DE PORTFÓLIO
          ================================================================ */}
      <PortfolioGrid
        initialFilter="Todos"
        showHeader={true}
        title="Portfólio & Entregas Reais"
        subtitle="Explore outros projetos desenvolvidos em Engenharia Web e Produção Audiovisual."
      />

      {/* ================================================================
          CTA DE CONTATO PADRONIZADO EM TODAS AS TELAS
          ================================================================ */}
      <Contato type={isWeb ? 'desenvolvimento' : 'audiovisual'} />

      {/* ================================================================
          MODAL FULLSCREEN DE IMAGEM / PREVIEW AMPLIADO
          ================================================================ */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            type="button"
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Fechar tela cheia"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] overflow-auto rounded-2xl border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={fullscreenImage}
              alt="Visualização ampliada"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
