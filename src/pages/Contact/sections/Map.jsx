import React from "react";
import Bgright from "../../../assets/BgRightUp.webp";

const style = {
  backgroundImage: `url(${Bgright})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

const Map = () => {
  return (
    <section style={style} className="w-full bg-black h-[600px] px-0">
  <div className="container w-full h-full">
   <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1568.362220826099!2d72.9120461239179!3d20.3961623783284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cfc3693676ef%3A0x7c02ba9f3bfe84e0!2sM%20cube%2C%20the%20business%20hub!5e1!3m2!1sen!2sin!4v1761540100046!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Google Map - M Cube Business Hub"
/>

  </div>
</section>

  );
};

export default Map;
