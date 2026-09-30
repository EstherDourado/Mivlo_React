import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Video, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel bg-[#15022e]/85 backdrop-blur-xl border-b border-brand-border/80 shadow-xl' : 'border-b border-transparent bg-transparent'
      }`}
      id="navbar"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2 z-50 group">
          <img
            src={`${import.meta.env.BASE_URL}img/LOGO MAIS GROSSINHA 02.png`}
            alt="MIVLO Logo"
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors py-1 relative ${
              isActive('/') ? 'text-white font-semibold' : 'text-brand-sand/75 hover:text-white'
            }`}
          >
            Home
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-amber rounded-full"></span>
            )}
          </Link>

          <Link
            to="/audiovisual"
            className={`flex items-center gap-1.5 transition-colors py-1 relative ${
              isActive('/audiovisual') ? 'text-brand-amber font-semibold' : 'text-brand-sand/75 hover:text-white'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-brand-amber" />
            Audiovisual
            {isActive('/audiovisual') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-amber rounded-full"></span>
            )}
          </Link>

          <Link
            to="/desenvolvimento"
            className={`flex items-center gap-1.5 transition-colors py-1 relative ${
              isActive('/desenvolvimento') ? 'text-blue-400 font-semibold' : 'text-brand-sand/75 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            Desenvolvimento
            {isActive('/desenvolvimento') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"></span>
            )}
          </Link>

          <Link
            to="/#portfolio"
            className="text-brand-sand/75 hover:text-white transition-colors py-1"
          >
            Portfólio
          </Link>

          <Link
            to="/#sobre"
            className="text-brand-sand/75 hover:text-white transition-colors py-1"
          >
            Sobre Esther
          </Link>

          <Link
            to="/#faq"
            className="text-brand-sand/75 hover:text-white transition-colors py-1"
          >
            FAQ
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contato"
            className="btn-amber text-xs md:text-sm px-6 py-2.5 flex items-center gap-1.5 shadow-lg shadow-brand-amber/20"
          >
            Solicitar proposta
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white z-50 p-2 relative focus:outline-none rounded-lg bg-white/5 border border-white/10"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6 text-brand-amber" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay Menu */}
      <div
        className={`fixed inset-0 bg-[#160230]/98 backdrop-blur-2xl z-40 transform transition-transform duration-300 flex flex-col justify-start pt-28 pb-10 px-8 items-center gap-5 overflow-y-auto lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link
          to="/"
          onClick={closeMenu}
          className={`font-display text-xl font-bold transition-colors ${
            isActive('/') ? 'text-brand-amber' : 'text-white hover:text-brand-amber'
          }`}
        >
          Home
        </Link>

        <Link
          to="/audiovisual"
          onClick={closeMenu}
          className={`font-display text-xl font-bold flex items-center gap-2 transition-colors ${
            isActive('/audiovisual') ? 'text-brand-amber' : 'text-white hover:text-brand-amber'
          }`}
        >
          <Video className="w-5 h-5 text-brand-amber" />
          Audiovisual
        </Link>

        <Link
          to="/desenvolvimento"
          onClick={closeMenu}
          className={`font-display text-xl font-bold flex items-center gap-2 transition-colors ${
            isActive('/desenvolvimento') ? 'text-blue-400' : 'text-white hover:text-brand-amber'
          }`}
        >
          <Code2 className="w-5 h-5 text-blue-400" />
          Desenvolvimento
        </Link>

        <Link
          to="/#portfolio"
          onClick={closeMenu}
          className="font-display text-xl font-bold text-white hover:text-brand-amber transition-colors"
        >
          Portfólio
        </Link>

        <Link
          to="/#sobre"
          onClick={closeMenu}
          className="font-display text-xl font-bold text-white hover:text-brand-amber transition-colors"
        >
          Sobre Esther
        </Link>

        <Link
          to="/#faq"
          onClick={closeMenu}
          className="font-display text-xl font-bold text-white hover:text-brand-amber transition-colors"
        >
          FAQ
        </Link>

        <div className="w-16 h-px bg-white/10 my-3"></div>

        <a
          href="#contato"
          onClick={closeMenu}
          className="btn-amber px-8 py-3.5 text-sm w-full max-w-xs flex justify-center text-center shadow-xl shadow-brand-amber/30"
        >
          Solicitar proposta
        </a>
      </div>
    </header>
  );
};
