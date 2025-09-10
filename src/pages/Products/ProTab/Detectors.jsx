import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";

const Detectors = () => {
  return (
    // Smock & Heat Detectors
    <section>
      {/* Main container */}
      <div className="container space-y-16">
        {/* Headline Content */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <PrimaryTitle
              gradientText={"smoke & heat"}
              normalText={"detectors"}
              titleClassName="text-start lg:max-w-lg"
            />
          </div>
          <div className="flex justify-center items-center text-start lg:max-w-sm mx-auto">
            <p>
              Early detection saves lives. Our smoke and heat detectors include
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detectors;
