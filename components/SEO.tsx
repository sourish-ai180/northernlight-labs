
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  type?: 'website' | 'article';
  ogImage?: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  type = 'website', 
  ogImage = 'https://northernlightlabs.engineering/og-main.jpg',
  schema
}) => {
  const location = useLocation();
  const fullTitle = `${title} | Northernlight Labs`;
  const url = `https://northernlightlabs.engineering${location.pathname}`;

  useEffect(() => {
    // Update basic tags
    document.title = fullTitle;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', url);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);

    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.setAttribute('href', url);

    // Inject JSON-LD Schema
    const existingScript = document.getElementById('structured-data');
    if (existingScript) existingScript.remove();

    if (schema) {
      const script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

  }, [title, description, location.pathname, ogImage, schema]);

  return null;
};

export default SEO;
