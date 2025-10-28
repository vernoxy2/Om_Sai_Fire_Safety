import React, { useState } from "react";
import comanBg from "../../../assets/BgRightUp.webp";
import GradientText from "../../../components/GradientText";
import PrimaryTitle from "../../../components/PrimaryTitle";
import PrimaryButton from "../../../components/PrimaryButton";
import { IoMdArrowDropdown } from "react-icons/io";

const style = {
  backgroundImage: `url(${comanBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const faqs = [
  {
    question: "What services do you provide for fire extinguishers?",
    answer:
      "We offer supply, refilling, inspection, and maintenance of all types of fire extinguishers, ensuring they are always functional and compliant with safety standards.",
  },
  {
    question: "What is the process for rescheduling or canceling appointments?",
    answer:
      "Yes, we design, install, and maintain fire hydrant systems according to local regulations and safety standards for homes, offices, and industries.",
  },
  {
    question: "What fire alarm & detection services do you offer?",
    answer:
      "We provide installation, testing, and maintenance of smoke detectors, alarm panels, and integrated fire detection systems.",
  },
  {
    question: "Can you install automatic sprinkler systems?",
    answer:
      "Yes, our team handles design, installation, and maintenance of automatic sprinkler systems tailored to your premises for effective fire suppression.",
  },
  {
    question: "Do you conduct fire safety audits and training?",
    answer:
      "Absolutely! We perform on-site safety audits, hazard assessments, and staff training including evacuation drills and fire prevention awareness programs.",
  },
  {
    question: "What is included in your Annual Maintenance Contract (AMC)?",
    answer:
      "Our AMC covers scheduled maintenance, inspections, servicing, and priority support for all fire safety equipment and systems, ensuring long-term protection.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section style={style} className="py-12">
      <div className="container flex flex-col lg:flex-row gap-8">
        {/* Left Side: FAQ Intro + Card */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="space-y-5">
            <PrimaryTitle
              gradientText={"Frequently Asked "}
              normalText={"Questions"}
            ></PrimaryTitle>
            <p className=" max-w-md">
              Find clear answers to common fire safety queries, products,
              services, and compliance at Om Sai fire safety Solution
            </p>
          </div>
          <div className=" px-5 py-5 lg:max-w-md border-l-[3px] border-Border bg-gradient-to-r from-primary-start/60 to-transparent">
            <h1 className="text-2xl md:text-6xl">
              Frequently Asked Questions?
            </h1>
            <p className=" mb-4 w-10/12">
              Have questions? Send us an email, we’re here to help
            </p>
            <PrimaryButton
              className="text-3xl"
              onClick={() => {
                window.location.href = "mailto:omsaifiresafety77@gmail.com";
              }}
            >
              Send Email
            </PrimaryButton>
          </div>
        </div>

        {/* Right Side: FAQ Accordions */}
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-l-[3px] border-Border shadow p-4 bg-gradient-to-r from-primary-start/60 to-transparent"
            >
              <button
                className="flex justify-between items-center w-full text-left font-bold text-white text-lg md:text-2xl lg:text-3xl focus:outline-none"
                onClick={() => handleToggle(idx)}
              >
                <span className="">{faq.question}</span>
                <IoMdArrowDropdown
                  className={`text-3xl text-primary-start transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-white ">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
