import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';

/**
 * Componente SEO dinâmico para gerenciamento de metadados, canonical, OpenGraph e JSON-LD
 */
export const SEO = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  keywords,
  schema,
  noindex = false,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Título da página
    const fullTitle = title
      ? (title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`)
      : `${siteConfig.name} | ${siteConfig.tagline}`;
    document.title = fullTitle;

    // Helper para atualizar ou criar meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper para atualizar ou criar link tag
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const finalDescription = description || siteConfig.description;
    
    // Normaliza URL canônica
    const cleanPath = location.pathname.endsWith('/') && location.pathname !== '/'
      ? location.pathname.slice(0, -1)
      : location.pathname;
    const finalCanonical = canonical || `${siteConfig.siteUrl}${cleanPath === '/' ? '' : cleanPath}`;
    
    // Imagem para redes sociais
    const defaultImage = siteConfig.defaultOgImage;
    let finalImage = ogImage || defaultImage;
    if (finalImage && !finalImage.startsWith('http')) {
      finalImage = `${siteConfig.siteUrl}${finalImage.startsWith('/') ? '' : '/'}${finalImage}`;
    }

    const defaultKeywords = 'MIVLO, audiovisual São Paulo, desenvolvimento web, criação de sites, landing pages de alta conversão, fotografia de estandes, videomaker para feiras, cobertura de eventos, Esther Dourado Batista';
    const finalKeywords = keywords || defaultKeywords;

    // Metadados essenciais
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'keywords', finalKeywords);
    setMetaTag('name', 'author', siteConfig.creator);
    setMetaTag(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );
    setLinkTag('canonical', finalCanonical);

    // Open Graph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', finalImage);
    setMetaTag('property', 'og:site_name', siteConfig.name);
    setMetaTag('property', 'og:locale', 'pt_BR');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', finalImage);

    // Dados estruturados JSON-LD
    const existingScripts = document.querySelectorAll('script[data-seo-json-ld]');
    existingScripts.forEach((s) => s.remove());

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((item, index) => {
        if (!item) return;
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-json-ld', `schema-${index}`);
        script.textContent = JSON.stringify(item);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, ogType, ogImage, keywords, schema, noindex, location.pathname]);

  return null;
};
