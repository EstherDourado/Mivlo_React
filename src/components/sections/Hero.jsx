import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Video, Code2, Terminal } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'media', 'tech'

  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-28 overflow-hidden min-h-[92vh] flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Hero Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-start z-10 text-left">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-border bg-white/5 backdrop-blur-md mb-6 hover:bg-white/10 transition-colors">
                <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-sand/90">
                  Tecnologia · Audiovisual · Presença Digital
                </span>
              </div>
              
              <h1 className="fluid-h1 font-extrabold text-white mb-6 leading-tight">
                Sua marca em tela.<br />
                <span className="text-amber-gradient">Sua marca em código.</span>
              </h1>
              
              <p className="text-base md:text-xl text-brand-sand/85 mb-8 md:mb-10 max-w-2xl leading-relaxed font-light">
                Desenvolvimento digital e produção audiovisual para transformar ideias, projetos e experiências em soluções que geram presença real. Engenharia de software e olhar cinematográfico sob a mesma liderança.
              </p>
              
              {/* CTAs Requeridos */}
              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
                <a 
                  href="#quem-e-a-mivlo" 
                  className="btn-amber w-full sm:w-auto text-sm md:text-base px-8 py-3.5 shadow-xl shadow-brand-amber/25"
                >
                  Conheça a MIVLO
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a 
                  href="#contato" 
                  className="btn-ghost w-full sm:w-auto text-sm md:text-base px-8 py-3.5 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Fale comigo
                </a>
              </div>

              {/* Badges dos Pilares Interativos */}
              <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4 text-xs font-mono">
                <Link
                  to="/audiovisual"
                  className="px-3.5 py-1.5 rounded-full bg-brand-amber/10 border border-brand-amber/30 text-brand-amber hover:bg-brand-amber hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Video className="w-3.5 h-3.5" />
                  MIVLO Media
                </Link>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <Link
                  to="/desenvolvimento"
                  className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  MIVLO Tech
                </Link>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <span className="text-brand-sand/50 uppercase tracking-widest text-[11px]">
                  Hub Modular Independente
                </span>
              </div>
            </Reveal>
          </div>

          {/* Hero Graphic: Elemento Tecnológico Interativo */}
          <div className="w-full lg:w-5/12 z-10">
            <Reveal delayClass="delay-200">
              <div className="relative w-full aspect-square max-w-[460px] mx-auto animate-float">
                {/* Viewfinder Brackets */}
                <div className="viewfinder absolute inset-0 glass-panel p-6 md:p-8 flex flex-col justify-between border border-brand-border/80 bg-brand-graphite/60 shadow-2xl">
                  {/* Top Bar com Status & Indicadores */}
                  <div className="flex items-center justify-between pb-4 border-b border-brand-border/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-brand-sand/80 font-bold">
                        REC · 4K UHD
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/5 text-[10px] font-mono text-brand-amber">
                      <Terminal className="w-3 h-3" />
                      <span>SYSTEM: READY</span>
                    </div>
                  </div>

                  {/* Miolo Interativo Dual Hub */}
                  <div className="my-auto py-4 space-y-4">
                    {/* Alternador de Modo no Mockup */}
                    <div className="flex items-center justify-center gap-1 p-1 bg-black/40 rounded-xl border border-white/5 text-xs font-mono">
                      <button
                        onClick={() => setActiveTab('both')}
                        className={`flex-1 py-1 rounded-lg transition-all ${
                          activeTab === 'both' ? 'bg-brand-amber text-white font-bold' : 'text-brand-sand/60 hover:text-white'
                        }`}
                      >
                        Dual Hub
                      </button>
                      <button
                        onClick={() => setActiveTab('media')}
                        className={`flex-1 py-1 rounded-lg transition-all ${
                          activeTab === 'media' ? 'bg-brand-amber text-white font-bold' : 'text-brand-sand/60 hover:text-white'
                        }`}
                      >
                        Media
                      </button>
                      <button
                        onClick={() => setActiveTab('tech')}
                        className={`flex-1 py-1 rounded-lg transition-all ${
                          activeTab === 'tech' ? 'bg-blue-500 text-white font-bold' : 'text-brand-sand/60 hover:text-white'
                        }`}
                      >
                        Tech
                      </button>
                    </div>

                    {/* Janela de Código / Vídeo com Estética Cyber-Cinema */}
                    <div className="p-5 rounded-2xl bg-black/50 border border-brand-border/80 font-mono text-xs space-y-2.5 shadow-inner">
                      {activeTab === 'media' ? (
                        <>
                          <div className="flex items-center justify-between text-brand-amber text-[11px]">
                            <span>// MIVLO_MEDIA_ENGINE</span>
                            <span>SHUTTER: 1/50</span>
                          </div>
                          <div className="text-white/90">const capture = new Cinematography({'{'}</div>
                          <div className="text-brand-sand/70 pl-4">resolution: "4K Cinema",</div>
                          <div className="text-brand-sand/70 pl-4">focus: "Architecture & People",</div>
                          <div className="text-brand-sand/70 pl-4">colorGrading: "Film Emulation"</div>
                          <div className="text-white/90">{'}'});</div>
                        </>
                      ) : activeTab === 'tech' ? (
                        <>
                          <div className="flex items-center justify-between text-blue-400 text-[11px]">
                            <span>// MIVLO_TECH_ENGINE</span>
                            <span>STATUS: 200 OK</span>
                          </div>
                          <div className="text-white/90">const app = new WebArchitecture({'{'}</div>
                          <div className="text-brand-sand/70 pl-4">framework: "React 19 + Vite",</div>
                          <div className="text-brand-sand/70 pl-4">performance: "99 Lighthouse",</div>
                          <div className="text-brand-sand/70 pl-4">conversionEngine: true</div>
                          <div className="text-white/90">{'}'});</div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center justify-between text-brand-amber text-[11px]">
                            <span>// MIVLO_DUAL_CORE</span>
                            <span>SYNCHRONIZED</span>
                          </div>
                          <p className="text-white/90 leading-relaxed font-light">
                            <span className="text-brand-amber font-semibold">&lt;Cinema&gt;</span> Estandes, Vídeos & Presença <span className="text-brand-amber font-semibold">&lt;/Cinema&gt;</span>
                            <br />
                            <span className="text-blue-400 font-semibold">&lt;Software&gt;</span> Sites, Sistemas & Conversão <span className="text-blue-400 font-semibold">&lt;/Software&gt;</span>
                          </p>
                          <div className="pt-2 flex items-center justify-between text-[10px] text-brand-sand/50">
                            <span>FPS: 60.0</span>
                            <span className="text-emerald-400">LATENCY: 12ms</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Rodapé da Janela */}
                  <div className="pt-3 border-t border-brand-border/40 flex items-center justify-between text-[10px] font-mono text-brand-sand/50">
                    <span>MIVLO / ESTHER DOURADO</span>
                    <span className="text-brand-amber font-semibold">EST. 2026</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
