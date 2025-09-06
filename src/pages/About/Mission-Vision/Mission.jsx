import React from "react";
import MissionImg from "../../../assets/AboutPageAssets/MissionVision/MissionImg.webp";
import PrimaryTitle from "../../../components/PrimaryTitle";

const Mission = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div>
        <img src={MissionImg} alt="" className="mx-auto" />
      </div>
      <div className="space-y-12">
        <PrimaryTitle
          gradientText={"Our"}
          normalText={"Mission"}
        ></PrimaryTitle>
        <p className="text-center px-6">To create safer communities by delivering innovative fire safety solutions, ensuring protection, compliance, and peace of mind for every client.
</p>
      </div>
    </div>
  );
};

export default Mission;
