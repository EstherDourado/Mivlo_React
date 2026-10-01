import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig, asset } from '../../config/site';
import { MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-brand-border/60 py-16 relative z-10 bg-[#120129] text-brand-sand/80">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 text-left">
          {/* Coluna 1: Logo & Manifesto Resumido */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={asset('img/LOGO MAIS GROSSINHA 02.png')}
                alt="MIVLO Logo"
                className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-amber mb-2">
              Sua marca em tela. Sua marca em código.
            </p>
            <p className="text-xs text-brand-sand/60 leading-relaxed font-light max-w-sm mb-6">
              A MIVLO é um hub independente que une o rigor da engenharia de software à sensibilidade da produção audiovisual. Criamos soluções que constroem presença real.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-sand/80 hover:text-brand-amber hover:border-brand-amber transition-colors"
                aria-label="Instagram da MIVLO"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.getWhatsAppLink('general')}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-sand/80 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
                aria-label="WhatsApp da MIVLO"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-sand/80 hover:text-blue-400 hover:border-blue-400 transition-colors"
                aria-label="E-mail da MIVLO"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Institucional */}
          <div>
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/audiovisual" className="hover:text-brand-amber transition-colors flex items-center gap-1">
                  Audiovisual
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/desenvolvimento" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  Desenvolvimento
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/#portfolio" className="hover:text-white transition-colors">
                  Portfólio em Destaque
                </Link>
              </li>
              <li>
                <Link to="/#sobre" className="hover:text-white transition-colors">
                  Sobre Esther Dourado
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div>
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs text-brand-sand/60">
              <li>Fotografia de Estandes & Feiras</li>
              <li>Produção de Vídeos & Aftermovies</li>
              <li>Storymaker em Tempo Real</li>
              <li>Landing Pages de Alta Conversão</li>
              <li>Sites Institucionais Multipágina</li>
              <li>Sistemas Web & Dashboards</li>
              <li>Planos de Manutenção & Hosting</li>
            </ul>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div>
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-4">
              Fale com a Esther
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={siteConfig.getWhatsAppLink('general')}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-brand-amber transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-amber flex-shrink-0" />
                  <span className="truncate">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-amber transition-colors flex items-center gap-2"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-brand-amber flex-shrink-0" />
                  <span>{siteConfig.contact.instagramHandle}</span>
                </a>
              </li>
              <li className="pt-1 flex items-start gap-2 text-brand-sand/40 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-brand-sand/40 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left text-[11px] text-brand-sand/40 font-light">
          <p>© 2026 MIVLO. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 justify-center">
            Idealizado e construído com precisão por <strong className="text-white/80 font-medium">Esther Dourado Batista</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
};
