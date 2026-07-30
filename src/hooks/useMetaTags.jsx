import { useEffect } from 'react';

const DEFAULT_DOMAIN = 'https://omsaifiresafteysolutions.com';
const DEFAULT_IMAGE = `${DEFAULT_DOMAIN}/logo.svg`;
const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

export const useMetaTags = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  robots = DEFAULT_ROBOTS
}) => {
  useEffect(() => {
    // Store original title to restore if needed
    const originalTitle = document.title;

    // Helper to format absolute URL
    const getAbsoluteUrl = (pathOrUrl) => {
      if (!pathOrUrl) return DEFAULT_DOMAIN;
      if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
        return pathOrUrl;
      }
      return `${DEFAULT_DOMAIN}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
    };

    // Helper to format absolute image URL
    const getImageUrl = (imgPath) => {
      if (!imgPath || imgPath.includes('public/logo.svg')) return DEFAULT_IMAGE;
      if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
        return imgPath;
      }
      return `${DEFAULT_DOMAIN}${imgPath.startsWith('/') ? '' : '/'}${imgPath}`;
    };

    const finalUrl = getAbsoluteUrl(url || (typeof window !== 'undefined' ? window.location.pathname : ''));
    const finalImage = getImageUrl(image);

    // Update title
    if (title) {
      document.title = title;
    }

    // Helper to update or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Standard Meta Tags
    setMetaTag('name', 'title', title);
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', robots);
    setMetaTag('name', 'author', 'Om Sai Fire Safety');

    // Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', finalImage);
    setMetaTag('property', 'og:url', finalUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', 'Om Sai Fire Safety');

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', finalImage);
    setMetaTag('name', 'twitter:url', finalUrl);

    // Canonical Link
    if (finalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', finalUrl);
      } else {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        canonical.setAttribute('href', finalUrl);
        document.head.appendChild(canonical);
      }
    }

    return () => {
      document.title = originalTitle;
    };
  }, [title, description, keywords, image, url, type, robots]);
};

export default useMetaTags;