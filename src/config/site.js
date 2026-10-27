import { asset } from '../utils/asset';
import { projectsData } from '../data/projectsData';
export { asset };

export const siteConfig = {
  name: "MIVLO",
  siteUrl: "https://estherdourado.github.io/Mivlo_React",
  tagline: "Sua marca em tela. Sua marca em código.",
  description: "A MIVLO une desenvolvimento digital de alta performance e produção audiovisual estratégica. Criação de landing pages, sistemas web sob medida, fotografia corporativa e cobertura de feiras e eventos.",
  creator: "Esther Dourado Batista",
  roles: "Fotógrafa, Filmmaker & Desenvolvedora Full Stack",
  contact: {
    phoneDisplay: "(11) 95399-9505",
    phoneRaw: "5511953999505",
    email: "contato@mivlo.com.br",
    secondaryEmail: "mivloaudiovisual@gmail.com",
    instagram: "https://instagram.com/_mivlo",
    instagramHandle: "@_mivlo",
    github: "https://github.com/EstherDourado",
    location: "São Paulo, SP — Atendimento e cobertura nacional",
  },
  defaultOgImage: "https://estherdourado.github.io/Mivlo_React/img/esther.jpg",
  whatsappMessages: {
    general: "Olá, Esther! Gostaria de conversar sobre as soluções da MIVLO.",
    audiovisual: "Olá, Esther! Vi os serviços audiovisuais da MIVLO e gostaria de receber mais informações.",
    desenvolvimento: "Olá, Esther! Vi os serviços de desenvolvimento da MIVLO e gostaria de conversar sobre um projeto.",
  },
  getWhatsAppLink: (type = "general") => {
    const rawNumber = "5511953999505";
    const msg = siteConfig.whatsappMessages[type] || siteConfig.whatsappMessages.general;
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(msg)}`;
  },

  // Pacotes Audiovisuais
  audiovisualPackages: [
    {
      id: "registro",
      name: "REGISTRO",
      price: "Sob Orçamento",
      description: "Para empresas que precisam de material profissional e pontual para divulgar seu projeto ou estande.",
      isFeatured: false,
      badge: "Entrada Profissional",
      deliverables: [
        "1 vídeo vertical otimizado para Instagram Reels / TikTok",
        "Até 20 fotografias tratadas em alta resolução",
        "Cobertura do estande / evento no dia principal",
        "Captação dos principais momentos e ângulos de impacto",
        "Entrega digital organizada via nuvem em alta definição",
      ],
      idealFor: "Empresas com estandes menores ou necessidade de registro corporativo pontual.",
    },
    {
      id: "conteudo",
      name: "CONTEÚDO",
      price: "Sob Orçamento",
      description: "Para empresas que querem transformar a presença e o projeto em conteúdo dinâmico para redes sociais.",
      isFeatured: false,
      badge: "Engajamento & Redes",
      deliverables: [
        "2 vídeos verticais com edição dinâmica e legendas",
        "Até 40 fotografias tratadas e colorizadas",
        "Captação de bastidores e making of",
        "Timelapse acelerado da montagem e movimento",
        "1 depoimento em vídeo com cliente ou gestor",
        "Banco de fotos organizado para catálogo e redes",
      ],
      idealFor: "Marcas focadas em gerar autoridade e tráfego contínuo nas mídias sociais.",
    },
    {
      id: "historia",
      name: "HISTÓRIA",
      price: "Sob Orçamento",
      description: "Para empresas que desejam registrar o projeto completo, do início da estrutura até a experiência do público.",
      isFeatured: true,
      badge: "MAIS COMPLETO",
      deliverables: [
        "Cobertura completa da montagem e montadores",
        "Cobertura do evento com fluxo de visitantes",
        "Making of aprofundado dos bastidores",
        "Timelapse cinematográfico da transformação",
        "Até 60 fotografias tratadas de alta performance",
        "Vídeos verticais estratégicos para redes sociais",
        "Depoimento institucional do cliente",
        "Depoimentos espontâneos de visitantes",
        "Vídeo institucional / Aftermovie oficial em 4K",
        "Banco de conteúdo organizado para uso durante todo o ano",
      ],
      idealFor: "Projetos de grande impacto, montadoras, expositores líderes e marcas exigentes.",
    },
  ],

  // Serviços Avulsos Audiovisual (Sob Orçamento)
  audiovisualStandalone: [
    {
      title: "Ensaio Fotográfico Corporativo",
      description: "Retratos profissionais para diretoria, equipe, crachás e posicionamento no LinkedIn.",
      startingAt: "Sob Orçamento",
      details: "Sessão orientada de 1h30 a 2h, tratamento fino de pele e entrega de fotos selecionadas.",
    },
    {
      title: "Cobertura Fotográfica de Eventos",
      description: "Registro de palestras, feiras, premiações e estandes por hora ou período.",
      startingAt: "Sob Orçamento",
      details: "Período de captação contínua com tratamento ágil de todas as imagens aprovadas.",
    },
    {
      title: "Diária de Videomaker / Captação",
      description: "Captação técnica em cinema 4K com iluminação móvel e áudio profissional sem fio.",
      startingAt: "Sob Orçamento",
      details: "Gravação no local com equipamento de alta gama e olhar cinematográfico.",
    },
    {
      title: "Storymaker / Cobertura em Tempo Real",
      description: "Criação, captação e postagem de stories e cortes dinâmicos durante o próprio evento.",
      startingAt: "Sob Orçamento",
      details: "Agilidade para manter as redes sociais ativas com materiais de alto padrão durante o evento.",
    },
    {
      title: "Vídeo Institucional / Aftermovie",
      description: "Filme narrativo de 1 a 3 minutos com trilha sonora licenciada, color grading e roteiro.",
      startingAt: "Sob Orçamento",
      details: "Ideal para apresentação de empresas, portfólio de arquitetura ou resumo de grandes feiras.",
    },
    {
      title: "Edição de Vídeo Avulsa",
      description: "Pós-produção de materiais pré-gravados: cortes dinâmicos, sonorização e legendagem.",
      startingAt: "Sob Orçamento",
      details: "Pós-produção personalizada com rodadas de ajustes inclusas.",
    },
  ],

  // Pacotes de Desenvolvimento Web (Sob Orçamento)
  devServices: [
    {
      id: "landing-page",
      name: "Landing Page Personalizada",
      startingAt: "Sob Orçamento",
      type: "fixed-starting",
      description: "Páginas exclusivas com alta taxa de conversão, pensadas estrategicamente para transformar visitantes em clientes reais.",
      highlights: [
        "Design 100% autoral (sem templates de terceiros)",
        "Arquitetura focada em conversão e persuasão",
        "Layout totalmente responsivo (mobile first)",
        "Animações refinadas e microinterações fluidas",
        "SEO técnico com Open Graph e carregamento ultra-rápido",
        "Integração nativa com WhatsApp, RD Station ou CRM",
        "Formulário automatizado com envio de e-mails",
        "Configuração de Google Analytics e Meta Pixel",
        "Publicação e suporte no lançamento",
      ],
      note: "Cada projeto é desenhado sob medida para o objetivo e a identidade única da sua empresa.",
    },
    {
      id: "site-institucional",
      name: "Site Institucional Completo",
      startingAt: "Sob Orçamento",
      type: "fixed-starting",
      description: "Presença digital sólida e moderna com múltiplas páginas para apresentar sua empresa, serviços, cases e diferenciais com autoridade.",
      highlights: [
        "Estrutura multipágina: Home, Sobre, Serviços, Portfólio, Contato",
        "Arquitetura da informação e UX refinada",
        "Design exclusivo e identidade visual aplicada",
        "Otimização avançada de SEO on-page",
        "Integração com WhatsApp e formulários segmentados",
        "Área de Blog / Notícias quando necessário",
        "Performance nível A no Google Lighthouse",
        "Totalmente responsivo em smartphones, tablets e notebooks",
        "Treinamento de uso ou suporte contínuo garantido",
      ],
      note: "Estrutura modular preparada para expansão contínua da sua operação comercial.",
    },
    {
      id: "sistemas-web",
      name: "Sistemas Web Personalizados",
      startingAt: "Sob Orçamento",
      type: "custom",
      description: "Engenharia de software personalizada para automatizar processos, controlar operações e potencializar negócios complexos.",
      highlights: [
        "Dashboards analíticos e painéis administrativos",
        "Sistemas de gestão interna (CRUDs, ERPs enxutos)",
        "Controle de clientes, agendamentos e estoques",
        "Automação de processos e rotinas manuais (RPA)",
        "Arquitetura de APIs RESTful seguras e escaláveis",
        "Bancos de dados relacionais e na nuvem (SQL Server / PostgreSQL)",
        "Níveis hierárquicos de acesso e permissões de usuários",
        "Relatórios executivos e exportação de dados",
      ],
      note: "O investimento varia conforme a complexidade de regras de negócio, integrações, volume de dados e requisitos técnicos.",
    },
  ],

  // Planos de Manutenção e Hospedagem Recorrente (Sob Orçamento)
  maintenancePlans: [
    {
      id: "essencial",
      name: "ESSENCIAL",
      price: "Sob Orçamento",
      billing: "",
      description: "Para empresas que necessitam de estabilidade, segurança e garantia de que o site permanecerá rápido e online.",
      features: [
        "Hospedagem em nuvem de alta velocidade inclusa",
        "Certificado de segurança SSL gratuito e renovado",
        "Monitoramento contínuo de uptime e integridade",
        "Backups automáticos semanais na nuvem",
        "Atualizações preventivas de bibliotecas e plugins",
        "Suporte técnico via WhatsApp em horário comercial",
      ],
      bestFor: "Landing pages e sites institucionais com poucas alterações mensais.",
    },
    {
      id: "profissional",
      name: "PROFISSIONAL",
      price: "Sob Orçamento",
      billing: "",
      isPopular: true,
      description: "Para empresas que atualizam informações com frequência e exigem suporte prioritário com tempo de horas dedicadas.",
      features: [
        "Tudo do plano Essencial",
        "Backups automáticos diários com restauração rápida",
        "Horas mensais inclusas para alterações de conteúdo ou design",
        "Otimização contínua de performance e velocidade",
        "Monitoramento avançado de segurança contra ameaças",
        "Suporte prioritário com SLA de resposta reduzido",
      ],
      bestFor: "Empresas com campanhas ativas, lançamentos frequentes e catálogos em evolução.",
    },
    {
      id: "performance",
      name: "PERFORMANCE & ESCALA",
      price: "Sob Orçamento",
      billing: "",
      description: "Para sistemas web críticos, e-commerces e plataformas de alto tráfego que não podem parar nem perder dados.",
      features: [
        "Tudo do plano Profissional",
        "Ambiente dedicado em nuvem com alta redundância",
        "Horas mensais inclusas de desenvolvimento e ajustes",
        "Monitoramento 24/7 com alertas em tempo real",
        "Gestão e otimização de banco de dados",
        "Relatório mensal consolidado de métricas e acessos",
        "SLA de atendimento urgente em até 2 horas",
      ],
      bestFor: "Sistemas corporativos, plataformas com transações e empresas com alta dependência digital.",
    },
  ],

  // Portfólio com Projetos Reais de Desenvolvimento e Eventos Audiovisuais
  portfolio: projectsData,

  // FAQ Audiovisual
  faqAudiovisual: [
    {
      q: "Quantas fotos receberei após a cobertura?",
      a: "A quantidade depende do pacote ou diária contratada. No pacote Registro são até 20 fotos tratadas; no pacote Conteúdo, até 40 fotos; e no pacote História, até 60 fotos. Todas passam por rigoroso tratamento de cor, iluminação e enquadramento antes da entrega.",
    },
    {
      q: "Em quanto tempo recebo o material finalizado?",
      a: "Prévia de fotos ou primeiros vídeos para stories e redes sociais podem ser entregues em até 24 a 48 horas após a captação. O acervo completo com tratamento fino e vídeo editado é entregue em média entre 5 e 7 dias úteis via link privado em alta resolução.",
    },
    {
      q: "Vocês fazem cobertura de mais de um dia de evento?",
      a: "Sim! Cobrimos eventos e feiras de múltiplos dias, inclusive a etapa prévia de montagem estrutural do estande e o pós-evento. Ajustamos o orçamento conforme o número de diárias e a quantidade de entregáveis solicitados.",
    },
    {
      q: "Posso contratar apenas fotografia ou apenas vídeo?",
      a: "Com certeza. Nossas soluções são modulares. Você pode contratar somente a cobertura fotográfica, somente a produção de vídeos ou unir as duas frentes em um pacote integrado com excelente custo-benefício.",
    },
    {
      q: "O material entregue pode ser usado livremente nas redes sociais e anúncios?",
      a: "Sim, os direitos de uso comercial para redes sociais, site institucional, catálogo, feiras e anúncios digitais estão inclusos em todas as nossas entregas, sem taxas ocultas de licenciamento.",
    },
    {
      q: "Vocês fazem vídeos institucionais além de eventos?",
      a: "Sim. Produzimos vídeos institucionais corporativos, vídeos de manifesto de marca, depoimentos de clientes (case studies) e vídeos de produtos, sempre unindo fotografia cinematográfica e roteirização estratégica.",
    },
    {
      q: "Vocês fazem cobertura da montagem de estandes sem atrapalhar a equipe técnica?",
      a: "Esse é um dos nossos maiores diferenciais. Esther possui ampla experiência de campo em pavilhões de feiras. Operamos com discrição, utilizando equipamentos leves, respeitando normas de segurança e as etapas dos montadores sem interferir na operação.",
    },
  ],

  // FAQ Desenvolvimento
  faqDesenvolvimento: [
    {
      q: "O domínio e a hospedagem estão inclusos no desenvolvimento?",
      a: "A compra do domínio (.com.br ou .com) é registrada no nome e CPF/CNPJ do cliente para garantir a sua total propriedade. O primeiro mês de hospedagem ou a configuração completa na nuvem são orientados por nós, e você pode contratar um de nossos planos de manutenção e hospedagem para cuidar de tudo continuamente.",
    },
    {
      q: "Existe mensalidade obrigatória após o desenvolvimento?",
      a: "Não é obrigatório. Após a entrega e publicação do projeto, o código é 100% seu. Porém, recomendamos fortemente nossos planos de sustentação e manutenção técnica sob medida para garantir hospedagem ultra-rápida, certificado SSL, backups automáticos, segurança e suporte contínuo.",
    },
    {
      q: "Posso solicitar alterações ou melhorias depois que o site for publicado?",
      a: "Sim! Clientes com planos mensais contam com horas mensais inclusas para ajustes e novas implementações. Caso opte por não ter plano mensal, alterações futuras podem ser contratadas por demanda avulsa.",
    },
    {
      q: "O site será verdadeiramente responsivo e funcionará bem em celulares?",
      a: "Sim. Adotamos o conceito 'Mobile First'. Mais de 70% dos acessos atuais ocorrem via smartphone, portanto o layout, botões, fontes e velocidade são rigorosamente desenhados e testados para funcionar com fluidez impecável em telas de todos os tamanhos.",
    },
    {
      q: "O site terá SEO implementado?",
      a: "Sim. Todos os nossos projetos são desenvolvidos com SEO técnico de fábrica: marcação semântica HTML5, títulos e meta descrições otimizados, Open Graph para compartilhamento elegante no WhatsApp e redes sociais, sitemap e velocidade máxima no Google PageSpeed.",
    },
    {
      q: "Posso adicionar novas páginas ou novas funcionalidades no futuro?",
      a: "Com certeza. Nossos sistemas e sites são construídos com arquitetura modular e moderna em React e tecnologias escaláveis. Isso significa que sua aplicação pode crescer no ritmo da sua empresa sem precisar ser refeita do zero.",
    },
    {
      q: "Vocês realizam manutenção em sites já existentes criados por outras pessoas?",
      a: "Sim, após uma auditoria técnica prévia do código e da hospedagem para avaliar a viabilidade de suporte e garantir o padrão de qualidade MIVLO.",
    },
    {
      q: "Por que sistemas web personalizados possuem orçamento sob medida?",
      a: "Diferente de um site com escopo pré-definido, um sistema web depende da quantidade de telas, complexidade de regras de negócio, integrações com APIs externas, estrutura de banco de dados e requisitos de segurança. Fazemos um diagnóstico inicial gratuito para apresentar uma proposta justa e transparente.",
    },
  ],
};
