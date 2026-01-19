import React from "react";
import ContactHead from "./sections/ContactHead";
import Map from "./sections/Map";
import Info from "./sections/Info";
import { useMetaTags } from "../../hooks/useMetaTags";

const Contact = () => {
  useMetaTags({
    title: "Contact Om Sai Fire Safety – Get Fire Safety Solutions in India",
    description:
      "Get in touch with Om Sai Fire Safety for fire safety equipment, services, installation, and training. Protect your home, office, or industry with certified solutions.",
    keywords:
      "contact Om Sai Fire Safety, fire safety solutions, fire extinguisher supplier, fire alarm system, safety equipment inquiry",
    url: "https://www.omsaifiresafteysolutions.com/contact",
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
