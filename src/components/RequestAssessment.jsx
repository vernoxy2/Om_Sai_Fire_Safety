import React from "react";
import GradientText from "./GradientText";
import PrimaryButton from "./PrimaryButton";
import { IoMdClose } from "react-icons/io";

const InputField = ({ label }) => (
  <div className="w-full space-y-2">
    <input
      type="text"
      placeholder={label}
      className="w-full px-3 py-2 rounded-md border-2 font-alumni border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-black placeholder-black/60 drop-shadow-md"
    />
  </div>
);

const RequestAssessment = ({ isopen, onClose }) => {
  if (!isopen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-white"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-10/12 md:w-7/12 lg:w-4/12 max-w-5xl overflow-auto"
      >
        {/* Header */}
        <div className="relative bg-primary py-3 lg:py-4 text-center rounded-t-xl">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Request Your Complimentary <br />{" "}
            <span className="font-normal">Fire Safety Assessment</span>
          </h1>
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-xl md:text-2xl"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 lg:p-7  space-y-3 lg:space-y-0">
          {/* Content */}
          <div className="  text-gray-700">
            <h1 className="text-xl md:text-2xl lg:text-3xl text-[#696969] font-bold text-center">
              Ensure workplace meets fire safety
            </h1>
            <h1 className="text-gray-600 text-center text-base md:text-lg lg:text-xl md:w-[75%] mx-auto">
              Our certified specialists provide a no-obligation on-site
              evaluation to identify potential risks and compliance gaps.
            </h1>
          </div>

          {/* Form */}
          <div className="flex flex-col space-y-8">
            <form className="w-full space-y-4">
              <div className="md:flex gap-6">
                <InputField label="Name" />
                <InputField label="Company" />
              </div>
              <div className="md:flex gap-6">
                <InputField label="Phone" />
                <InputField label="Email" />
              </div>
            </form>

            <PrimaryButton
              type="submit"
              className="w-full justify-center text-white bg-gradient-to-r from-primary-start to-primary-end py-3"
            >
              Request Assessment
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestAssessment;
