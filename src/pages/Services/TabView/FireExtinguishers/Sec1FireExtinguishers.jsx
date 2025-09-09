import React from "react";
import PrimaryTitle from "../../../../components/PrimaryTitle";
import Img1 from "../../../../assets/ServicesPageAssets/TebView/FE/Img1.webp";
import Img2 from "../../../../assets/ServicesPageAssets/TebView/FE/Img2.webp";
import Img3 from "../../../../assets/ServicesPageAssets/TebView/FE/Img3.webp";

/* const style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
};
 */
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

const Sec1FireExtinguishers = () => {
  return (
    <section>
      {/* main container */}
      <div className="container space-y-16">
        {/* Headline Content */}
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div>
            <PrimaryTitle
              gradientText={"Fire  "}
              normalText={"Extinguishers"}
            />
          </div>
          <div className="flex justify-center items-center text-start">
            <p>
              We supply certified fire extinguishers suitable for homes,
              offices, and industries. Our team also provides
            </p>
          </div>
        </div>
        {/* Cards Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative duration-500 hover:-translate-y-5 bg-contain bg-no-repeat bg-center text-white flex flex-col justify-end p-6"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec1FireExtinguishers;
