import React from "react";

const ServiceDetails = ({ serviceItem }) => {
  return (
    <div className="col-md-4 text-center">
      <img className="services-logo" src={serviceItem.img} alt="Logo" />
      <h5 className="py-3">{serviceItem.title}</h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        ullam?
      </p>
    </div>
  );
};

export default ServiceDetails;
