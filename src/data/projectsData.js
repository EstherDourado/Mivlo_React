import { asset } from '../utils/asset';

export const projectsData = [
  // --- DESENVOLVIMENTO WEB & LANDING PAGES (PASTA LANDINGPAGE) ---
  {
    id: "donritter",
    title: "Don Ritter — Pizzaria Artesanal & Delivery",
    client: "Don Ritter Pizzaria",
    category: "Gastronomia & Delivery",
    subCategory: "Web",
    tags: ["Tecnologia", "Web", "Landing Page", "Gastronomia"],
    type: "web",
    year: "2026",
    tagline: "Landing page gastronômica de alta conversão com cardápio interativo estruturado e pedidos rápidos via WhatsApp.",
    coverImage: asset("img/Landingpages/donritter/estherdourado.github.io_DONRITTER_.png"),
    desktopImage: asset("img/Landingpages/donritter/estherdourado.github.io_DONRITTER_.png"),
    mobileImage: asset("img/Landingpages/donritter/estherdourado.github.io_DONRITTER_mobile.png"),
    logo: asset("img/Landingpages/donritter/LOGO 01 - BRANCA .png"),
    liveUrl: "https://estherdourado.github.io/DONRITTER/",
    githubUrl: "https://github.com/EstherDourado/DONRITTER",
    techs: ["HTML5 Semântico", "Tailwind CSS", "JavaScript ES6+", "WhatsApp API", "UI/UX Mobile First", "Google Lighthouse 98+"],
    about: {
      business: "A Don Ritter é uma pizzaria artesanal sediada em Cascavel/PR, reconhecida pela excelência em massas de fermentação lenta, ingredientes nobres e pelo tradicional rodízio de pizzas doces e salgadas.",
      objective: "O objetivo principal foi criar uma landing page com forte apelo visual gastronômico, capaz de substituir cardápios em PDF pesados por uma experiência ágil, e canalizar os pedidos diretamente para o WhatsApp de atendimento sem atritos.",
      design: "A direção de arte adotou uma paleta dark warm (#16110f com acentos em laranja brasa e âmbar), combinando a tipografia marcante Bebas Neue nos títulos com a legibilidade impecável da Inter nos textos. A fotografia dos produtos recebeu tratamento de destaque com iluminação quente que desperta o apetite.",
      features: "Cardápio interativo segmentado por categorias (Tradicionais, Especiais, Doces, Bebidas), seção de destaque para o rodízio presencial, cálculo visual de opções e botão flutuante inteligente de pedidos com mensagem pré-configurada.",
      ux: "Mais de 85% dos clientes de delivery acessam via smartphone. A interface foi construída em Mobile First: o usuário visualiza as pizzas em fotos nítidas e com apenas dois toques inicia a conversa no WhatsApp já com o pedido formulado."
    },
    featuresList: [
      {
        title: "Cardápio Digital Interativo",
        desc: "Categorização intuitiva de sabores salgados, doces e bebidas com carregamento instantâneo."
      },
      {
        title: "Conversão Direta no WhatsApp",
        desc: "Integração nativa que direciona o cliente para o atendente com mensagem estruturada."
      },
      {
        title: "Arquitetura Mobile First",
        desc: "Design e botões de toque calibrados especificamente para a pegada do smartphone."
      },
      {
        title: "SEO Local Otimizado",
        desc: "Meta tags e dados estruturados para atrair clientes em busca de delivery na região de Cascavel."
      }
    ],
    metrics: [
      "Carregamento inferior a 0.8s em redes móveis 4G",
      "Fluxo de pedidos direto no WhatsApp sem atrito de cadastro",
      "Design 100% autoral alinhado à identidade visual da pizzaria"
    ],
    gallery: [
      asset("img/Landingpages/donritter/estherdourado.github.io_DONRITTER_.png"),
      asset("img/Landingpages/donritter/estherdourado.github.io_DONRITTER_mobile.png")
    ]
  },
  {
    id: "manobarba",
    title: "Mano Barba — Barbearia Contemporânea & Club",
    client: "Mano Barba Club",
    category: "Serviços & Barbearia",
    subCategory: "Web",
    tags: ["Tecnologia", "Web", "Landing Page", "Serviços"],
    type: "web",
    year: "2026",
    tagline: "Presença digital marcante para barbearia club com catálogo de serviços e agendamento online rápido.",
    coverImage: asset("img/Landingpages/manobarba/estherdourado.github.io_Mano-Barba_.png"),
    desktopImage: asset("img/Landingpages/manobarba/estherdourado.github.io_Mano-Barba_.png"),
    mobileImage: asset("img/Landingpages/manobarba/estherdourado.github.io_Mano-Barba_mobile.png"),
    logo: asset("img/Landingpages/manobarba/Logo_manobarba_hero.png"),
    liveUrl: "https://estherdourado.github.io/Mano-Barba/",
    githubUrl: "https://github.com/EstherDourado/Mano-Barba",
    techs: ["HTML5", "CSS3 Moderno", "JavaScript", "Agendamento WhatsApp", "Design Responsivo", "SEO Local"],
    about: {
      business: "A Mano Barba é uma barbearia contemporânea que combina a tradição da navalha e toalha quente com a sofisticação de um espaço de convivência masculino, oferecendo cortes modernos, tratamento de barba e cuidados capilares.",
      objective: "Criar uma presença online imersiva que transmitisse o ambiente premium da barbearia, apresentasse a tabela clara de serviços e tornasse o agendamento de horários uma tarefa rápida de poucos segundos.",
      design: "A estética aposta em tons escuros refinados, tipografia vintage moderna e contrastes dourados que evocam a atmosfera clássica de barbearias de alto padrão. Cada serviço é ilustrado e descrito com precisão.",
      features: "Tabela de serviços e combos com tempos médios de cadeira, apresentação dos barbeiros e especialidades, mapa de localização interativo e CTA de agendamento via WhatsApp.",
      ux: "A navegação prioriza o botão de agendamento em posição de destaque na barra fixa inferior e superior mobile, permitindo ao cliente escolher o serviço e ser direcionado para o contato em instantes."
    },
    featuresList: [
      {
        title: "Tabela de Serviços Detalhada",
        desc: "Apresentação clara de cortes, barba, tratamentos e combos com especificações e duração."
      },
      {
        title: "Agendamento sem Fricção",
        desc: "Links rápidos para agendamento que reduzem dúvidas e otimizam a agenda da equipe."
      },
      {
        title: "Atmosfera Premium Visual",
        desc: "Identidade visual escura e elegante que posiciona a barbearia como clube exclusivo."
      },
      {
        title: "Localização & Contato Ágeis",
        desc: "Mapa de acesso, horários de atendimento e canais sociais centralizados."
      }
    ],
    metrics: [
      "Aumento na taxa de agendamentos diretos pelo celular",
      "Redução no tempo de dúvidas sobre serviços e horários",
      "Design autoral alinhado à identidade visual da barbearia"
    ],
    gallery: [
      asset("img/Landingpages/manobarba/estherdourado.github.io_Mano-Barba_.png"),
      asset("img/Landingpages/manobarba/estherdourado.github.io_Mano-Barba_mobile.png")
    ]
  },
  {
    id: "merengue",
    title: "Merengue — Confeitaria & Ateliê de Doces Finos",
    client: "Merengue Confeitaria",
    category: "Gastronomia & Confeitaria",
    subCategory: "Web",
    tags: ["Tecnologia", "Web", "Landing Page", "Gastronomia"],
    type: "web",
    year: "2026",
    tagline: "Vitrine digital doce e acolhedora com catálogo de tortas, bolos comemorativos e encomendas personalizadas.",
    coverImage: asset("img/Landingpages/merengue/estherdourado.github.io_MERENGUE_.png"),
    desktopImage: asset("img/Landingpages/merengue/estherdourado.github.io_MERENGUE_.png"),
    mobileImage: asset("img/Landingpages/merengue/estherdourado.github.io_MERENGUE_mobile.png"),
    logo: asset("img/Landingpages/merengue/logo_nova.png"),
    extraImage: asset("img/Landingpages/merengue/merengue-loja2-corrected.jpg"),
    liveUrl: "https://estherdourado.github.io/MERENGUE/",
    githubUrl: "https://github.com/EstherDourado/MERENGUE",
    techs: ["HTML5", "Tailwind CSS", "JavaScript", "Vitrine Interativa", "WhatsApp Encomendas", "SEO On-Page"],
    about: {
      business: "O Ateliê Merengue é especializado em confeitaria artística, bolos festivos sob medida, tortas artesanais e doces finos para aniversários, casamentos e celebrações corporativas.",
      objective: "Desenvolver uma vitrine online elegante que valorizasse a delicadeza e o frescor das criações, permitindo que os clientes conheçam os recheios, tamanhos recomendados e solicitem encomendas personalizadas.",
      design: "A paleta utiliza tons quentes e suaves, tipografia com curvas elegantes e acabamento editorial. O protagonismo visual é das sobremesas, fotografadas em alta resolução para gerar conexão emocional imediata.",
      features: "Guia visual de tamanhos e porções de bolos, catálogo sazonal com descrição de recheios, galeria de celebrações atendidas e integração para encomendas personalizadas no WhatsApp.",
      ux: "O cliente encontra com clareza o tamanho adequado para a quantidade de convidados do evento, evitando erros no pedido e acelerando o fechamento do orçamento com a confeiteira."
    },
    featuresList: [
      {
        title: "Guia Visual de Porções",
        desc: "Orientação transparente de peso e rendimento de fatias para facilitar a escolha do cliente."
      },
      {
        title: "Catálogo de Recheios & Sabores",
        desc: "Descritivo refinado de ingredientes nobres que valorizam o processo artesanal."
      },
      {
        title: "Canal de Encomendas Direto",
        desc: "Fluxo direcionado para o WhatsApp com formulário de preferências de data e tema."
      },
      {
        title: "Galeria de Eventos Reais",
        desc: "Prova social visual com fotos de celebrações que comprovam a qualidade das entregas."
      }
    ],
    metrics: [
      "Experiência visual rica que valoriza o produto artesanal",
      "Canal direto para orçamentos de bolos personalizados",
      "Layout leve com alta taxa de permanência no catálogo"
    ],
    gallery: [
      asset("img/Landingpages/merengue/estherdourado.github.io_MERENGUE_.png"),
      asset("img/Landingpages/merengue/estherdourado.github.io_MERENGUE_mobile.png"),
      asset("img/Landingpages/merengue/merengue-loja2-corrected.jpg")
    ]
  },
  {
    id: "lvs",
    title: "LVS Cosméticos — Linha Profissional de Tratamento Capilar",
    client: "LVS Cosméticos",
    category: "Beleza & Cosméticos",
    subCategory: "Web",
    tags: ["Tecnologia", "Web", "Landing Page", "Cosméticos"],
    type: "web",
    year: "2026",
    tagline: "Página institucional e catálogo de produtos capilares de alta tecnologia e cronograma intensivo.",
    coverImage: asset("img/Landingpages/LVS/estherdourado.github.io_LVS_.png"),
    desktopImage: asset("img/Landingpages/LVS/estherdourado.github.io_LVS_.png"),
    mobileImage: asset("img/Landingpages/LVS/estherdourado.github.io_LVS_ mobile.png"),
    logo: asset("img/Landingpages/LVS/LOGO PNG.png"),
    extraImage: asset("img/Landingpages/LVS/estherdourado.github.io_LVS_produtos.html.png"),
    liveUrl: "https://estherdourado.github.io/LVS/",
    githubUrl: "https://github.com/EstherDourado/LVS",
    techs: ["HTML5", "CSS3 / Flexbox", "JavaScript", "Catálogo Multipágina", "Design Editorial", "Mobile First"],
    about: {
      business: "A LVS Cosméticos desenvolve fórmulas avançadas de tratamento capilar profissional para salões de beleza e consumidores que buscam recuperação intensiva dos fios, brilho e saúde capilar.",
      objective: "Construir uma presença digital de prestígio e autoridade para a marca, organizando o portfólio de produtos e apresentando os benefícios científicos de cada linha de tratamento.",
      design: "A direção de arte combina minimalismo contemporâneo, tipografia serifada/moderna nos títulos e espaçamentos generosos que reforçam a percepção de produto cosmético premium.",
      features: "Apresentação detalhada das linhas de Cronograma Capilar, página dedicada de produtos (produtos.html) com especificações técnicas e modo de uso, além de canal direto para distribuidores e salões parceiros.",
      ux: "Navegação fluida que conduz o visitante desde a apresentação da proposta da marca até a escolha da linha ideal para seu tipo de cabelo, com botões de contato para compra rápida."
    },
    featuresList: [
      {
        title: "Apresentação do Cronograma Capilar",
        desc: "Orientação didática para as etapas de hidratação, nutrição e reconstrução."
      },
      {
        title: "Página Exclusiva de Produtos",
        desc: "Estrutura dedicada com especificações técnicas, ativos e modo de aplicação."
      },
      {
        title: "Canal B2B para Salões & Distribuidores",
        desc: "Área focada em atrair parcerias comerciais e distribuidores regionais."
      },
      {
        title: "Design Editorial Sofisticado",
        desc: "Composição limpa com bastante espaço negativo que valoriza a embalagem dos produtos."
      }
    ],
    metrics: [
      "Arquitetura clara conectando página principal e catálogo",
      "Posicionamento de marca profissional de alta gama",
      "Compatibilidade total com dispositivos móveis e desktops"
    ],
    gallery: [
      asset("img/Landingpages/LVS/estherdourado.github.io_LVS_.png"),
      asset("img/Landingpages/LVS/estherdourado.github.io_LVS_ mobile.png"),
      asset("img/Landingpages/LVS/estherdourado.github.io_LVS_produtos.html.png")
    ]
  },
  {
    id: "mw-cenografia",
    title: "MW Montagem de Estandes & Cenografia Promocional",
    client: "MW Cenografia & Estandes",
    category: "Cenografia & Arquitetura B2B",
    subCategory: "Web",
    tags: ["Tecnologia", "Web", "Landing Page", "3D / Three.js"],
    type: "web",
    year: "2026",
    tagline: "Landing page corporativa B2B para montagem de estandes com elementos 3D interativos em Three.js.",
    coverImage: asset("img/projects/mw-preview.jpg"),
    desktopImage: asset("img/projects/mw-preview.jpg"),
    mobileImage: null,
    logo: null,
    liveUrl: "https://github.com/EstherDourado/MW_Landingpage",
    githubUrl: "https://github.com/EstherDourado/MW_Landingpage",
    techs: ["HTML5", "Tailwind CSS", "Three.js 3D", "JavaScript", "Modelagem Interativa", "SEO Corporativo"],
    about: {
      business: "A MW Cenografia é especialista na montagem de estandes promocionais, cenografia para grandes pavilhões de exposições e arquitetura comercial para empresas líderes em feiras de negócios.",
      objective: "Demonstrar o poder técnico e criativo da montadora através de recursos 3D imersivos, captando orçamentos de empresas expositoras com meses de antecedência às feiras.",
      design: "Linguagem corporativa imersiva com visual escuro sofisticado e elementos 3D em tempo real que demonstram o domínio espacial e arquitetônico da equipe.",
      features: "Canvas interativo 3D com Three.js, vitrine de estandes executados e formulário de orçamento de metragem.",
      ux: "Geração de autoridade instantânea para clientes B2B que tomam decisões de alto investimento."
    },
    featuresList: [
      {
        title: "Interatividade 3D com Three.js",
        desc: "Visualização tridimensional interativa direto no navegador web sem plugins."
      },
      {
        title: "Captação Qualificada B2B",
        desc: "Formulário segmentado por metragem de estande, feira e pavilhão."
      },
      {
        title: "Portfólio de Obras Executadas",
        desc: "Apresentação de estandes reais entregues em eventos de grande porte."
      },
      {
        title: "Performance & Otimização",
        desc: "Carregamento leve dos modelos 3D garantindo velocidade máxima."
      }
    ],
    metrics: [
      "Renderização 3D interativa fluida no navegador",
      "Captação qualificada de marcas expositoras",
      "Design de impacto para feiras nacionais e internacionais"
    ],
    gallery: [
      asset("img/projects/mw-preview.jpg")
    ]
  },

  // --- AUDIOVISUAL / FOTOGRAFIA DE EVENTOS & ESTANDES ---
  {
    id: "adere-expo",
    title: "Adere — Cobertura Fotográfica de Estande & Arquitetura",
    client: "Adere Fitas Adesivas",
    category: "Fotografia de Estandes",
    subCategory: "Fotografia",
    tags: ["Audiovisual", "Fotografia", "Estandes", "Eventos"],
    type: "audiovisual",
    year: "2026",
    tagline: "Cobertura fotográfica técnica e imersiva do estande da Adere, destacando iluminação cenográfica e fluxo de negócios.",
    coverImage: asset("img/Adere/20260803_101508.jpg"),
    desktopImage: asset("img/Adere/20260803_101508.jpg"),
    mobileImage: null,
    logo: null,
    eventFolder: "Adere",
    photoCount: 6,
    techs: ["Fotografia Técnica", "Lightroom Classic", "Composição Arquitetônica", "Perspectiva Corrigida", "4K UHD"],
    about: {
      business: "A Adere é uma das principais indústrias de fitas adesivas do Brasil, marcando presença de destaque em feiras industriais e de varejo em pavilhões de grande porte.",
      objective: "Documentar o estande completo em seus momentos de montagem finalizada, destacando a comunicação visual luminosa, a exposição dos produtos e a recepção do público.",
      design: "Fotografia com enquadramentos rigorosos de linhas retas e correção de perspectiva, garantindo que as paredes, pilares e testeiras não fiquem distorcidos.",
      features: "Acervo de 6 fotografias tratadas individualmente com color grading balanceado, pronto para uso em catálogos, relatórios anuais e redes sociais.",
      ux: "Entrega ágil e em altíssima resolução para abastecer o time de marketing e vendas da marca com materiais de autoridade."
    },
    featuresList: [
      {
        title: "Correção de Perspectiva Arquitetônica",
        desc: "Linhas retas rigorosas que valorizam a geometria do estande montado."
      },
      {
        title: "Color Grading Calibrado",
        desc: "Harmonização de tons que preserva a identidade visual vermelha e branca da Adere."
      },
      {
        title: "Enquadramentos Amplos & Detalhes",
        desc: "Captura panorâmica da estrutura combinada a planos detalhados de marcenaria."
      },
      {
        title: "Resolução Nativa 4K UHD",
        desc: "Arquivos preparados para impressões de grande formato e mídias digitais."
      }
    ],
    metrics: [
      "Grade completa com 6 fotografias de alta resolução",
      "Tratamento de cor e iluminação calibrado",
      "Acervo corporativo para comunicação e vendas"
    ],
    gallery: [
      asset("img/Adere/20260803_100903.jpg"),
      asset("img/Adere/20260803_101256.jpg"),
      asset("img/Adere/20260803_101508.jpg"),
      asset("img/Adere/20260803_102842.jpg"),
      asset("img/Adere/20260803_102902.jpg"),
      asset("img/Adere/20260803_102959.jpg")
    ]
  },
  {
    id: "irialmag-expo",
    title: "Irialmag — Presença Corporativa & Estrutura em Feira",
    client: "Irialmag Indústria",
    category: "Fotografia Corporativa",
    subCategory: "Fotografia",
    tags: ["Audiovisual", "Fotografia", "Eventos"],
    type: "audiovisual",
    year: "2026",
    tagline: "Registro fotográfico minucioso capturando acabamento estrutural, sinalização e a dinâmica do estande da Irialmag.",
    coverImage: asset("img/Irialmag/20260704_084835.jpg"),
    desktopImage: asset("img/Irialmag/20260704_084835.jpg"),
    mobileImage: null,
    logo: null,
    eventFolder: "Irialmag",
    photoCount: 6,
    techs: ["Fotografia Corporativa", "Linhas Retas", "Color Grading", "Fotometria Balanceada", "4K UHD"],
    about: {
      business: "A Irialmag atua no segmento industrial, expondo maquinários e soluções para empresas em congressos e feiras especializadas.",
      objective: "Registrar a presença da marca no pavilhão de feiras, evidenciando o design do estande, totens informativos e a circulação de clientes e parceiros.",
      design: "Composição centrada na clareza dos espaços e na valorização das marcas parceiras presentes na estrutura.",
      features: "Acervo fotográfico tratado com balanço de branco preciso e riqueza de detalhes mesmo sob a iluminação mista de pavilhões.",
      ux: "Imagens prontas para publicação e apresentação institucional a futuros clientes e investidores."
    },
    featuresList: [
      {
        title: "Destaque de Testeiras & Branding",
        desc: "Captação da sinalização corporativa com contraste e nitidez superiores."
      },
      {
        title: "Equilíbrio de Luz Mista",
        desc: "Tratamento que anula aberrações cromáticas comuns em galpões de feiras."
      },
      {
        title: "Registro de Convivência & Negócios",
        desc: "Imagens que documentam reuniões e atendimento a visitantes no estande."
      },
      {
        title: "Acervo para Catálogo Institucional",
        desc: "Fotografias prontas para alimentar apresentações corporativas e LinkedIn."
      }
    ],
    metrics: [
      "Grade completa com 6 fotografias em alta definição",
      "Destaque de branding e sinalização de marca",
      "Banco de imagens para catálogo institucional"
    ],
    gallery: [
      asset("img/Irialmag/20260704_084835.jpg"),
      asset("img/Irialmag/20260704_085022.jpg"),
      asset("img/Irialmag/20260704_085100.jpg"),
      asset("img/Irialmag/20260704_085512.jpg"),
      asset("img/Irialmag/20260704_091201(0).jpg"),
      asset("img/Irialmag/20260704_094630.jpg")
    ]
  },
  {
    id: "supriled-expo",
    title: "Supriled — Iluminação de LED & Estande Tecnológico",
    client: "Supriled Iluminação",
    category: "Fotografia de Iluminação & LED",
    subCategory: "Fotografia",
    tags: ["Audiovisual", "Fotografia", "Estandes", "Tecnologia"],
    type: "audiovisual",
    year: "2026",
    tagline: "Captação fotográfica técnica com calibração precisa de fotometria para fitas e módulos de LED sem estourar as luzes.",
    coverImage: asset("img/Supriled/20260818_083714.jpg"),
    desktopImage: asset("img/Supriled/20260818_083714.jpg"),
    mobileImage: null,
    logo: null,
    eventFolder: "Supriled",
    photoCount: 6,
    techs: ["Fotometria de LED", "Fotografia Indoor / Noturna", "HDR Arquitetônico", "Pós-Produção Fina", "4K UHD"],
    about: {
      business: "A Supriled é fabricante e distribuidora referência em fitas, módulos e perfis de iluminação LED de alta precisão e eficiência.",
      objective: "Superar o desafio técnico crítico da fotografia de LED: equilibrar a luminosidade intensa das fitas e luminárias com a iluminação ambiente do estande sem gerar superexposição ou banding.",
      design: "Captura em HDR com calibração de temperatura de cor (Kelvin) para registrar as nuances de tons quentes e frios dos produtos com fidelidade visual absoluta.",
      features: "Grade com 6 imagens calibradas demonstrando a fidelidade cromática e temperatura de cor dos produtos Supriled.",
      ux: "Material de alto impacto para catálogo impresso, Instagram comercial e portfólio luminotécnico da marca."
    },
    featuresList: [
      {
        title: "Calibração Fotométrica de LED",
        desc: "Controle técnico para manter a textura e definição dos pontos de luz acesos."
      },
      {
        title: "Fidelidade de Temperatura de Cor",
        desc: "Preservação exata dos kelvins (2700K a 6500K) das fitas expostas."
      },
      {
        title: "HDR Sem Ruído Digital",
        desc: "Fusão de exposições que preserva sombras ricas e altas luzes sem granulação."
      },
      {
        title: "Valorização da Ambientação",
        desc: "Enquadramentos que mostram a aplicação prática dos LEDs no design de interiores."
      }
    ],
    metrics: [
      "Grade completa com 6 fotografias em alta resolução calibradas",
      "Calibração precisa de luzes e cores de LED",
      "Material de alto impacto para catálogo e Instagram"
    ],
    gallery: [
      asset("img/Supriled/20260818_074058.jpg"),
      asset("img/Supriled/20260818_074155.jpg"),
      asset("img/Supriled/20260818_083714.jpg"),
      asset("img/Supriled/20260818_083737.jpg"),
      asset("img/Supriled/20260818_083759.jpg"),
      asset("img/Supriled/20260818_085824.jpg")
    ]
  }
];
