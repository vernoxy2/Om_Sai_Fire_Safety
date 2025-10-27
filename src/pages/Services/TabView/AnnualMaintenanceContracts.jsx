import React from "react";
import PrimaryTitle from "../../../components/PrimaryTitle";
import AMCImg from "../../../assets/ServicesPageAssets/TebView/AMC/AMCImg.webp";
import BaseLine from "../../../components/BaseLine";

const AnnualMaintenanceContracts = () => {
  return (
    <div>
      {/* Annual Maintenance Contracts */}
       <section className="space-y-16">
        {/* Headline Content */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <PrimaryTitle
            gradientText={"Annual Maintenance"}
            normalText={"Contracts (AMC)"}
            titleClassName="text-start w-[80%]"
          />
        </div>
        <div className="flex flex-col justify-center  text-start">
          <p>
            Our Annual Maintenance Contracts keep your fire safety systems
            inspected, serviced, compliant, and ready—ensuring year-round
            protection without worry.
          </p>
          <BaseLine/>
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
