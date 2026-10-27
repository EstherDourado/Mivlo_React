import { siteConfig } from '../config/site';

/**
 * Retorna os dados estruturados Schema.org para a Organização MIVLO
 */
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: siteConfig.name,
  alternateName: 'MIVLO Media & Tech',
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/img/LOGO%20MAIS%20GROSSINHA%2002.png`,
  image: siteConfig.defaultOgImage,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  telephone: `+${siteConfig.contact.phoneRaw}`,
  priceRange: '$$',
  founder: {
    '@type': 'Person',
    name: siteConfig.creator,
    jobTitle: siteConfig.roles,
    image: `${siteConfig.siteUrl}/img/esther.jpg`,
    sameAs: [
      siteConfig.contact.instagram,
      siteConfig.contact.github
    ]
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR'
  },
  sameAs: [
    siteConfig.contact.instagram,
    siteConfig.contact.github
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Brasil'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços MIVLO',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Desenvolvimento de Landing Pages e Sites',
          description: 'Criação de páginas de alta conversão, portais e sistemas sob medida com design autoral e ultra performance.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Produção Audiovisual e Cobertura de Eventos',
          description: 'Fotografia profissional corporativa, vídeos institucionais 4K e cobertura especializada para feiras e estandes.'
        }
      }
    ]
  }
});

/**
 * Retorna os dados estruturados do site
 */
export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  inLanguage: 'pt-BR'
});

/**
 * Retorna os dados estruturados de um serviço específico (Audiovisual ou Desenvolvimento)
 */
export const getServiceSchema = (serviceCategory) => {
  const isDev = serviceCategory === 'desenvolvimento';
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isDev ? 'Desenvolvimento Web & Soluções Digitais' : 'Produção Audiovisual & Fotografia Corporativa',
    serviceType: isDev ? 'Web Development' : 'Audiovisual Production',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl
    },
    description: isDev
      ? 'Criação de landing pages persuasivas, sites institucionais otimizados para SEO e sistemas web sob medida.'
      : 'Captação fotográfica profissional, vídeos institucionais em 4K e cobertura de eventos e estandes em feiras.',
    areaServed: {
      '@type': 'Country',
      name: 'Brasil'
    }
  };
};

/**
 * Retorna o esquema BreadcrumbList para navegação hierárquica
 * @param {Array<{ name: string, url: string }>} items
 */
export const getBreadcrumbSchema = (items = []) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${siteConfig.siteUrl}${item.url}`
  }))
});

/**
 * Retorna dados estruturados de um projeto do portfólio
 */
export const getProjectSchema = (project) => {
  const isWeb = project.type === 'web';
  return {
    '@context': 'https://schema.org',
    '@type': isWeb ? 'SoftwareApplication' : 'CreativeWork',
    name: project.title,
    headline: project.tagline,
    description: project.about?.objective || project.tagline,
    image: project.coverImage?.startsWith('http') ? project.coverImage : `${siteConfig.siteUrl}${project.coverImage?.startsWith('/') ? '' : '/'}${project.coverImage || 'img/esther.jpg'}`,
    datePublished: project.year,
    creator: {
      '@type': 'Person',
      name: siteConfig.creator
    },
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl
    },
    ...(isWeb && {
      applicationCategory: 'WebApplication',
      operatingSystem: 'All'
    })
  };
};

/**
 * Retorna dados estruturados de FAQ (FAQPage)
 * @param {Array<{ q: string, a: string }>} faqItems
 */
export const getFAQSchema = (faqItems = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a
    }
  }))
});
