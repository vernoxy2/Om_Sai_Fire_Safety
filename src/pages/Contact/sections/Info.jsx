import React from "react";
import BgLeftDown from "../../../assets/BgLeftDown.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import GradientText from "../../../components/GradientText";

const style = {
  backgroundImage: `url(${BgLeftDown})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Info = () => {
  return (
    <section style={style}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x-[2px] divide-primary">
        {/* Left column */}
        <div className="p-12 flex flex-col items-start gap-12">
  {/* Title */}
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
    Details Information
  </h1>

  {/* Info Section */}
  <div className="flex flex-col items-start justify-start gap-10">
    {/* Address */}
    <div className="flex items-start gap-6">
      <FaMapMarkerAlt className="text-5xl text-primary flex-shrink-0" />
      <p className="font-semibold leading-relaxed">
        B-7M CUBE BUSINESS HUB, OPP. VAPI TALUKA SEVA SADAN, N.H. NO. 8,
        BALITHA, VAPI, DIST, VALSAD, GUJARAT. PIN - 396191
      </p>
    </div>

    {/* Phone Numbers */}
    <div className="flex items-start gap-6">
      <IoMdCall className="text-5xl text-primary flex-shrink-0" />
      <div className="space-y-1">
        <p className="font-semibold">+91 98278 00077</p>
        <p className="font-semibold">+91 93131 74925</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-6">
      <MdEmail className="text-5xl text-primary flex-shrink-0" />
      <p className="font-semibold">omsaifiresafety77@gmail.com</p>
    </div>
  </div>
</div>


        {/* Right column */}
        <div className="p-12">
          <h1 className="text-7xl"><GradientText >get in </GradientText>touch</h1>
        </div>
      </div>
    </section>
  );
};

export default Info;
