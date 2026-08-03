import React from "react";
import ContactHead from "./sections/ContactHead";
import Map from "./sections/Map";
import Info from "./sections/Info";
import { useMetaTags } from "../../hooks/useMetaTags";

const Contact = () => {
  useMetaTags({
    title: "Contact Om Sai Fire Safety – Get Fire Protection & Safety Quotes",
    description: "Contact Om Sai Fire Safety in Vapi, Gujarat for certified fire extinguishers, alarm systems, AMC contracts, hydrants, and safety gear. Request a free quote today.",
    keywords: "contact Om Sai Fire Safety, fire safety solutions contact, fire extinguisher supplier Vapi, fire safety inquiry, fire protection quotes",
    url: "https://omsaifiresafteysolutions.com/contact",
  });

  return (
    <div>
      {/* Contact Us Page */}
      <ContactHead />
      <Info />
      <Map />
    </div>
  );
};

export default Contact;
