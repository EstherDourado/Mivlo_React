export const siteConfig = {
  name: "MIVLO",
  tagline: "Sua marca em tela. Sua marca em código.",
  description: "Desenvolvimento digital e produção audiovisual para transformar ideias, projetos e experiências em soluções que geram presença.",
  creator: "Esther Dourado Batista",
  roles: "Fotógrafa, Filmmaker & Desenvolvedora Full Stack",
  contact: {
    phoneDisplay: "(11) 95399-9505",
    phoneRaw: "5511953999505",
    email: "mivloaudiovisual@gmail.com",
    instagram: "https://instagram.com/_mivlo",
    instagramHandle: "@_mivlo",
    location: "São Paulo, SP — Atendimento e cobertura nacional",
  },
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
      price: "1.250",
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
      price: "1.750",
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
      price: "2.500",
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

  // Serviços Avulsos Audiovisual (Baseados em pesquisa de mercado Brasil 2026)
  audiovisualStandalone: [
    {
      title: "Ensaio Fotográfico Corporativo",
      description: "Retratos profissionais para diretoria, equipe, crachás e posicionamento no LinkedIn.",
      startingAt: "R$ 750",
      details: "Sessão orientada de 1h30 a 2h, tratamento fino de pele e entrega de 15 a 25 fotos selecionadas.",
    },
    {
      title: "Cobertura Fotográfica de Eventos",
      description: "Registro de palestras, feiras, premiações e estandes por hora ou período.",
      startingAt: "R$ 900",
      details: "Período de 4 horas de captação contínua com tratamento ágil de todas as imagens aprovadas.",
    },
    {
      title: "Diária de Videomaker / Captação",
      description: "Captação técnica em cinema 4K com iluminação móvel e áudio profissional sem fio.",
      startingAt: "R$ 1.400",
      details: "Até 8 horas de gravação no local com equipamento de alta gama e olhar cinematográfico.",
    },
    {
      title: "Storymaker / Cobertura em Tempo Real",
      description: "Criação, captação e postagem de stories e cortes dinâmicos durante o próprio evento.",
      startingAt: "R$ 650",
      details: "Agilidade para manter as redes sociais ativas com materiais de alto padrão durante o evento.",
    },
    {
      title: "Vídeo Institucional / Aftermovie",
      description: "Filme narrativo de 1 a 3 minutos com trilha sonora licenciada, color grading e roteiro.",
      startingAt: "R$ 2.800",
      details: "Ideal para apresentação de empresas, portfólio de arquitetura ou resumo de grandes feiras.",
    },
    {
      title: "Edição de Vídeo Avulsa",
      description: "Pós-produção de materiais pré-gravados: cortes dinâmicos, sonorização e legendagem.",
      startingAt: "R$ 450",
      details: "Por vídeo de até 90 segundos com 2 rodadas de ajustes inclusas.",
    },
  ],

  // Pacotes de Desenvolvimento Web
  devServices: [
    {
      id: "landing-page",
      name: "Landing Page Personalizada",
      startingAt: "R$ 1.500",
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
      startingAt: "R$ 3.500",
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

  // Planos de Manutenção e Hospedagem Recorrente (Pesquisa Mercado 2026)
  maintenancePlans: [
    {
      id: "essencial",
      name: "ESSENCIAL",
      price: "149",
      billing: "/mês",
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
      price: "289",
      billing: "/mês",
      isPopular: true,
      description: "Para empresas que atualizam informações com frequência e exigem suporte prioritário com tempo de horas dedicadas.",
      features: [
        "Tudo do plano Essencial",
        "Backups automáticos diários com restauração rápida",
        "Até 3 horas mensais inclusas para alterações de conteúdo ou design",
        "Otimização contínua de performance e velocidade",
        "Monitoramento avançado de segurança contra ameaças",
        "Suporte prioritário com SLA de resposta reduzido",
      ],
      bestFor: "Empresas com campanhas ativas, lançamentos frequentes e catálogos em evolução.",
    },
    {
      id: "performance",
      name: "PERFORMANCE & ESCALA",
      price: "549",
      billing: "/mês",
      description: "Para sistemas web críticos, e-commerces e plataformas de alto tráfego que não podem parar nem perder dados.",
      features: [
        "Tudo do plano Profissional",
        "Ambiente dedicado em nuvem com alta redundância",
        "Até 8 horas mensais inclusas de desenvolvimento e ajustes",
        "Monitoramento 24/7 com alertas em tempo real",
        "Gestão e otimização de banco de dados",
        "Relatório mensal consolidado de métricas e acessos",
        "SLA de atendimento urgente em até 2 horas",
      ],
      bestFor: "Sistemas corporativos, plataformas com transações e empresas com alta dependência digital.",
    },
  ],

  // Portfólio Rico com Dados Reais
  portfolio: [
    {
      id: "agromaq-expo",
      title: "AgroMaq — Cobertura de Estande & Bastidores",
      category: "Audiovisual",
      subCategory: "Vídeo",
      tags: ["Audiovisual", "Vídeo", "Estandes"],
      summary: "Cobertura completa da montagem até a feira com aftermovie 4K e 4 reels dinâmicos.",
      coverImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
      client: "AgroMaq Soluções",
      year: "2025",
      type: "audiovisual",
      techs: ["Sony Cinema Line", "Gimbal Ronin", "DaVinci Resolve", "Drone 4K"],
      description: "Acompanhamos 48 horas de montagem e 4 dias de feira agrícola. Produzimos um vídeo institucional de 2 minutos que foi exibido no painel de LED do próprio estande, além de um acervo com 50 fotos de alta qualidade e 4 Reels de altíssimo engajamento.",
      metrics: ["+140k visualizações nas redes", "Banco de 60 fotos entregue em 72h", "Material usado para vendas pós-feira"],
      gallery: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80"
      ]
    },
    {
      id: "lumina-clinica",
      title: "Lumina Estética — Landing Page de Alta Conversão",
      category: "Tecnologia",
      subCategory: "Web",
      tags: ["Tecnologia", "Web", "Landing Page"],
      summary: "Landing page personalizada para captação de agendamentos com carregamento em 0.8s.",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      client: "Clínica Lumina",
      year: "2025",
      type: "web",
      techs: ["React", "Tailwind CSS", "Vite", "EmailJS", "Meta Pixel"],
      description: "Desenvolvimento de página de captura de alto impacto visual, integrando agendamento direto com a recepção via WhatsApp com mensagens rastreadas, garantindo taxa de conversão 38% superior à média do segmento médico.",
      metrics: ["Score 98 no Google Lighthouse", "+38% de conversão de agendamentos", "Tempo de carregamento de 850ms"],
      liveUrl: "https://mivlo.com.br",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
      ]
    },
    {
      id: "vortice-arquitetura",
      title: "Vórtice Arquitetura — Fotografia & Catálogo Estrutural",
      category: "Audiovisual",
      subCategory: "Fotografia",
      tags: ["Audiovisual", "Fotografia", "Arquitetura"],
      summary: "Fotografia arquitetônica refinada de ambientes corporativos e estandes modernos.",
      coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      client: "Vórtice Arquitetura Corporativa",
      year: "2025",
      type: "audiovisual",
      techs: ["Lentes Tilt-Shift", "Lightroom Classic", "HDR Fotométrico"],
      description: "Ensaio fotográfico minucioso destacando texturas, iluminação de marcenaria, linhas retas e fluxo humano em três projetos corporativos de destaque em São Paulo.",
      metrics: ["32 fotos finais entregues com pós-produção fina", "Utilizado para inscrição em premiação", "Acervo para catálogo impresso e digital"],
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80"
      ]
    },
    {
      id: "synapse-erp",
      title: "Synapse Hub — Sistema de Gestão & Dashboard Operacional",
      category: "Tecnologia",
      subCategory: "Web",
      tags: ["Tecnologia", "Web", "Sistemas"],
      summary: "Sistema web customizado para controle financeiro, faturamento e relatórios executivos.",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      client: "Synapse Log",
      year: "2026",
      type: "web",
      techs: ["React", "C# .NET", "SQL Server", "Tailwind CSS", "Recharts"],
      description: "Aplicação web construída sob medida com controle granular de perfis, auditoria de movimentações, emissão de relatórios automatizados em PDF e gráficos interativos de previsão orçamentária.",
      metrics: ["Redução de 65% no tempo de fechamento mensal", "Integração segura com APIs bancárias", "100% de disponibilidade operacional"],
      liveUrl: "https://mivlo.com.br",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
      ]
    },
    {
      id: "pulse-fest",
      title: "Pulse Tech Summit — Storymaker & Aftermovie Oficial",
      category: "Audiovisual",
      subCategory: "Vídeo",
      tags: ["Audiovisual", "Vídeo", "Eventos"],
      summary: "Cobertura ágil com entrega de reels no mesmo dia e filme comemorativo.",
      coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
      client: "Pulse Summit",
      year: "2025",
      type: "audiovisual",
      techs: ["Câmeras 4K 120fps", "Edição Mobile & Desktop", "Áudio sem Fio"],
      description: "Equipe atuando em tempo real com captação, edição rápida e publicação de 12 stories e 3 reels durante as palestras e networking, além da edição de aftermovie cinematográfico de 90 segundos entregue em 48 horas.",
      metrics: ["Mais de 80 mil interações no Instagram", "Engajamento em tempo real ampliado em 300%", "Gravação de 8 depoimentos de palestrantes"],
      gallery: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
      ]
    },
    {
      id: "artisan-advocacia",
      title: "Artisan Law — Portal Institucional Corporativo",
      category: "Tecnologia",
      subCategory: "Web",
      tags: ["Tecnologia", "Web", "Institucional"],
      summary: "Site institucional sóbrio e elegante com arquitetura multilíngue e SEO focado em B2B.",
      coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      client: "Artisan Advocacia",
      year: "2025",
      type: "web",
      techs: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Vite"],
      description: "Portal institucional focado em transmitir credibilidade jurídica internacional, estruturado com seções de áreas de atuação, publicações de artigos, time de sócios e canal seguro de agendamento de consultas.",
      metrics: ["Ranqueamento na primeira página para 5 palavras-chave", "Tempo de resposta inferior a 600ms", "Design refinado e minimalista"],
      liveUrl: "https://mivlo.com.br",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
      ]
    }
  ],

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
      a: "Não é obrigatório. Após a entrega e publicação do projeto, o código é 100% seu. Porém, recomendamos fortemente um dos nossos planos mensais de manutenção (a partir de R$ 149/mês) para garantir hospedagem ultra-rápida, certificado SSL, backups automáticos, segurança e suporte contínuo.",
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
