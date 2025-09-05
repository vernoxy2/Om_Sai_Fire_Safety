import React from "react";
import GradientText from "../../../components/GradientText";
import testBg from "../../../assets/HomePageAssets/Testimonials/TestBg.webp";
/* import person from "../../../assets/HomePageAssets/Testimonials/Person.png";
import coma from "../../../assets/HomePageAssets/Testimonials/BigComa.png";
import smallComa from "../../../assets/HomePageAssets/Testimonials/SmallComa.png"; */
import PrimaryTitle from "../../../components/PrimaryTitle";
import { LuSettings } from "react-icons/lu";

const Style = {
  backgroundImage: `url(${testBg})`,
  backgroundSize: "cover",
};

const TestData = [
  {
    id: 1,
    title: "Certified ISI/BIS Products",
    img: <LuSettings />,
  },
];

const Testimonials = () => {
  return (
    <section style={Style}>
      {/* Container */}
      <div className="container">
        <div className=" w-5/12">
          <PrimaryTitle
            gradientText="Clients"
            normalText="Testimonials"
          ></PrimaryTitle>
          <p className="text-3xl">
            Real feedback or logos of companies you serve → <br />
            builds social proof.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TestData.map((item) => (
            <div
              key={item.id}
              className="p-[2px] rounded-lg bg-gradient-to-r from-primary/60 to-primary-start/60 transform transition duration-300 hover:scale-105"
            >
              <div className="border border-transparent bg-black/40 rounded-lg flex flex-col items-center justify-center text-center gap-4 px- xl:px-3 2xl:px-4 py-2">
                <div className="text-3xl text-white">{item.icon}</div>
                <h1 className=" text-xl md:text-2xl font-bold text-white leading-7">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
