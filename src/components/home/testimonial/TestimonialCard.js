import React from "react";

const TestimonialCard = ({ item }) => {
  return (
    <div className="col-md-4">
      <div className="card shadow">
        <div className="card-body">
          <p>{item.quote}</p>
          <div className="d-flex py-4 ps-2">
            <img src={item.img} alt="" className="customer-img me-3" />
            <div className="testimonial__customer-info ">
              <h5 className="text-brand">{item.name}</h5>
              <p>{item.from}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
