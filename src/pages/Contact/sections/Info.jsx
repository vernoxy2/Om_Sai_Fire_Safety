import React, { useState } from "react";
import BgLeftDown from "../../../assets/BgLeftDown.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import GradientText from "../../../components/GradientText";
import PrimaryButton from "../../../components/PrimaryButton";

const style = {
  backgroundImage: `url(${BgLeftDown})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Info = () => {
  // form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // validate
  const validate = () => {
    let temp = {};

    if (!formData.firstName.trim()) temp.firstName = "First name is required";
    if (!formData.lastName.trim()) temp.lastName = "Last name is required";

    if (!formData.phone.trim()) {
      temp.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      temp.phone = "Enter a valid 10-digit number";
    }

    if (!formData.email.trim()) {
      temp.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      temp.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) temp.message = "Message is required";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // handle inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (validationErrors && Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data:", formData);

    // Append access key
    const formDataWithKey = new FormData();
    for (const key in formData) {
      formDataWithKey.append(key, formData[key]);
    }
    formDataWithKey.append(
      "access_key",
      "bcf20587-57b5-47c3-9dc7-83fb8bfd0892"
    );
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataWithKey,
      });

      const data = await response.json();

      if (data.success) {
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
        e.target.reset();
        setErrors({});
      } else {
        console.error("Error submitting form:", data.message);
      }
    } catch (error) {
      console.error("Network or server error:", error);
    }
  };

  return (
    <section style={style}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x-[2px] divide-primary">
        {/* LEFT COLUMN */}
        <div className="py-8 px-4 md:p-12 flex flex-col items-start gap-12">
          <h1 className="text-4xl md:text-6xl 2xl:text-7xl font-bold">
            Details Information
          </h1>

          <div className="flex flex-col items-start gap-10">
            {/* Address */}
            <div className="flex items-start gap-3 md:gap-6">
              <FaMapMarkerAlt className="text-4xl md:text-5xl text-primary flex-shrink-0" />
              <p className="font-semibold leading-relaxed">
                1st Floor, E 104-105 M Cube Business Hub, Opp. Vapi Taluka Seva
                Sadan, N.H. No. 8, Balitha, Vapi, Dist Valsad, Gujarat. PIN -
                396191
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 md:gap-6">
              <IoMdCall className="text-4xl md:text-5xl text-primary flex-shrink-0" />
              <div className="space-y-1">
                <a href="tel:+917984550077">
                  <p className="font-semibold">+91 79845 50077</p>
                </a>
                <a href="tel:+918849592829">
                  <p className="font-semibold">+91 88495 92829</p>
                </a>
                <a href="tel:+919827800077">
                  <p className="font-semibold">+91 98278 00077</p>
                </a>
              </div>
            </div>

            {/* Email */}
            <a
              href="mailto:omsaifiresafety77@gmail.com"
              className="flex items-start gap-3 md:gap-6"
            >
              <MdEmail className="text-4xl md:text-5xl text-primary flex-shrink-0" />
              <p className="font-semibold">omsaifiresafety77@gmail.com</p>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN – FORM */}
        <div className="px-4 py-8 md:p-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <GradientText>Get in </GradientText> Touch
          </h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white text-2xl">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.firstName ? "border-red-500" : "border-primary"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white text-2xl">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.lastName ? "border-red-500" : "border-primary"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white text-2xl">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.phone ? "border-red-500" : "border-primary"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white text-2xl">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.email ? "border-red-500" : "border-primary"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-semibold text-white text-2xl">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.message ? "border-red-500" : "border-primary"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
            </div>

            <PrimaryButton className="bg-primary text-white text-3xl">
              Submit
            </PrimaryButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Info;
