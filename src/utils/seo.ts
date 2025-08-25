/**
 * SEO utility functions for JellyFish Nostr services
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

/**
 * Default SEO configuration for JellyFish
 */
export const DEFAULT_SEO: SEOData = {
  title: "JellyFish - Premium Nostr Relay & NIP-05 Services | WoT Protected",
  description: "Professional Nostr infrastructure with spam-free WoT protected relay and premium @nostr.eco NIP-05 addresses. Join the decentralized social revolution with JellyFish.",
  keywords: "Nostr, Jellyfish, Jellyfish Nostr, Jellyfish Relay, Nostr Relay, Paid Relay, Nostr paid relay, NIP-05 names, Paid NIP-05 names, WoT Web of Trust relay, WoT relay, Web of Trust, Nostr infrastructure, decentralized social, Bitcoin, Lightning",
  ogImage: "https://jellyfish.land/og.webp",
  canonical: "https://jellyfish.land"
};

/**
 * Page-specific SEO configurations
 */
export const PAGE_SEO: Record<string, SEOData> = {
  home: {
    title: "JellyFish - Premium Nostr Relay & NIP-05 Services | WoT Protected",
    description: "Professional Nostr infrastructure with spam-free WoT protected relay and premium @nostr.eco NIP-05 addresses. Join the decentralized social revolution.",
    keywords: "Nostr, Jellyfish, Jellyfish Nostr, Jellyfish Relay, Nostr Relay, Paid Relay, Nostr paid relay, NIP-05 names, Paid NIP-05 names, WoT Web of Trust relay, WoT relay, Web of Trust, Nostr infrastructure, decentralized social, Bitcoin, Lightning, spam-free relay, premium Nostr, Nostr services",
    canonical: "https://jellyfish.land"
  },
  
  relay: {
    title: "Premium Nostr Relay Service | WoT Protected | JellyFish",
    description: "Get access to JellyFish's spam-free, WoT protected Nostr relay at wss://jellyfish.land. Premium Nostr infrastructure for reliable decentralized communication.",
    keywords: "Nostr Relay, Paid Relay, Nostr paid relay, WoT relay, Web of Trust relay, spam-free relay, premium Nostr relay, Jellyfish relay, wss://jellyfish.land, Nostr infrastructure, decentralized relay, Bitcoin relay, Lightning relay",
    canonical: "https://jellyfish.land/relay"
  },
  
  nip05: {
    title: "Premium NIP-05 Names @nostr.eco | Verified Nostr Identity | JellyFish",
    description: "Get your human-readable, WoT protected Nostr identity with @nostr.eco NIP-05 addresses. Premium Nostr verification service by JellyFish.",
    keywords: "NIP-05 names, Paid NIP-05 names, nostr.eco, Nostr identity, Nostr verification, human-readable Nostr, WoT NIP-05, Web of Trust NIP-05, premium NIP-05, Jellyfish NIP-05, decentralized identity, Nostr username",
    canonical: "https://jellyfish.land/nip05"
  },
  
  dashboard: {
    title: "Dashboard | Manage Your Nostr Services | JellyFish",
    description: "Manage your JellyFish Nostr relay subscription and NIP-05 address. Access your premium Nostr services dashboard.",
    keywords: "Nostr dashboard, relay management, NIP-05 management, Nostr services, JellyFish dashboard, Nostr account",
    canonical: "https://jellyfish.land/dashboard",
    noindex: true // Private area
  },
  
  tos: {
    title: "Terms of Service | JellyFish Nostr Services",
    description: "Terms of Service for JellyFish premium Nostr relay and NIP-05 services. Read our service terms and conditions.",
    keywords: "Terms of Service, JellyFish terms, Nostr terms, relay terms, NIP-05 terms",
    canonical: "https://jellyfish.land/tos"
  },
  
  privacy: {
    title: "Privacy Policy | JellyFish Nostr Services",
    description: "Privacy Policy for JellyFish premium Nostr relay and NIP-05 services. Learn how we protect your privacy.",
    keywords: "Privacy Policy, JellyFish privacy, Nostr privacy, data protection, user privacy",
    canonical: "https://jellyfish.land/privacy-policy"
  }
};

/**
 * Update document title and meta tags
 */
export function updateSEO(pageKey: string, customSEO?: Partial<SEOData>) {
  const seoData = { ...DEFAULT_SEO, ...PAGE_SEO[pageKey], ...customSEO };
  
  // Update title
  document.title = seoData.title;
  
  // Update meta description
  updateMetaTag('description', seoData.description);
  
  // Update meta keywords
  if (seoData.keywords) {
    updateMetaTag('keywords', seoData.keywords);
  }
  
  // Update Open Graph tags
  updateMetaTag('og:title', seoData.title, 'property');
  updateMetaTag('og:description', seoData.description, 'property');
  updateMetaTag('og:url', seoData.canonical || window.location.href, 'property');
  
  if (seoData.ogImage) {
    updateMetaTag('og:image', seoData.ogImage, 'property');
  }
  
  // Update Twitter tags
  updateMetaTag('twitter:title', seoData.title, 'name');
  updateMetaTag('twitter:description', seoData.description, 'name');
  
  // Update canonical URL
  if (seoData.canonical) {
    updateCanonicalLink(seoData.canonical);
  }
  
  // Handle noindex
  if (seoData.noindex) {
    updateMetaTag('robots', 'noindex, nofollow');
  } else {
    updateMetaTag('robots', 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1');
  }
}

/**
 * Update or create a meta tag
 */
function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  
  meta.content = content;
}

/**
 * Update canonical link
 */
function updateCanonicalLink(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = url;
}

/**
 * Generate structured data for a page
 */
export function generateStructuredData(pageKey: string): string {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": PAGE_SEO[pageKey]?.title || DEFAULT_SEO.title,
    "description": PAGE_SEO[pageKey]?.description || DEFAULT_SEO.description,
    "url": PAGE_SEO[pageKey]?.canonical || DEFAULT_SEO.canonical,
    "isPartOf": {
      "@type": "WebSite",
      "name": "JellyFish",
      "url": "https://jellyfish.land"
    },
    "about": {
      "@type": "Thing",
      "name": "Nostr Protocol Services",
      "description": "Premium Nostr relay and NIP-05 identity services"
    }
  };
  
  return JSON.stringify(baseData, null, 2);
}


