import React from "react";
import fluorideImg from "../../../images/fluoride-treatment.png";
import cavityImg from "../../../images/Cavity-filling.png";
import whiteningImg from "../../../images/teath-whitening.png";
import ServiceDetails from "./ServiceDetails";
import "./Services.css";
const Services = () => {
  const ServiceData = [
    {
      title: "Fluoride Treatment",
      img: fluorideImg,
    },
    {
      title: "Cavity Filling",
      img: cavityImg,
    },
    {
      title: "Teath Whitening",
      img: whiteningImg,
    },
  ];
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center">
          <h5 className="text-brand">OUR SERVICES</h5>
          <h2>Services We Provide</h2>
          <div className="row my-5">
            {ServiceData.map((serviceItem) => (
              <ServiceDetails serviceItem={serviceItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
