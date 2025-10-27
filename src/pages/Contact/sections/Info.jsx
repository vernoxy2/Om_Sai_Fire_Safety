import React from "react";
import BgLeftDown from "../../../assets/BgLeftDown.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import GradientText from "../../../components/GradientText";
import { Form } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton";

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
        <div className="py-8 px-4 md:p-12 flex flex-col items-start gap-12">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-bold">
            Details Information
          </h1>

          {/* Info Section */}
          <div className="flex flex-col items-start justify-start gap-10">
            {/* Address */}
            <div className="flex items-start gap-3 md:gap-6">
              <FaMapMarkerAlt className="text-4xl md:text-5xl text-primary flex-shrink-0" />
              <p className="font-semibold leading-relaxed">
                B-7M CUBE BUSINESS HUB, OPP. VAPI TALUKA SEVA SADAN, N.H. NO. 8,
                BALITHA, VAPI, DIST, VALSAD, GUJARAT. PIN - 396191
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-3 md:gap-6">
              <IoMdCall className="text-4xl md:text-5xl text-primary flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-semibold">+91 98278 00077</p>
                <p className="font-semibold">+91 93131 74925</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 md:gap-6">
              <MdEmail className="text-4xl md:text-5xl text-primary flex-shrink-0" />
              <p className="font-semibold">omsaifiresafety77@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="px-4 py-8 md:p-12">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <GradientText>Get in </GradientText> Touch
          </h1>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="font-semibold text-white text-2xl"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="font-semibold text-white text-2xl"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-semibold text-white text-2xl"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-semibold text-white text-2xl"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label
                  htmlFor="message"
                  className="font-semibold text-white text-2xl"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
            </div>

            {/* Button */}
            {/* <button
              type="submit"
              className="px-4 py-2 rounded-sm bg-primary text-white font-semibold mt-4 hover:bg-primary/90 transition text-xl md:text-2xl lg:text-3xl font-alumni"
            >
              Submit
            </button> */}
            <PrimaryButton className="bg-primary text-white text-3xl">Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Info;
