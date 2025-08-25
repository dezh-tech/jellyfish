import { useEffect } from 'react';
import { updateSEO, type SEOData } from '@/utils/seo';

/**
 * React hook for managing SEO meta tags
 * @param pageKey - The page identifier for SEO configuration
 * @param customSEO - Optional custom SEO overrides
 */
export function useSEO(pageKey: string, customSEO?: Partial<SEOData>) {
  useEffect(() => {
    updateSEO(pageKey, customSEO);
  }, [pageKey, customSEO]);
}
