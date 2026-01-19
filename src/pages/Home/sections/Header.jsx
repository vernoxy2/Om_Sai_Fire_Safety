import React from "react";
import ClientOnly from "../../../components/ClientOnly";
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
        <GradientText>Protecting </GradientText>Lives
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
    desc: "Complete Fire Protection – From Extinguishers to Full Systems",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
  },
  {
    id: 3,
    bg: Hero3,
    title: (
      <>
        <GradientText>Be </GradientText>Prepared
      </>
    ),
    subtitle: "Be Protected",
    desc: "Certified Fire Safety Equipment & Reliable Services",
    buttonText: "Contact Us Today",
    buttonLink: "/contact",
  },
  {
    id: 4,
    bg: Hero4,
    title: (
      <>
        <GradientText>Stay Safe </GradientText>with
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
        <GradientText>Advanced </GradientText>Training
      </>
    ),
    subtitle: "Empowering People",
    desc: "Professional fire safety training programs",
    buttonText: "Book Training",
    buttonLink: "/contact",
  },
];

// Swiper wrapper component that only renders on client
const SwiperCarousel = ({ slides }) => {
  const [SwiperComponents, setSwiperComponents] = React.useState(null);

  React.useEffect(() => {
    // Dynamically import Swiper only on client side
    if (typeof window !== "undefined") {
      Promise.all([
        import("swiper/react"),
        import("swiper/modules"),
      ]).then(([swiperReact, swiperModules]) => {
        setSwiperComponents({
          Swiper: swiperReact.Swiper,
          SwiperSlide: swiperReact.SwiperSlide,
          Autoplay: swiperModules.Autoplay,
        });
      });
    }
  }, []);

  if (!SwiperComponents) {
    return (
      <div className="w-full h-[280px] md:h-[400px] lg:h-[520px] xl:h-[90vh] flex items-center justify-center bg-gray-200">
        <div className="container text-start">
          <div className="w-11/12 lg:w-1/2 bg-gradient-to-r from-primary-start/60 to-transparent p-4 md:p-7 border-l-[3px] border-Border mr-auto space-y-1 md:space-y-5">
            <div>
              <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-semibold">
                {slides[0].title}
              </h1>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-light">
                {slides[0].subtitle}
              </h1>
            </div>
            <p className="text-lg md:text-3xl lg:text-4xl md:pt-3 w-full lg:max-w-sm">
              {slides[0].desc}
            </p>
            <Link
              to={slides[0].buttonLink}
              className="inline-block uppercase px-4 py-2 mt-4 font-semibold text-xl md:text-2xl lg:text-3xl text-white bg-gradient-to-t from-[#D9D9D9]/40 to-[#BFBFBF]/40 rounded-sm hover:scale-95 duration-200 ease-in-out"
            >
              {slides[0].buttonText}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { Swiper, SwiperSlide, Autoplay } = SwiperComponents;

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={1500}
      loop
      className="w-full h-[280px] md:h-[400px] lg:h-[520px] xl:h-[90vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <section
            className="h-full flex flex-col justify-center items-center text-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="container text-start">
              <div className="w-11/12 lg:w-1/2 bg-gradient-to-r from-primary-start/60 to-transparent p-4 md:p-7 border-l-[3px] border-Border  mr-auto space-y-1 md:space-y-5">
                <div>
                  <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-semibold">
                    {slide.title}
                  </h1>
                  <h1 className="text-2xl md:text-5xl lg:text-6xl font-light">
                    {slide.subtitle}
                  </h1>
                </div>
                <p className="text-lg md:text-3xl lg:text-4xl md:pt-3 w-full lg:max-w-sm">
                  {slide.desc}
                </p>
                <Link
                  to={slide.buttonLink}
                  className="inline-block uppercase px-4 py-2 mt-4 font-semibold text-xl md:text-2xl lg:text-3xl text-white bg-gradient-to-t from-[#D9D9D9]/40 to-[#BFBFBF]/40 rounded-sm hover:scale-95 duration-200 ease-in-out"
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

const Header = () => {
  const fallbackContent = (
    <div className="w-full h-[280px] md:h-[400px] lg:h-[520px] xl:h-[90vh] flex items-center justify-center bg-gray-200">
      <div className="container text-start">
        <div className="w-11/12 lg:w-1/2 bg-gradient-to-r from-primary-start/60 to-transparent p-4 md:p-7 border-l-[3px] border-Border mr-auto space-y-1 md:space-y-5">
          <div>
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-semibold">
              {slides[0].title}
            </h1>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-light">
              {slides[0].subtitle}
            </h1>
          </div>
          <p className="text-lg md:text-3xl lg:text-4xl md:pt-3 w-full lg:max-w-sm">
            {slides[0].desc}
          </p>
          <Link
            to={slides[0].buttonLink}
            className="inline-block uppercase px-4 py-2 mt-4 font-semibold text-xl md:text-2xl lg:text-3xl text-white bg-gradient-to-t from-[#D9D9D9]/40 to-[#BFBFBF]/40 rounded-sm hover:scale-95 duration-200 ease-in-out"
          >
            {slides[0].buttonText}
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <ClientOnly fallback={fallbackContent}>
      <SwiperCarousel slides={slides} />
    </ClientOnly>
  );
};

export default Header;
