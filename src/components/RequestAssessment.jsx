import React from "react";
import GradientText from "./GradientText";
import PrimaryButton from "./PrimaryButton";
import { IoMdClose } from "react-icons/io";

const InputField = ({ label }) => (
  <div className="w-full space-y-2">
    <label className="text-3xl">
      <GradientText>{label}</GradientText>
    </label>
    <input
      type="text"
      className="w-full px-4 py-3 rounded-md border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-black"
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
        className="bg-white rounded-2xl w-[90%] lg:w-[65%] max-w-5xl overflow-auto"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-l from-primary-start to-primary-end py-3 lg:py-7 text-center rounded-t-xl">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
            Request Your Complimentary <br /> Fire Safety Assessment
          </h1>
          <button onClick={onClose} className="absolute right-3 top-3 text-xl md:text-2xl">
            <IoMdClose />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 lg:p-10 md:flex gap-4 space-y-3 lg:space-y-0">
          <div className="space-y-4 lg:space-y-8 md:w-[45%] text-gray-700">
            <h1 className="text-2xl md:text-3xl lg:text-5xl">
              <GradientText>Ensure your workplace meets all fire safety standards.</GradientText>
            </h1>
            <p className="text-gray-600">
              Our certified specialists provide a no-obligation on-site evaluation to identify
              potential risks and compliance gaps.
            </p>
          </div>

          <div className="flex flex-col md:w-[55%] space-y-8">
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
