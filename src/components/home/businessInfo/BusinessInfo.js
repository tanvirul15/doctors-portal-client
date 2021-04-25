import React from "react";
import Infocard from "../infocard/Infocard";
import { faClock, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const infoData = [
  {
    title: "Opening Hours",
    description: "We are open in 7 days",
    icon: faClock,
    background: "bg-custom-primary",
  },
  {
    title: "Visit Our Location",
    description: "Metro Complex, Mirpur-1216, Dhaka",
    icon: faPhone,
    background: "bg-custom-secondary",
  },
  {
    title: "Call Us Now",
    description: "+88016545556",
    icon: faMapMarkerAlt,
    background: "bg-custom-primary",
  },
];
const BusinessInfo = () => {
  return (
    <div className='container'>
      <section className='row'>
        {infoData.map((info, ind) => (
          <Infocard key={ind} info={info} />
        ))}
      </section>
    </div>
  );
};

export default BusinessInfo;
