import React from "react";
import Bgright from "../../../assets/BgRightUp.webp";

const style = {
  backgroundImage: `url(${Bgright})`,
  backgroundSize: "cover",
  backgroundposition: "center center",
};

const Map = () => {
  return (
    <section style={style} className="w-full bg-black h-[600px]  px-0">
      <div className="container w-full h-full">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1865.105895940405!2d72.9119148631593!3d20.39629588924222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cff24eacb3a1%3A0x5551ef7375afddcb!2sV%20M%20A%20N%20%26%20Associates!5e1!3m2!1sen!2sin!4v1757406520595!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </section>
  );
};

export default Map;
