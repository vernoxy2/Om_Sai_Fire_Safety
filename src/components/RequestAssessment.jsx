import React, { useState, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import { IoMdClose } from "react-icons/io";

const InputField = ({ label, name, value, onChange, error }) => (
  <div className="w-full space-y-1">
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className={`w-full px-3 py-2 rounded-md border-2 font-alumni text-black placeholder-black/60 drop-shadow-md 
        ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-200 focus:ring-primary"
        }
      `}
    />
    {error && <p className="text-red-500 text-sm pl-1">{error}</p>}
  </div>
);

const RequestAssessment = ({ isopen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ✅ Auto-close after showing thank you message for 2 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        handleClose();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  if (!isopen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: "", company: "", phone: "", email: "" });
    setErrors({});
    onClose();
  };

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-white"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-11/12 md:w-7/12 lg:w-4/12 max-w-xl overflow-auto"
      >
        {/* Header */}
        <div className="relative bg-primary py-3 lg:py-4 text-center rounded-t-xl">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Request Your Complimentary <br />
            <span className="font-normal">Fire Safety Assessment</span>
          </h1>
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 text-xl md:text-2xl"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 lg:p-7 space-y-3 lg:space-y-6 text-gray-700">
          {!submitted ? (
            <>
              {/* Content */}
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl text-[#696969] font-bold text-center">
                  Ensure workplace meets fire safety
                </h1>
                <h1 className="text-gray-600 text-center text-base md:text-lg 2xl:text-xl md:w-[76%] mx-auto">
                  Our certified specialists provide a no-obligation on-site
                  evaluation to identify potential risks and compliance gaps.
                </h1>
              </div>

              {/* Form */}
              <div className="flex flex-col space-y-8">
                <form
                  onSubmit={handleSubmit}
                  className="w-full space-y-4  md:space-y-6"
                >
                  {/* Row 1 */}
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <InputField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                    />
                    <InputField
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      error={errors.company}
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <InputField
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <PrimaryButton
                      type="submit"
                      className="w-full justify-center text-white bg-gradient-to-r from-primary-start to-primary-end py-3 text-lg font-semibold"
                    >
                      Request Assessment
                    </PrimaryButton>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                🎉 Thank You!
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                Your request has been received. Our team will contact you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestAssessment;
