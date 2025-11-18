import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MissionBg from "../../../assets/HomePageAssets/Services/ServicesBg.webp";
import Vision from "../Mission-Vision/Vission";
import Mission from "../Mission-Vision/Mission";
import Values from "../Mission-Vision/Values";

const style = {
  backgroundImage: `url(${MissionBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// ✅ Store component references instead of JSX
const slides = [Mission, Vision, Values];

const MissionVission = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // 4s auto-scroll
    return () => clearInterval(interval);
  }, []);

  // ✅ Get the current component dynamically
  const CurrentSlide = slides[current];

  return (
    <section style={style} className="relative overflow-hidden">
      <div className="container text-white flex items-center justify-center min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators + Arrows */}
      <div className="flex items-center justify-center gap-4 mt-2">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="text-white text-4xl px-2 py-1 hover:scale-110 hover:text-primary-start transition"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-20 h-0.5 transition-all ${
                idx === current ? "bg-primary h-1" : "bg-white"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="text-white text-4xl px-2 py-1 hover:scale-110 hover:text-primary-start hover:font-bold transition"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default MissionVission;
