import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import AMCImg from "../../../assets/ServicesPageAssets/TebView/AMC/AMCImg.webp";

const AnnualMaintenanceContracts = () => {
  return (
    <div>
      {/* Annual Maintenance Contracts */}
       <section className="space-y-16">
        {/* Headline Content */}
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div>
          <PrimaryTitle
            gradientText={"Annual Maintenance"}
            normalText={"Contracts (AMC)"}
            titleClassName="text-start"
          />
        </div>
        <div className="flex justify-center items-center text-start">
          <p>
            Our Annual Maintenance Contracts keep your fire safety systems
            inspected, serviced, compliant, and ready—ensuring year-round
            protection without worry.
          </p>
        </div>
      </div>
      {/* Main Image */}
      <div className="container px-0">
        <img src={AMCImg} alt="" className="w-full" />
      </div>
    </section>
    </div>
  );
};

export default AnnualMaintenanceContracts;
