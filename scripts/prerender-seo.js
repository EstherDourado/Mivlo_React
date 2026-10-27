import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

const SITE_URL = 'https://estherdourado.github.io/Mivlo_React';

const routes = [
  {
    path: 'audiovisual',
    title: 'MIVLO Audiovisual | Fotografia e Produção de Vídeos para Empresas',
    description: 'Fotografia corporativa, produção de vídeos cinematográficos, cobertura de estandes em feiras e conteúdo audiovisual de alto impacto em São Paulo.',
    ogImage: `${SITE_URL}/img/esther.jpg`,
    type: 'service'
  },
  {
    path: 'desenvolvimento',
    title: 'MIVLO Desenvolvimento | Sites, Landing Pages e Sistemas Web',
    description: 'Criação de sites modernos, landing pages de alta conversão, e-commerces e sistemas web sob medida. Engenharia de software com foco em Core Web Vitals.',
    ogImage: `${SITE_URL}/img/Landingpages/donritter.png`,
    type: 'service'
  },
  {
    path: 'portfolio/donritter',
    title: 'Don Ritter Pizzaria | Case MIVLO — Landing Page & Cardápio Digital',
    description: 'Desenvolvimento de landing page de alta conversão para a Don Ritter Pizzaria com cardápio interativo estruturado e pedidos rápidos via WhatsApp.',
    ogImage: `${SITE_URL}/img/Landingpages/donritter/estherdourado.github.io_DONRITTER_.png`,
    type: 'article'
  },
  {
    path: 'portfolio/manobarba',
    title: 'Mano Barba Club | Case MIVLO — Landing Page & Agendamento',
    description: 'Landing page para a barbearia Mano Barba Club com design contemporâneo, foco em conversão e agendamentos diretos no WhatsApp.',
    ogImage: `${SITE_URL}/img/Landingpages/manobarba/estherdourado.github.io_manobarba_.png`,
    type: 'article'
  },
  {
    path: 'portfolio/merengue',
    title: 'Merengue da Tati | Case MIVLO — Catálogo Digital & Pedidos',
    description: 'Catálogo digital interativo e vitrine de sobremesas para confeitaria artesanal com fluxo automatizado de pedidos no WhatsApp.',
    ogImage: `${SITE_URL}/img/Landingpages/merengue/estherdourado.github.io_merenguedatati_.png`,
    type: 'article'
  },
  {
    path: 'portfolio/lvs',
    title: 'LVS Joias Contemporâneas | Case MIVLO — E-commerce & Vitrine Digital',
    description: 'Desenvolvimento de plataforma e vitrine digital para marca de joias finas contemporâneas com visual sofisticado e foco em vendas.',
    ogImage: `${SITE_URL}/img/Landingpages/lvs/estherdourado.github.io_LVSJOIAS_.png`,
    type: 'article'
  },
  {
    path: 'portfolio/mw-cenografia',
    title: 'MW Cenografia | Case MIVLO — Portfólio de Arquitetura Promocional',
    description: 'Site corporativo e catálogo de projetos para empresa de cenografia, montagem e arquitetura de estandes para grandes feiras de negócios.',
    ogImage: `${SITE_URL}/img/Landingpages/cenografia/estherdourado.github.io_cenografia_.png`,
    type: 'article'
  },
  {
    path: 'portfolio/adere-expo',
    title: 'Adere Fitas Adesivas na APAS Show | Case Audiovisual MIVLO',
    description: 'Cobertura fotográfica e cinematográfica do estande da Adere Fitas Adesivas na APAS Show. Captação 4K, edição dinâmica e fotos de alta resolução.',
    ogImage: `${SITE_URL}/img/Adere/adere%20(43).jpg`,
    type: 'article'
  },
  {
    path: 'portfolio/irialmag-expo',
    title: 'Irialmag Brasil em Feira Industrial | Case Audiovisual MIVLO',
    description: 'Produção audiovisual corporativa e cobertura fotográfica institucional para a Irialmag Brasil em feira de tecnologia e maquinário industrial.',
    ogImage: `${SITE_URL}/img/Irialmag/irialmag%20(1).jpg`,
    type: 'article'
  },
  {
    path: 'portfolio/supriled-expo',
    title: 'Supriled em Feira de Negócios | Case Audiovisual MIVLO',
    description: 'Captação em vídeo e fotografia de alta definição para estande da Supriled Soluções em LED, destacando fluxo de visitantes e painéis luminosos.',
    ogImage: `${SITE_URL}/img/Supriled/supriled%20(1).jpg`,
    type: 'article'
  }
];

function prerenderRoutes() {
  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`[SEO Prerender] Erro: Arquivo ${indexHtmlPath} não encontrado. Execute o build do Vite primeiro.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  console.log('[SEO Prerender] Iniciando geração estática de rotas para indexadores e redes sociais...');

  let successCount = 0;

  for (const route of routes) {
    const routeDir = path.join(distDir, route.path);
    const routeHtmlPath = path.join(routeDir, 'index.html');
    const canonicalUrl = `${SITE_URL}/${route.path}`;

    // Cria diretório se não existir
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    // Injeta metadados específicos da rota no HTML estático
    let customHtml = baseHtml
      // Substitui Title
      .replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`)
      // Substitui Description
      .replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${route.description}">`)
      // Substitui Canonical
      .replace(/<link rel="canonical" href=".*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`)
      // Substitui Open Graph Tags
      .replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${route.title}">`)
      .replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${route.description}">`)
      .replace(/<meta property="og:url" content=".*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}">`)
      .replace(/<meta property="og:image" content=".*?"\s*\/?>/i, `<meta property="og:image" content="${route.ogImage}">`)
      .replace(/<meta property="og:type" content=".*?"\s*\/?>/i, `<meta property="og:type" content="${route.type}">`)
      // Substitui Twitter Cards Tags
      .replace(/<meta name="twitter:title" content=".*?"\s*\/?>/i, `<meta name="twitter:title" content="${route.title}">`)
      .replace(/<meta name="twitter:description" content=".*?"\s*\/?>/i, `<meta name="twitter:description" content="${route.description}">`)
      .replace(/<meta name="twitter:image" content=".*?"\s*\/?>/i, `<meta name="twitter:image" content="${route.ogImage}">`);

    // Injeta dados estruturados Schema.org estáticos no head
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": route.title.split('|')[0].trim(),
          "item": canonicalUrl
        }
      ]
    };

    const schemaTag = `\n    <!-- Schema.org JSON-LD Pré-renderizado -->\n    <script type="application/ld+json">\n${JSON.stringify(breadcrumbSchema, null, 2)}\n    </script>\n  </head>`;
    customHtml = customHtml.replace('</head>', schemaTag);

    fs.writeFileSync(routeHtmlPath, customHtml, 'utf-8');
    successCount++;
    console.log(`[SEO Prerender] ✓ Rota gerada: /${route.path} -> ${path.relative(distDir, routeHtmlPath)}`);
  }

  // Verifica a presença de robots.txt, sitemap.xml, llms.txt e 404.html na pasta dist
  const requiredPublicFiles = ['robots.txt', 'sitemap.xml', 'llms.txt', '404.html', 'favicon.svg'];
  for (const file of requiredPublicFiles) {
    const distFilePath = path.join(distDir, file);
    if (fs.existsSync(distFilePath)) {
      console.log(`[SEO Prerender] ✓ Arquivo essencial verificado no dist: ${file}`);
    } else {
      console.warn(`[SEO Prerender] ⚠ Aviso: ${file} não encontrado em dist/.`);
    }
  }

  console.log(`[SEO Prerender] Concluído com sucesso! ${successCount} rotas estáticas pré-renderizadas.`);
}

prerenderRoutes();
