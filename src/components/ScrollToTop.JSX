import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
    }
  }, [pathname]);
  // Run on route change

  return null;
};

export default ScrollToTop;
