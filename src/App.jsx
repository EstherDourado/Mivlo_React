import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Marquee } from './components/sections/Marquee';
import { Manifesto } from './components/sections/Manifesto';
import { Frentes } from './components/sections/Frentes';
import { Metodo } from './components/sections/Metodo';
import { Objecoes } from './components/sections/Objecoes';
import { Contato } from './components/sections/Contato';

function App() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[-1] grid-bg grid-bg-mask opacity-60 animate-grid"></div>
      <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-amber blur-[150px] opacity-30 pointer-events-none z-[-1] animate-float"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-amber2 blur-[150px] opacity-20 pointer-events-none z-[-1] animate-float" style={{ animationDelay: '-3.5s' }}></div>

      <Header />
      
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Frentes />
        <Metodo />
        <Objecoes />
        <Contato />
      </main>

      <Footer />
    </>
  );
}

export default App;
