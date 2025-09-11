import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import GradientText from "../../../components/GradientText";
import Hero1 from "../../../assets/HomePageAssets/HeroImg/Hero1.webp";
import Hero2 from "../../../assets/HomePageAssets/HeroImg/Hero2.webp";
import Hero3 from "../../../assets/HomePageAssets/HeroImg/Hero3.webp";
import Hero4 from "../../../assets/HomePageAssets/HeroImg/Hero4.webp";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    bg: Hero1,
    title: (
      <>
        <GradientText>Protecting </GradientText>Lives.
      </>
    ),
    subtitle: "Securing Property",
    desc: "Trusted Fire Safety Solutions for Every Space",
    buttonText: "Get Free Consultation",
    buttonLink: "/contact",
  },
  {
    id: 2,
    bg: Hero2,
    title: (
      <>
        <GradientText>your </GradientText>Safety,
      </>
    ),
    subtitle: "Our Priority",
    desc: "Complete Fire Protec on – From Ex nguishers to Full Systems",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
  },
  {
    id: 3,
    bg: Hero3,
    title: (
      <>
        <GradientText>Be </GradientText>Prepared.
      </>
    ),
    subtitle: "Be Protected",
    desc: "Cer fied Fire Safety Equipment & Reliable Services",
    buttonText: "Contact Us Today",
    buttonLink: "/contact",
  },
  {
    id: 4,
    bg: Hero4,
    title: (
      <>
        <GradientText>Stay Safe </GradientText>with.
      </>
    ),
    subtitle: "Om Sai Fire Safety",
    desc: "Serving industries and homes with care",
    buttonText: "Book Your Safety Audit",
    buttonLink: "/contact",
  },
  // 🔥 New Slide Example
  {
    id: 5,
    bg: Hero2,
    title: (
      <>
        <GradientText>Advanced </GradientText>Training.
      </>
    ),
    subtitle: "Empowering People",
    desc: "Professional fire safety training programs",
    buttonText: "Book Training",
    buttonLink: "/contact",
  },
];

const Header = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={1500}
      loop
      className="w-full h-[100vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <section
            className="h-[100vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="container text-start">
              <div className="w-11/12 lg:w-1/2 bg-gradient-to-r from-primary-start/60 to-transparent p-7 border-l-[3px] border-Border mt-20 mr-auto md:space-y-5">
                <div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold">
                    {slide.title}
                  </h1>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-light">
                    {slide.subtitle}
                  </h1>
                </div>
                <h1 className="text-xl md:text-3xl lg:text-4xl pt-4 lg:max-w-sm">
                  {slide.desc}
                </h1>
                <Link
                  to={slide.buttonLink}
                  className="inline-block px-4 py-2 mt-4 font-semibold text-xl md:text-2xl lg:text-3xl text-white bg-gradient-to-t from-[#D9D9D9]/40 to-[#BFBFBF]/40 rounded-sm hover:scale-95 duration-200 ease-in-out"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Header;
