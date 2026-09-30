import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { Home } from './pages/Home';
import { Audiovisual } from './pages/Audiovisual';
import { Desenvolvimento } from './pages/Desenvolvimento';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Reseta a rolagem da página para o topo nas mudanças de rota */}
      <ScrollToTop />

      {/* Fundo com grade animada e orbs luminescentes característicos da MIVLO */}
      <div className="fixed inset-0 pointer-events-none z-[-1] grid-bg grid-bg-mask opacity-60 animate-grid"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-amber blur-[150px] opacity-30 pointer-events-none z-[-1] animate-float"></div>
      <div 
        className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-amber2 blur-[150px] opacity-20 pointer-events-none z-[-1] animate-float" 
        style={{ animationDelay: '-3.5s' }}
      ></div>

      {/* Header com Navegação Multipágina */}
      <Header />
      
      {/* Rotas Principais */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audiovisual" element={<Audiovisual />} />
          <Route path="/desenvolvimento" element={<Desenvolvimento />} />
          {/* Rota fallback direciona para Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Botão Flutuante de WhatsApp Contextual */}
      <FloatingWhatsApp />

      {/* Rodapé Global */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
