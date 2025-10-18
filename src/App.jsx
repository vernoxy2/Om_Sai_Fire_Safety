import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop.JSX";

const App = () => {
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
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
