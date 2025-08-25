import { useSEO } from '@/hooks/useSEO';
import { StructuredData } from './StructuredData';
import { type SEOData } from '@/utils/seo';

interface SEOHeadProps {
  pageKey: string;
  customSEO?: Partial<SEOData>;
  structuredData?: object;
}

/**
 * Comprehensive SEO component that handles both meta tags and structured data
 */
export const SEOHead: React.FC<SEOHeadProps> = ({ 
  pageKey, 
  customSEO, 
  structuredData 
}) => {
  // Apply SEO meta tags
  useSEO(pageKey, customSEO);

  return (
    <>
      {structuredData && (
        <StructuredData 
          data={structuredData} 
          id={`structured-data-${pageKey}`}
        />
      )}
    </>
  );
};
