import React, { useState } from 'react';
import { 
  MessageSquare, 
  LayoutGrid, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  Camera, 
  Sliders, 
  Scissors, 
  PackageCheck, 
  FileSpreadsheet,
  Headphones,
  ArrowRight
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const DEV_STEPS = [
  {
    step: '01',
    title: 'Briefing',
    subtitle: 'Alinhamento & Imersão',
    desc: 'Mapeamento detalhado das necessidades do seu negócio, público-alvo, personas e objetivos comerciais para garantir direcionamento assertivo.',
    deliverables: ['Documento de requisitos', 'Benchmarking de concorrentes', 'Definição de personas & conversão'],
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'Planejamento',
    subtitle: 'Arquitetura & UI/UX',
    desc: 'Estruturação da experiência do usuário (UX), wireframes e design visual exclusivo no Figma, alinhado à identidade e autoridade da sua marca.',
    deliverables: ['Prototipagem interativa', 'Design system & tipografia', 'Arquitetura de navegação'],
    icon: Palette,
  },
  {
    step: '03',
    title: 'Produção',
    subtitle: 'Código & Engenharia',
    desc: 'Construção do projeto com código limpo, reativo e modular em React, Tailwind CSS e integrações modernas com foco em alta performance.',
    deliverables: ['Componentização reativa', 'Integração com WhatsApp/APIs', 'Carregamento instantâneo < 1s'],
    icon: Code2,
  },
  {
    step: '04',
    title: 'Revisão',
    subtitle: 'Testes & Performance',
    desc: 'Bateria de validações exaustivas em smartphones, tablets e desktops, conferindo acessibilidade, responsividade e pontuação Lighthouse.',
    deliverables: ['Ajustes finos de layout', 'SEO técnico on-page', 'Validação multiplataforma'],
    icon: CheckCircle2,
  },
  {
    step: '05',
    title: 'Entrega',
    subtitle: 'Deploy & Publicação',
    desc: 'Publicação oficial do projeto em infraestrutura de nuvem de alta velocidade, com certificado de segurança SSL e apontamento de domínio.',
    deliverables: ['Deploy em nuvem', 'Configuração de DNS e SSL', 'Indexação no Google Search'],
    icon: Rocket,
  },
  {
    step: '06',
    title: 'Suporte',
    subtitle: 'Evolução Contínua',
    desc: 'Sustentação técnica contínua, monitoramento de estabilidade, backups automáticos e suporte humanizado para sua tranquilidade total.',
    deliverables: ['Monitoramento 24/7', 'Backups na nuvem', 'Atendimento direto via WhatsApp'],
    icon: Headphones,
  },
];

const AUDIOVISUAL_STEPS = [
  {
    step: '01',
    title: 'Briefing',
    subtitle: 'Objetivo & Roteiro',
    desc: 'Alinhamento estratégico do tom da cobertura, momentos indispensáveis, horário de pico de visitantes e mensagens prioritárias a transmitir.',
    deliverables: ['Roteiro de takes prioritários', 'Cronograma de gravação', 'Alinhamento de identidade visual'],
    icon: FileSpreadsheet,
  },
  {
    step: '02',
    title: 'Planejamento',
    subtitle: 'Logística & Luz',
    desc: 'Mapeamento técnico da iluminação de estande, testeiras de LED, posicionamento de câmera e calibração de equipamentos para cinema 4K.',
    deliverables: ['Calibração de fotometria', 'Seleção de lentes para arquitetura', 'Planejamento de áudio sem fio'],
    icon: LayoutGrid,
  },
  {
    step: '03',
    title: 'Produção',
    subtitle: 'Captação Cinematográfica',
    desc: 'Gravação e fotografia com olhar documental e estético, utilizando estabilizadores e sensores de alta sensibilidade com total discrição.',
    deliverables: ['Captação em 4K UHD 60fps', 'Fotografia com correção de perspectiva', 'Registros espontâneos e arquiteturais'],
    icon: Camera,
  },
  {
    step: '04',
    title: 'Seleção',
    subtitle: 'Curadoria Criteriosa',
    desc: 'Triagem dos melhores ângulos, enquadramentos sem distorção e momentos expressivos para compor o acervo oficial da sua marca.',
    deliverables: ['Filtragem dos melhores takes', 'Eliminação de imagens redundantes', 'Organização por categorias'],
    icon: Sliders,
  },
  {
    step: '05',
    title: 'Edição',
    subtitle: 'Color Grading & Som',
    desc: 'Pós-produção avançada com tratamento de cor cinematográfico, sound design envolvente e cortes sincronizados com a trilha sonora.',
    deliverables: ['Color grading profissional', 'Mixagem de áudio e sound effects', 'Cortes adaptados para Reels/LinkedIn'],
    icon: Scissors,
  },
  {
    step: '06',
    title: 'Entrega',
    subtitle: 'Acervo em Nuvem',
    desc: 'Disponibilização do acervo completo em alta resolução organizado em nuvem, pronto para publicações imediatas e uso em marketing.',
    deliverables: ['Galeria em nuvem protegida', 'Arquivos em 4K UHD e web-ready', 'Suporte a postagens imediatas'],
    icon: PackageCheck,
  },
];

export const MethodologySection = ({ 
  defaultType = "all", 
  title = "Nosso Processo de Trabalho", 
  subtitle = "Do primeiro contato à entrega final, seguimos um fluxo claro, ágil e eficiente.",
  theme = "light"
}) => {
  const [activeTab, setActiveTab] = useState(defaultType === "all" ? "dev" : defaultType);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  const steps = activeTab === "dev" ? DEV_STEPS : AUDIOVISUAL_STEPS;
  const isLight = theme === "light";
  const activeStep = steps[activeStepIndex] || steps[0];
  const StepIcon = activeStep.icon;

  const handleStepClick = (idx) => {
    if (activeStepIndex === idx) {
      // No toque mobile, tocar novamente permite alternar expansão
      setIsExpanded((prev) => !prev);
    } else {
      setActiveStepIndex(idx);
      setIsExpanded(true);
    }
  };

  return (
    <section 
      id="metodo" 
      className={`py-20 lg:py-28 relative overflow-hidden w-full max-w-full transition-colors duration-300 ${
        isLight ? 'bg-[#F6F4FA] text-[#08070D]' : 'bg-[#08070D] text-white'
      }`}
    >
      {/* Transição suave nas bordas superior e inferior */}
      {isLight && (
        <>
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#08070D]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#08070D]/10 to-transparent pointer-events-none" />
        </>
      )}

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold tracking-widest uppercase bg-[#6128C8]/10 text-[#6128C8] border border-[#6128C8]/25 mb-4">
              Fluxo Transparente
            </span>
            <h2 className={`fluid-h2 font-extrabold mb-3 tracking-tight ${isLight ? 'text-[#08070D]' : 'text-white'}`}>
              {title}
            </h2>
            <p className={`text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto ${isLight ? 'text-[#393340]' : 'text-[#B9B2C5]'}`}>
              {subtitle}
            </p>

            {/* Alternador de Abas para alternar entre Desenvolvimento e Audiovisual */}
            {defaultType === "all" && (
              <div className={`inline-flex flex-wrap sm:flex-nowrap justify-center p-1 rounded-2xl sm:rounded-full mt-6 shadow-sm max-w-full gap-1 ${
                isLight 
                  ? 'bg-white border border-[#E5E0EB]' 
                  : 'bg-[#100D18] border border-[#393340]'
              }`}>
                <button
                  onClick={() => {
                    setActiveTab("dev");
                    setActiveStepIndex(0);
                    setIsExpanded(true);
                  }}
                  className={`px-3.5 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "dev"
                      ? "bg-[#6128C8] text-white shadow-md shadow-[#6128C8]/30"
                      : isLight 
                        ? "text-[#393340] hover:text-[#08070D]" 
                        : "text-[#B9B2C5] hover:text-white"
                  }`}
                >
                  Desenvolvimento
                </button>
                <button
                  onClick={() => {
                    setActiveTab("audiovisual");
                    setActiveStepIndex(0);
                    setIsExpanded(true);
                  }}
                  className={`px-3.5 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === "audiovisual"
                      ? "bg-[#6128C8] text-white shadow-md shadow-[#6128C8]/30"
                      : isLight 
                        ? "text-[#393340] hover:text-[#08070D]" 
                        : "text-[#B9B2C5] hover:text-white"
                  }`}
                >
                  Audiovisual
                </button>
              </div>
            )}
          </div>
        </Reveal>

        {/* =========================================================================
            6 CARDS ENFILEIRADOS EM UMA LINHA SÓ (COMPACTOS COM HOVER / TOUCH EXPAND)
            ========================================================================= */}
        <Reveal>
          <div className="w-full mb-6">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
              {steps.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeStepIndex === idx && isExpanded;

                return (
                  <button
                    key={item.step}
                    onMouseEnter={() => {
                      setActiveStepIndex(idx);
                      setIsExpanded(true);
                    }}
                    onClick={() => handleStepClick(idx)}
                    className={`relative p-3 sm:p-4 rounded-2xl flex flex-col items-center text-center transition-all duration-300 border cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#6128C8] text-white border-[#6128C8] shadow-lg shadow-[#6128C8]/30 -translate-y-1 scale-102'
                        : isLight
                          ? 'bg-white text-[#08070D] border-[#E5E0EB] hover:border-[#6128C8]/40 hover:bg-[#6128C8]/5'
                          : 'bg-[#100D18] text-white border-white/10 hover:border-[#9557F5]/40 hover:bg-white/5'
                    }`}
                    aria-label={`Ver etapa ${item.step}: ${item.title}`}
                  >
                    {/* Indicador de Número */}
                    <span className={`text-[10px] font-mono font-bold uppercase mb-1.5 px-2 py-0.5 rounded-md ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-[#6128C8]/10 text-[#6128C8]'
                    }`}>
                      {item.step}
                    </span>

                    {/* Ícone Redondo */}
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center mb-1.5 transition-colors ${
                      isActive
                        ? 'bg-white text-[#6128C8]'
                        : 'bg-[#6128C8]/10 text-[#6128C8]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Título Compacto */}
                    <span className="font-display font-bold text-xs sm:text-sm truncate w-full">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            SESSÃO EXPANDIDA COM OS DETALHES DA FASE ATIVA
            ========================================================================= */}
        {isExpanded && (
          <Reveal>
            <div className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 border shadow-xl relative overflow-hidden animate-fadeIn ${
              isLight
                ? 'bg-white border-[#E5E0EB] shadow-gray-200/50'
                : 'bg-[#100D18] border-white/10 shadow-black/80'
            }`}>
              {/* Brilho decorativo no canto */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6128C8]/10 blur-3xl rounded-full pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#6128C8]/15 border border-[#6128C8]/30 text-[#6128C8] flex items-center justify-center flex-shrink-0">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-extrabold uppercase px-3 py-1 rounded-full bg-[#6128C8]/15 text-[#6128C8] border border-[#6128C8]/30">
                      Fase {activeStep.step} de 06
                    </span>
                    <span className="text-xs font-mono text-[#9557F5] font-semibold">
                      {activeStep.subtitle}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-display font-extrabold mb-2 ${
                    isLight ? 'text-[#08070D]' : 'text-white'
                  }`}>
                    {activeStep.title} — {activeStep.subtitle}
                  </h3>

                  <p className={`text-xs sm:text-sm font-light leading-relaxed max-w-3xl mb-4 ${
                    isLight ? 'text-[#393340]' : 'text-[#B9B2C5]'
                  }`}>
                    {activeStep.desc}
                  </p>

                  {/* Entregáveis da Fase */}
                  <div className="pt-4 border-t border-black/5 dark:border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#9557F5] block mb-2 font-bold">
                      O que entregamos nesta etapa:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeStep.deliverables.map((deliv, i) => (
                        <span
                          key={i}
                          className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg border font-medium ${
                            isLight
                              ? 'bg-[#F6F4FA] text-[#08070D] border-[#E5E0EB]'
                              : 'bg-white/5 text-white border-white/10'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botão de Próxima Etapa / Interação */}
                <div className="flex items-center justify-end flex-shrink-0">
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % steps.length)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all border ${
                      isLight
                        ? 'bg-[#6128C8] text-white border-[#6128C8] hover:bg-[#5021a8] shadow-md'
                        : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                    }`}
                  >
                    <span>Próxima Etapa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};
