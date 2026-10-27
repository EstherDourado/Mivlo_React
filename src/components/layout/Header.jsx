import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Video, Code2 } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { asset, siteConfig } from '../../config/site';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    document.body.style.overflow = '';
    setIsMenuOpen(false);
  };

  const handleSectionNavigation = (e, hash) => {
    e.preventDefault();
    closeMenu();

    // Se estamos na Home (ou se a seção já existe na página atual no caso de #portfolio)
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
        window.history.replaceState(null, '', `/${hash}`);
        return;
      }
    }

    // Caso contrário, navega para a Home com o hash correspondente
    navigate(`/${hash}`);
  };

  // Bloqueia a rolagem do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Fecha o menu ao mudar de rota ou ao teclar Escape
  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash, location.key]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (path) => location.pathname === path;
  const whatsappUrl = siteConfig.getWhatsAppLink('contato');

  return (
    <>
      {/* =========================================================================
          NAVBAR FIXO EM TODAS AS PÁGINAS COM FUNDO ESCURO LÚCIDO PERSISTENTE
          ========================================================================= */}
      <header
        className="fixed top-0 left-0 right-0 w-full z-50 bg-[#08070D]/95 backdrop-blur-md border-b border-white/10 shadow-lg h-20 transition-all duration-300"
        id="navbar"
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          {/* Logo da Marca */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 z-50 group">
            <img
              src={asset('img/LOGO MAIS GROSSINHA 02.png')}
              alt="MIVLO — Audiovisual e Desenvolvimento Web"
              width="150"
              height="40"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <Link
              to="/"
              className={`transition-colors py-1 relative ${
                isActive('/') ? 'text-white font-semibold' : 'text-[#B9B2C5] hover:text-white'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6128C8] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/audiovisual"
              className={`flex items-center gap-1.5 transition-colors py-1 relative ${
                isActive('/audiovisual') ? 'text-[#9557F5] font-semibold' : 'text-[#B9B2C5] hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-[#9557F5]" />
              Audiovisual
              {isActive('/audiovisual') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6128C8] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/desenvolvimento"
              className={`flex items-center gap-1.5 transition-colors py-1 relative ${
                isActive('/desenvolvimento') ? 'text-[#B99AFF] font-semibold' : 'text-[#B9B2C5] hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-[#B99AFF]" />
              Desenvolvimento
              {isActive('/desenvolvimento') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#6128C8] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/#portfolio"
              onClick={(e) => handleSectionNavigation(e, '#portfolio')}
              className="text-[#B9B2C5] hover:text-white transition-colors py-1"
            >
              Portfólio
            </Link>

            <Link
              to="/#sobre"
              onClick={(e) => handleSectionNavigation(e, '#sobre')}
              className="text-[#B9B2C5] hover:text-white transition-colors py-1"
            >
              Sobre Esther
            </Link>

            {/* FAQ desativado temporariamente
            <Link
              to="/#faq"
              className="text-[#B9B2C5] hover:text-white transition-colors py-1"
            >
              FAQ
            </Link>
            */}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contato"
              className="btn-purple text-xs md:text-sm px-6 py-2.5 flex items-center gap-1.5 shadow-lg shadow-[#6128C8]/25"
            >
              Solicitar proposta
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Botão de Toggle do Menu Mobile (Hamburger / X) */}
          <button
            className="lg:hidden text-white z-50 p-2.5 relative focus:outline-none rounded-xl bg-white/5 border border-white/10 hover:border-[#9557F5]/40 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-[#9557F5]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* =========================================================================
          MENU OVERLAY MOBILE (IRMÃO DO HEADER: 100% DA VIEWPORT, SEM CORTES)
          ========================================================================= */}
      <div
        className={`fixed inset-0 z-40 bg-[#08070D]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-between pt-28 pb-8 px-6 overflow-y-auto ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto visible translate-y-0'
            : 'opacity-0 pointer-events-none invisible -translate-y-4'
        }`}
        style={{ minHeight: '100dvh', height: '100%' }}
        aria-hidden={!isMenuOpen}
      >
        {/* Links de Navegação Mobile */}
        <div className="flex flex-col items-center gap-6 w-full my-auto py-4">
          <Link
            to="/"
            onClick={closeMenu}
            className={`font-display text-2xl font-bold transition-colors ${
              isActive('/') && !location.hash ? 'text-[#9557F5]' : 'text-white hover:text-[#9557F5]'
            }`}
          >
            Home
          </Link>

          <Link
            to="/audiovisual"
            onClick={closeMenu}
            className={`font-display text-2xl font-bold flex items-center gap-2.5 transition-colors ${
              isActive('/audiovisual') ? 'text-[#9557F5]' : 'text-white hover:text-[#9557F5]'
            }`}
          >
            <Video className="w-5 h-5 text-[#9557F5]" />
            Audiovisual
          </Link>

          <Link
            to="/desenvolvimento"
            onClick={closeMenu}
            className={`font-display text-2xl font-bold flex items-center gap-2.5 transition-colors ${
              isActive('/desenvolvimento') ? 'text-[#B99AFF]' : 'text-white hover:text-[#9557F5]'
            }`}
          >
            <Code2 className="w-5 h-5 text-[#B99AFF]" />
            Desenvolvimento
          </Link>

          <Link
            to="/#portfolio"
            onClick={(e) => handleSectionNavigation(e, '#portfolio')}
            className={`font-display text-2xl font-bold transition-colors ${
              location.hash === '#portfolio' ? 'text-[#9557F5]' : 'text-white hover:text-[#9557F5]'
            }`}
          >
            Portfólio
          </Link>

          <Link
            to="/#sobre"
            onClick={(e) => handleSectionNavigation(e, '#sobre')}
            className={`font-display text-2xl font-bold transition-colors ${
              location.hash === '#sobre' ? 'text-[#9557F5]' : 'text-white hover:text-[#9557F5]'
            }`}
          >
            Sobre Esther
          </Link>

          {/* FAQ desativado temporariamente
          <Link
            to="/#faq"
            onClick={closeMenu}
            className="font-display text-xl font-semibold text-[#B9B2C5] hover:text-white transition-colors"
          >
            FAQ
          </Link>
          */}
        </div>

        {/* Rodapé do Menu Mobile: CTA & Contato */}
        <div className="w-full flex flex-col items-center gap-4 pt-6 border-t border-white/10 mt-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="btn-purple px-6 py-2.5 text-xs sm:text-sm w-auto min-w-[200px] max-w-xs flex items-center justify-center gap-2 text-center shadow-lg shadow-[#6128C8]/30 font-bold"
          >
            <span>Solicitar proposta</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center gap-2 text-[11px] font-mono text-[#B9B2C5]/70">
            <span>WhatsApp: +55 (11) 95399-9505</span>
            <span>•</span>
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>
    </>
  );
};
