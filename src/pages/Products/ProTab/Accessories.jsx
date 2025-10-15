import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import Safety1 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety1.svg";
import Safety2 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety2.svg";
import Safety3 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety3.svg";
import Safety4 from "../../../assets/ProductPageAssets/Tabview/Accessories/Safety4.svg";
import PrimaryButton from "../../../components/PrimaryButton";

const AccessoriesData = [
  { id: 1, img: Safety1, title: "Signages", desc: "Clear, durable signs to guide people during emergencies and ensure compliance." },
  { id: 2, img: Safety2, title: "Exit Lights", desc: "Bright, reliable illumination for safe evacuation in low-visibility situations." },
  { id: 3, img: Safety3, title: "Fire Blankets", desc: "Quick-response blankets to smother small fires and protect individuals." },
  { id: 4, img: Safety4, title: "Safety Gear", desc: "Protective equipment including helmets, gloves, and suits to safeguard personnel during hazardous conditions." },
];

const Accessories = () => {
  const [show, setShow] = React.useState(null);

  const handleShow = (item) => {
    setShow(item);
  };

  const handleClose = () => {
    setShow(null);
  };

  return (
    <section className="relative">
      <div className="container mx-auto space-y-16">
        {/* Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <PrimaryTitle
            gradientText="Safety"
            normalText="Accessories"
            titleClassName="text-start lg:max-w-lg"
          />
          <p className="flex justify-center items-center text-start lg:max-w-sm mx-auto">
            Essential for <span className="font-bold">comprehensive fire and workplace</span>{" "}
            safety, our safety accessories enhance protection, guidance, and emergency readiness.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {AccessoriesData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="bg-white/20 w-full rounded-t-xl flex flex-col h-full">
                <img src={item.img} alt={item.title} className="m-auto" />
              </div>
              <div className="bg-gradient-to-r from-primary-start to-primary-end rounded-b-xl p-4 w-full text-start">
                <h3 className="font-bold text-white text-3xl">{item.title}</h3>
                <PrimaryButton onClick={() => handleShow(item)}>
                  Shop Now
                </PrimaryButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Modal */}
      {show && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-gradient-to-r from-primary-start to-primary-end rounded-xl p-8 w-11/12 max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={handleClose}
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 w-full rounded-t-xl flex flex-col h-full p-4">
                <img src={show.img} alt={show.title} className="m-auto max-h-48 object-contain" />
              </div>
              <div className="p-4 w-full text-center">
                <h3 className="font-bold text-white text-3xl">{show.title}</h3>
                <p className="text-white text-lg mt-2">{show.desc}</p>
                <PrimaryButton onClick={() => handleClose()}>Shop Now</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Accessories;
