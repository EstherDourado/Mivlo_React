import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../../config/site';

export const FloatingWhatsApp = () => {
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false);

  // Determinar o tipo de mensagem com base na rota
  let msgType = "general";
  if (location.pathname.includes("audiovisual")) {
    msgType = "audiovisual";
  } else if (location.pathname.includes("desenvolvimento")) {
    msgType = "desenvolvimento";
  }

  const whatsappUrl = siteConfig.getWhatsAppLink(msgType);

  useEffect(() => {
    // Exibe o tooltip após 4 segundos para chamar atenção suavemente
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <aside aria-label="Atendimento rápido via WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center flex-col sm:flex-row-reverse gap-3 pointer-events-auto">
      {/* Botão Principal do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.5)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Fale comigo pelo WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none"></span>
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 transition-transform group-hover:rotate-12 fill-white/20 stroke-white stroke-[2.2]" />
      </a>

      {/* Cartão de Mensagem Contextual / Tooltip */}
      {showTooltip && (
        <div className="relative glass-panel bg-brand-graphite/95 border border-brand-border/80 px-4 py-3 rounded-2xl shadow-2xl max-w-[260px] animate-float sm:animate-none">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-brand-sand/50 hover:text-white p-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              Esther Online
            </span>
          </div>
          <p className="text-xs text-white/90 font-light leading-snug mb-2">
            {msgType === "audiovisual"
              ? "Quer cotar uma cobertura fotográfica ou vídeo para seu estande/projeto?"
              : msgType === "desenvolvimento"
              ? "Tem um projeto web ou ideia de sistema em mente? Vamos orçar!"
              : "Dúvidas sobre os serviços da MIVLO? Fale diretamente comigo no WhatsApp!"}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-brand-amber hover:text-white flex items-center gap-1 transition-colors"
          >
            Fale comigo pelo WhatsApp →
          </a>
        </div>
      )}
    </aside>
  );
};
