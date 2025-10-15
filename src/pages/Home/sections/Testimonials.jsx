import React from "react";
import GradientText from "../../../components/GradientText";
import testBg from "../../../assets/HomePageAssets/Testimonials/TestBg.webp";
import person from "../../../assets/HomePageAssets/Testimonials/Person.png";
import coma from "../../../assets/HomePageAssets/Testimonials/BigComa.png";
import smallComa from "../../../assets/HomePageAssets/Testimonials/SmallComa.png";
import PrimaryTitle from "../../../components/PrimaryTitle";

const Style = {
  backgroundImage: `url(${testBg})`,
  backgroundSize: "cover",
};

const TestData = [
  {
    id: 1,
    title:
      "A gravida ante efficitur pretium facilisi praesent ultrices ornare conubia feugiat. Nulla tortor lobortis imperdiet laoreet pretium pharetra. Curae semper adipiscing iaculis conubia massa inceptos a non lobortis praesent dignissim.",
    img: person,
  },
  {
    id: 2,
    title:
      "A gravida ante efficitur pretium facilisi praesent ultrices ornare conubia feugiat. Nulla tortor lobortis imperdiet laoreet pretium pharetra. Curae semper adipiscing iaculis conubia massa inceptos a non lobortis praesent dignissim.",
    img: person,
  },
  {
    id: 3,
    title:
      "A gravida ante efficitur pretium facilisi praesent ultrices ornare conubia feugiat. Nulla tortor lobortis imperdiet laoreet pretium pharetra. Curae semper adipiscing iaculis conubia massa inceptos a non lobortis praesent dignissim.",
    img: person,
  },
];

const Testimonials = () => {
  return (
    <section style={Style} className="">
      {/* Container */}
      <div className="container">
        <div className="flex flex-col justify-start items-start gap-y-3">
          <PrimaryTitle
            gradientText="Clients"
            normalText="Testimonials"
          ></PrimaryTitle>
          <p className="text-3xl">
            Real feedback or logos of companies you serve → <br />
            builds social proof.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {TestData.map((item) => (
            <div
              className="bg-white rounded-xl p-8 space-y-3"
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="grid grid-cols-2 gap-4 relative">
                <img src={coma} alt="" className="" />
                <img src={smallComa} alt="" className="top-0 left-0 absolute" />
                <div className="rounded-full border-2 ml-auto ">
                  <img src={item.img} alt="" className="rounded-full" />
                </div>
              </div>
              <div>
                <p className="text-[#464646] text-xl md:text-2xl">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
