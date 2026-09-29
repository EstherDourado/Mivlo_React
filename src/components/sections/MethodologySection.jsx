import React, { useState } from 'react';
import { MessageSquare, LayoutGrid, Palette, Code2, CheckCircle2, Rocket, Camera, Sliders, Scissors, PackageCheck, FileSpreadsheet } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const DEV_STEPS = [
  {
    step: '01',
    title: 'Conversa',
    desc: 'Entendemos profundamente a necessidade do negócio, público-alvo e objetivos comerciais.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'Planejamento',
    desc: 'Definimos escopo detalhado, arquitetura de dados, funcionalidades e tecnologias ideais.',
    icon: LayoutGrid,
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Estruturamos a experiência visual (UI/UX) com prototipagem autoral alinhada à sua marca.',
    icon: Palette,
  },
  {
    step: '04',
    title: 'Desenvolvimento',
    desc: 'Construímos o código limpo, reativo e otimizado com as melhores práticas de engenharia.',
    icon: Code2,
  },
  {
    step: '05',
    title: 'Testes',
    desc: 'Validamos exaustivamente responsividade em múltiplos dispositivos, performance e segurança.',
    icon: CheckCircle2,
  },
  {
    step: '06',
    title: 'Publicação',
    desc: 'Colocamos o projeto no ar em servidores de alta velocidade com DNS configurado e SEO ativo.',
    icon: Rocket,
  },
];

const AUDIOVISUAL_STEPS = [
  {
    step: '01',
    title: 'Briefing',
    desc: 'Alinhamento dos objetivos da cobertura, cronograma do evento e mensagem-chave a transmitir.',
    icon: FileSpreadsheet,
  },
  {
    step: '02',
    title: 'Planejamento',
    desc: 'Roteirização dos takes indispensáveis, horários de luz ideal e logística de movimentação.',
    icon: LayoutGrid,
  },
  {
    step: '03',
    title: 'Captação',
    desc: 'Gravação e fotografia com olhar cinematográfico, equipamentos 4K e discrição no estande.',
    icon: Camera,
  },
  {
    step: '04',
    title: 'Seleção',
    desc: 'Curadoria criteriosa dos melhores ângulos, momentos espontâneos e detalhes de arquitetura.',
    icon: Sliders,
  },
  {
    step: '05',
    title: 'Edição',
    desc: 'Tratamento de cor (color grading), cortes dinâmicos no ritmo da música e sound design.',
    icon: Scissors,
  },
  {
    step: '06',
    title: 'Entrega',
    desc: 'Disponibilização do acervo organizado em nuvem em alta resolução pronto para redes e portfólio.',
    icon: PackageCheck,
  },
];

export const MethodologySection = ({ defaultType = "all", title = "Como Funciona", subtitle = "Processo transparente, metódico e sem surpresas do início à entrega final." }) => {
  const [activeTab, setActiveTab] = useState(defaultType === "all" ? "dev" : defaultType);

  const steps = activeTab === "dev" ? DEV_STEPS : AUDIOVISUAL_STEPS;

  return (
    <section id="metodo" className="py-20 lg:py-28 relative">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-brand-amber mb-3 block">
              Método MIVLO
            </span>
            <h2 className="fluid-h2 font-extrabold text-white mb-4">
              {title}
            </h2>
            <p className="text-sm md:text-base text-brand-sand/80 font-light leading-relaxed">
              {subtitle}
            </p>

            {/* Alternador de Abas se for visualização geral */}
            {defaultType === "all" && (
              <div className="inline-flex items-center p-1 rounded-full bg-brand-muted/40 border border-brand-border/60 mt-8">
                <button
                  onClick={() => setActiveTab("dev")}
                  className={`px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    activeTab === "dev"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                      : "text-brand-sand/70 hover:text-white"
                  }`}
                >
                  Processo de Desenvolvimento
                </button>
                <button
                  onClick={() => setActiveTab("audiovisual")}
                  className={`px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    activeTab === "audiovisual"
                      ? "bg-gradient-to-r from-brand-amber to-brand-amber2 text-white shadow-md"
                      : "text-brand-sand/70 hover:text-white"
                  }`}
                >
                  Processo Audiovisual
                </button>
              </div>
            )}
          </div>
        </Reveal>

        {/* 6 Passos em Grid Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.step} delayClass={`delay-${(idx % 3) * 100}`}>
                <div className="glass-panel p-6 md:p-8 rounded-2xl border border-brand-border/60 bg-brand-muted/20 hover:border-brand-amber/40 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-sm md:text-base font-extrabold text-brand-amber px-2.5 py-0.5 rounded-lg bg-brand-amber/10 border border-brand-amber/30">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-sand/80 group-hover:text-brand-amber group-hover:scale-110 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-display font-extrabold text-lg md:text-xl text-white mb-2 group-hover:text-brand-amber transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-brand-sand/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
