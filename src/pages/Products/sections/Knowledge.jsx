import React, { useState } from "react";
import BgLeftDown from "../../../assets/BgLeftDown.webp";
import PrimaryButton from "../../../components/PrimaryButton";
import { IoMdArrowDropdown } from "react-icons/io";
import PrimaryTitle from "../../../components/PrimaryTitle";

const Style = {
  backgroundImage: `url(${BgLeftDown})`,
  backgroundSize: "cover",
  backgroundPosition: "center center", // ✅ fixed typo & value
};

const faqs = [
  {
    question: "Fire Safety Tips & Guidelines?",
    answer: [
      "Identify common fire hazards in homes, offices, and industrial spaces.",
      "Proper storage and handling of flammable materials",
      "Tips for creating a fire-safe environment, including electrical safety and safe kitchen practices.",
      "Seasonal and situational safety reminders (e.g., festival safety, monsoon precautions).",
    ],
  },
  {
    question: "Equipment Usage & Maintenance?",
    answer: [
      "Step-by-step guide on using different types of fire extinguishers (ABC, CO₂, Foam, Water, Clean Agent).",
      "How to operate fire hydrants, hose reels, and sprinkler systems effectively.",
      "Inspection and maintenance tips for fire safety equipment to ensure readiness.",
      "Signs that equipment needs servicing or replacement.",
    ],
  },
  {
    question: "Emergency Preparedness",
    answer: [
      "How to create an emergency evacuation plan for homes and workplaces.",
      "Conducting fire drills and staff training for rapid response.",
      "Steps to take during a fire: evacuation, calling emergency services, and using extinguishers safely.",
      "First-aid tips for minor burns, smoke inhalation, or injuries during fire incidents.",
    ],
  },
];

const Knowledge = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return (
    <section style={Style}>
      <div className="container flex flex-col-reverse md:flex-row gap-12">
        {/* Left Side: FAQ Accordions */}
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-l-[3px] border-Border shadow p-4 bg-gradient-to-r from-primary-start/60 to-transparent"
            >
              {/* Question */}
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-white text-base md:text-3xl focus:outline-none"
                onClick={() => handleToggle(idx)}
              >
                <span>{faq.question}</span>
                <IoMdArrowDropdown
                  className={`text-3xl text-primary-start transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answers */}
              {openIndex === idx && (
                <div className="mt-3 pe-16 text-white text-xl md:text-3xl space-y-2">
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc pl-6 space-y-2">
                      {faq.answer.map((ans, i) => (
                        <li key={i}>{ans}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: FAQ Intro + Card */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <PrimaryTitle
              gradientText={"Knowledge"}
              normalText={"Centre"}
              titleClassName="text-end justify-end"
            ></PrimaryTitle>
            <p className=" max-w-md text-end ml-auto">
              Stay informed and prepared with our expert fire safety resources.
              The Knowledge Centre helps businesses and homeowners understand
              fire risks, prevention measures, and safety best practices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
