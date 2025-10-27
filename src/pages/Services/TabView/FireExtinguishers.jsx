import React from 'react'
import PrimaryTitle from "../../../components/PrimaryTitle";
import Img1 from "../../../assets/ServicesPageAssets/TebView/FE/Img1.webp";
import Img2 from "../../../assets/ServicesPageAssets/TebView/FE/Img2.webp";
import Img3 from "../../../assets/ServicesPageAssets/TebView/FE/Img3.webp";
import RightImg from "../../../assets/ServicesPageAssets/TebView/FE/Right.webp";
import GradientText from "../../../components/GradientText";
import BaseLine from '../../../components/BaseLine';

const data = [
  {
    id: 1,
    img: Img1,
    title: "Supply",
    desc: "We supply new fire extinguishers of all types and capacities.All products meet BIS standards and come with quality assurance.Ready-to-use solutions to strengthen your fire safety systems.",
  },
  {
    id: 2,
    img: Img2,
    title: "Refilling",
    desc: "We offer refilling services for fire extinguishers to ensure they are always ready for use.Ready-to-use solutions to strengthen your fire safety systems.",
  },
  {
    id: 3,
    img: Img3,
    title: "Hydraulic Testing",
    desc: "We provide professional hydraulic testing of fire extinguisher cylinders as per BIS standards.This ensures leak-proof performance, reliability, and extended service life.",
  },
];
const FireExtinguishers = () => {
  return (
    <div>
      {/* Fire Extinguishers Teb */}
      <section>
      {/* main container */}
      <div className="container space-y-16">
        {/* Headline Content */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <PrimaryTitle
              gradientText={"Fire  "}
              normalText={"Extinguishers"}
              titleClassName="text-start"
            />
          </div>
          <div className="flex flex-col justify-center text-start lg:pe-32">
            <p>
              We supply certified fire extinguishers suitable for homes,
              offices, and industries. Our team also provides
            </p>
            <BaseLine/>
          </div>
        </div>

        {/* Cards Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative hover:-translate-y-5 rounded-xl duration-500 transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Overlay (bottom text area) */}
                <div className="absolute bottom-0 left-0 w-full bg-[#565656]/70 backdrop-blur-[2px]  text-start">
                  <div className="flex items-center gap-3">
                    <span className="bg-gradient-to-l from-primary to-primary-start/80 bg-primary px-4 py-2 -mt-6">
                      <h1 className="text-3xl font-bold text-white">
                        {item.title}
                      </h1>
                    </span>
                  </div>
                  <p className="text-2xl text-white px-5 py-5">{item.desc}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image With Text */}
      <div className="container px-0 mt-24 relative ">
        <img
          src={RightImg}
          alt=""
          className="w-full h-full object-cover xl:rounded-xl min-h-[200px] lg:h-auto"
        />
        <div className="xl:absolute bottom-0 lg:right-0 lg:h-full xl:max-w-md bg-[#2a2a2a]/80 backdrop-blur-[2px] px-8 text-start flex flex-col gap-3 lg:gap-5 justify-center items-center py-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl"><GradientText className="">
            Right Extinguisher for Your Needs
          </GradientText></h1>
          <p className="text-lg md:text-xl lg:text-2xl text-center xl:text-start">
            Choosing the correct fire extinguisher is crucial for effective
            safety. We assess your space, potential fire hazards, and specific
            requirements to recommend the most suitable extinguisher.{" "}
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-center xl:text-start">
            Our expert guidance ensures you are fully prepared for any
            emergency.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FireExtinguishers
