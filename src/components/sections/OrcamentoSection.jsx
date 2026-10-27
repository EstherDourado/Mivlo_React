import React from 'react';
import {
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Zap,
  Globe,
  Layers,
  Camera,
  Video,
  ShieldCheck
} from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export const OrcamentoSection = ({ type = "desenvolvimento" }) => {
  const isDev = type === "desenvolvimento";
  const rawNumber = "5511953999505";

  const devServices = [
    {
      title: "Landing Page de Alta Conversão",
      subtitle: "Foco em vendas, lançamentos e campanhas",
      description: "Páginas exclusivas construídas estrategicamente para transformar visitantes em clientes reais, com SEO técnico e integração direta com WhatsApp ou CRM.",
      highlights: [
        "Design 100% autoral sob medida",
        "Carregamento ultra-rápido (menos de 1s)",
        "Integração nativa com WhatsApp e formulários",
        "Arquitetura Mobile First para smartphones"
      ],
      icon: Zap,
      whatsappMsg: "Olá, Esther! Gostaria de um orçamento personalizado para o desenvolvimento de uma Landing Page."
    },
    {
      title: "Site Institucional Completo",
      subtitle: "Autoridade e presença sólida na web",
      description: "Estrutura multipágina moderna para apresentar sua empresa, serviços, diferenciais e cases com alto valor percebido e posicionamento no Google.",
      highlights: [
        "Múltiplas páginas (Home, Sobre, Serviços, Contato)",
        "Otimização avançada de SEO on-page",
        "Design exclusivo alinhado à sua marca",
        "Painel intuitivo ou suporte para atualizações"
      ],
      icon: Globe,
      whatsappMsg: "Olá, Esther! Gostaria de um orçamento personalizado para um Site Institucional Completo."
    },
    {
      title: "Sistemas Web Personalizados",
      subtitle: "Engenharia de software para seu fluxo operacional",
      description: "Dashboards analíticos, painéis administrativos internos, automações e plataformas que reduzem tarefas manuais e aumentam o controle do negócio.",
      highlights: [
        "Dashboards e painéis de controle modernos",
        "Bancos de dados relacionais e em nuvem",
        "Arquitetura de APIs seguras e escaláveis",
        "Níveis hierárquicos de acesso e permissões"
      ],
      icon: Layers,
      whatsappMsg: "Olá, Esther! Gostaria de solicitar um diagnóstico para o desenvolvimento de um Sistema Web sob medida."
    },
    {
      title: "Hospedagem & Sustentação Técnica",
      subtitle: "Seu site veloz, seguro e online 24/7",
      description: "Infraestrutura em nuvem de alta performance, backups automáticos contínuos, certificados SSL e suporte técnico prioritário para você focar apenas em vender.",
      highlights: [
        "Servidores em nuvem de alta velocidade",
        "Certificado SSL gratuito e monitoramento 24h",
        "Backups automáticos preventivos na nuvem",
        "Suporte técnico humanizado via WhatsApp"
      ],
      icon: ShieldCheck,
      whatsappMsg: "Olá, Esther! Gostaria de informações sobre planos de hospedagem e sustentação técnica contínua para o meu site."
    }
  ];

  const audiovisualServices = [
    {
      title: "Fotografia de Estandes & Feiras",
      subtitle: "Registro técnico de arquitetura promocional",
      description: "Cobertura fotográfica com foco em geometria, linhas retas, acabamentos de marcenaria e calibração de temperatura de cor para módulos de LED.",
      highlights: [
        "Fotometria calibrada para fitas e testeiras de LED",
        "Correção de perspectiva arquitetônica rigorosa",
        "Prévia rápida para redes sociais em até 24h",
        "Acervo completo tratado em resolução 4K UHD"
      ],
      icon: Camera,
      whatsappMsg: "Olá, Esther! Gostaria de um orçamento para cobertura fotográfica de estande em feira/evento."
    },
    {
      title: "Videomaker & Cinema 4K",
      subtitle: "Aftermovies e filmes corporativos imersivos",
      description: "Captação dinâmica com estabilização mecânica, iluminação planejada e áudio sem fio, transformando seu estande ou evento em narrativa cinematográfica.",
      highlights: [
        "Captação em cinema 4K com olhar estético",
        "Edição dinâmica com trilha sonora licenciada",
        "Color grading profissional e sound design",
        "Versões adaptadas para YouTube, LinkedIn e Reels"
      ],
      icon: Video,
      whatsappMsg: "Olá, Esther! Gostaria de um orçamento para produção de vídeo / aftermovie de evento."
    },
    {
      title: "Storymaker em Tempo Real",
      subtitle: "Engajamento ágil durante o próprio evento",
      description: "Captação, edição dinâmica e postagem de cortes verticais no decorrer da feira para manter suas redes sociais aquecidas e gerar tráfego presencial.",
      highlights: [
        "Vídeos verticais produzidos durante o evento",
        "Cobertura de bastidores e fluxo de visitantes",
        "Entrevistas com executivos e clientes",
        "Agilidade de entrega para engajamento instantâneo"
      ],
      icon: Sparkles,
      whatsappMsg: "Olá, Esther! Gostaria de consultar disponibilidade e orçamento para Storymaker em tempo real."
    },
    {
      title: "Ensaios Corporativos & Retratos",
      subtitle: "Posicionamento executivo de autoridade",
      description: "Sessões orientadas para diretoria, sócios e equipes, criando retratos que transmitem confiança e profissionalismo no LinkedIn e materiais comerciais.",
      highlights: [
        "Direção humanizada de poses e expressões",
        "Tratamento fino de pele sem perder a naturalidade",
        "Formatos calibrados para LinkedIn, site e crachás",
        "Sessão no próprio escritório ou locação externa"
      ],
      icon: CheckCircle2,
      whatsappMsg: "Olá, Esther! Gostaria de um orçamento para ensaio fotográfico corporativo / retratos de equipe."
    }
  ];

  const currentServices = isDev ? devServices : audiovisualServices;

  return (
    <section id="orcamento" className="py-20 lg:py-28 relative overflow-hidden w-full max-w-full bg-[#08070D] text-white">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[350px] bg-[#6128C8]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#9557F5]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* CABEÇALHO DA SEÇÃO */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-[#9557F5] mb-2.5 inline-block px-3 py-1 rounded-full bg-[#6128C8]/15 border border-[#6128C8]/30">
              {isDev ? "Engenharia Sob Medida" : "Soluções Audiovisuais"}
            </span>

            <h2 className="fluid-h2 font-extrabold text-white mb-4 tracking-tight">
              {isDev ? "Soluções Digitais " : "Produções e Coberturas "}
              <span className="bg-gradient-to-r from-white via-[#B99AFF] to-[#9557F5] bg-clip-text text-transparent">
                Sob Medida
              </span>
            </h2>

            <p className="text-sm md:text-base text-[#B9B2C5] font-light leading-relaxed max-w-2xl mx-auto">
              {isDev
                ? "Cada empresa possui um momento e um objetivo comercial diferente. Escolha o formato ideal para o seu projeto e receba uma proposta personalizada."
                : "Coberturas pensadas para valorizar a arquitetura dos estandes e a presença da sua marca em grandes feiras de negócios."}
            </p>
          </div>
        </Reveal>

        {/* GRADE DOS 4 SERVIÇOS MODULARES (COM BOTÃO DIRETO PARA O WHATSAPP) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentServices.map((service, idx) => {
            const Icon = service.icon;
            const waLink = `https://wa.me/${rawNumber}?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <Reveal key={idx} delayClass={`delay-${(idx % 4) * 100}`}>
                <div className="p-6 sm:p-7 rounded-3xl bg-[#100D18] border border-white/10 hover:border-[#6128C8]/50 hover:shadow-2xl hover:shadow-[#6128C8]/15 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#6128C8]/15 border border-[#6128C8]/30 flex items-center justify-center text-[#9557F5] mb-5 group-hover:bg-[#6128C8] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#9557F5] block mb-1">
                      {service.subtitle}
                    </span>

                    <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-[#B99AFF] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-[#B9B2C5]/80 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full text-xs font-semibold text-center flex items-center justify-center gap-1.5 border border-white/10 bg-white/5 hover:bg-[#6128C8] hover:text-white hover:border-[#6128C8] transition-all group-hover:shadow-lg group-hover:shadow-[#6128C8]/25"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Solicitar Orçamento
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
