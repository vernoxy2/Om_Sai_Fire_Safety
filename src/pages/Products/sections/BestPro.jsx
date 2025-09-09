import React from "react";
import BestProImg from "../../../assets/BestProImg.webp";
import PrimaryTitle from "../../../components/PrimaryTitle";

function BestPro() {
  return (
    <div>
      <div className="container pr-0 grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div className="py-12 lg:py-28 md:px-28 px-10 2xl:px-40 space-y-8">
          <PrimaryTitle
            gradientText={"Some of our"}
            normalText={"Best Products"}
          ></PrimaryTitle>
          <p className="text-2xl">
            At Om Sai Fire Safety Solutions, we supply high-quality, certified
            fire safety equipment to protect your premises, employees, and
            assets.
          </p>
        </div>
        <div>
          <img src={BestProImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default BestPro;
