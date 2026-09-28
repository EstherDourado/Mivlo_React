import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            window.scrollTo(0, 0);
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

    return (
        <header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel' : 'border-b border-transparent'}`} 
            id="navbar"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a href="#" onClick={closeMenu} className="flex items-center gap-2 z-50 group">
                    <img src="/img/LOGO MAIS GROSSINHA 02.png" alt="MIVLO Logo" className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 hover:scale-105" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#manifesto" className="text-brand-sand/80 hover:text-white transition-colors">Manifesto</a>
                    <a href="#frentes" className="text-brand-sand/80 hover:text-white transition-colors">Frentes</a>
                    <a href="#metodo" className="text-brand-sand/80 hover:text-white transition-colors">Método</a>
                    <a href="#objecoes" className="text-brand-sand/80 hover:text-white transition-colors">Objeções</a>
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <a href="#contato" className="text-sm font-medium text-brand-sand/80 hover:text-white transition-colors">Contato</a>
                    <a href="#contato" className="btn-amber text-sm px-6 py-2.5">
                        Solicitar proposta
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden text-white z-50 p-2 relative" 
                    onClick={toggleMenu} 
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            <div className={`fixed inset-0 bg-brand-graphite/98 backdrop-blur-xl z-40 transform transition-transform duration-300 flex flex-col justify-start pt-28 pb-10 items-center gap-6 overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <a href="#manifesto" onClick={closeMenu} className="font-display text-xl font-bold text-white hover:text-brand-amber transition-colors mobile-link">Manifesto</a>
                <a href="#frentes" onClick={closeMenu} className="font-display text-xl font-bold text-white hover:text-brand-amber transition-colors mobile-link">Frentes</a>
                <a href="#metodo" onClick={closeMenu} className="font-display text-xl font-bold text-white hover:text-brand-amber transition-colors mobile-link">Método</a>
                <a href="#objecoes" onClick={closeMenu} className="font-display text-xl font-bold text-white hover:text-brand-amber transition-colors mobile-link">Objeções</a>
                <a href="#contato" onClick={closeMenu} className="font-display text-xl font-bold text-white hover:text-brand-amber transition-colors mobile-link">Contato</a>
                
                {/* Linha divisória */}
                <div className="w-12 h-px bg-white/10 my-2"></div>
                
                <a href="#contato" onClick={closeMenu} className="btn-amber px-8 py-3 text-base w-[80%] max-w-[280px] mobile-link flex justify-center text-center">
                    Solicitar proposta
                </a>
            </div>
        </header>
    );
};
