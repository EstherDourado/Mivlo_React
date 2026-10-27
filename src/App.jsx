import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { Home } from './pages/Home';
import { Audiovisual } from './pages/Audiovisual';
import { Desenvolvimento } from './pages/Desenvolvimento';
import { ProjectDetail } from './pages/ProjectDetail';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* Reseta a rolagem da página para o topo nas mudanças de rota */}
      <ScrollToTop />

      {/* Fundo com grade animada e orbs luminescentes contidos sem vazar */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute inset-0 grid-bg grid-bg-mask opacity-40 animate-grid"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#6128C8] blur-[160px] opacity-20 animate-float"></div>
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#9557F5] blur-[160px] opacity-15 animate-float" 
          style={{ animationDelay: '-3.5s' }}
        ></div>
      </div>

      {/* Header com Navegação Multipágina */}
      <Header />
      
      {/* Rotas Principais */}
      <main className="min-h-screen w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audiovisual" element={<Audiovisual />} />
          <Route path="/desenvolvimento" element={<Desenvolvimento />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
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
