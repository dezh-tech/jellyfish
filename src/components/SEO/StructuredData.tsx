import { useEffect } from 'react';

interface StructuredDataProps {
  data: object;
  id?: string;
}

/**
 * Component to inject structured data (JSON-LD) into the page
 */
export const StructuredData: React.FC<StructuredDataProps> = ({ data, id = 'structured-data' }) => {
  useEffect(() => {
    // Remove existing structured data script if it exists
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Create new script element
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data, null, 2);
    
    // Add to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [data, id]);

  return null; // This component doesn't render anything
};
