import React from "react";
// import react router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import Icons
import { FaWhatsapp } from "react-icons/fa";
// import pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.JSX";
import NotFound from "./components/NotFound";
import RequestAssessment from "./components/RequestAssessment";

const App = () => {
  const [isopen, setIsopen] = React.useState(true);
  return (
    <BrowserRouter>
      {/* Navbar overlays on all pages */}
      <Navbar />

      <div className=" font-alumni">
        {/* pt-16 pushes content down so it doesn’t hide behind fixed navbar */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:tabSlug" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:tabSlug" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919827800077?text=Hello%20I%20would%20like%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-4 bottom-4 md:right-8 md:bottom-8 z-50"
      >
        <div className="h-14 w-14 rounded-full bg-primary-start bg-gradient-to-l from-primary-end/70 to-primary-start shadow-lg flex items-center justify-center hover:scale-90 duration-300 transition-transform">
          <FaWhatsapp className="text-white" size={30} />
        </div>
      </a>
      <RequestAssessment isopen={isopen} onClose={() => setIsopen(false)} />
    </BrowserRouter>
  );
};
  
export default App;
