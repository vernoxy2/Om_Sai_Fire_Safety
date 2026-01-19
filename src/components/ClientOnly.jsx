import { useState, useEffect } from "react";

/**
 * ClientOnly wrapper component to prevent SSR issues with components
 * that require browser APIs (like Swiper, DOM manipulation, etc.)
 */
const ClientOnly = ({ children, fallback = null }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return children;
};

export default ClientOnly;

