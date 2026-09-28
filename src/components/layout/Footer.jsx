import React from 'react';

export const Footer = () => {
    return (
        <footer className="border-t border-brand-border py-12 relative z-10 bg-brand-graphite">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                            <img src="/img/LOGO MAIS GROSSINHA 02.png" alt="MIVLO Logo" className="h-7 md:h-9 w-auto object-contain transition-transform duration-500 hover:scale-105" />
                        </div>
                        <p className="text-xs font-medium text-brand-sand/60 mb-1">Fotografia • Filmagem • Conteúdo</p>
                        <p className="text-[11px] text-brand-sand/40 leading-relaxed">Nós registramos a história do seu projeto para que ela continue sendo contada.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-display font-bold text-xs mb-3">O QUE ENTREGAMOS</h4>
                        <ul className="space-y-1.5 text-[11px] text-brand-sand/50">
                            <li>Fotografia Profissional Corporativa</li>
                            <li>Filmagem Técnica de Estandes</li>
                            <li>Produção de Vídeos Institucionais</li>
                            <li>Conteúdo Vertical para Redes Sociais</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-display font-bold text-xs mb-3">FALE COM A MIVLO</h4>
                        <ul className="space-y-1.5 text-[11px] text-brand-sand/50">
                            <li><a href="#" className="hover:text-[#d946ef] transition-colors">WhatsApp: (11) 95399-9505</a></li>
                            <li><a href="mailto:mivloaudiovisual@gmail.com" className="hover:text-[#d946ef] transition-colors">mivloaudiovisual@gmail.com</a></li>
                            <li><a href="https://instagram.com/_mivlo" target="_blank" rel="noreferrer" className="hover:text-[#d946ef] transition-colors">Instagram: @_mivlo</a></li>
                            <li className="pt-1 text-brand-sand/30">Atendimento e cobertura nacional.</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-2 text-center">
                    <p className="text-[10px] text-brand-sand/30">© 2026 MIVLO. Todos os direitos reservados.</p>
                    <p className="text-[10px] text-brand-sand/30">Idealizado e executado por Esther Dourado Batista.</p>
                </div>
            </div>
        </footer>
    );
};
