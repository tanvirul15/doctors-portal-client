import React from "react";
import "./AppointmentCard.css";
import doctorImg from "../../../images/doctor-img.png";

const AppointmentCard = () => {
  return (
    <div className="appointment-card">
      <div className="row">
        <div className="col-md-5">
          <img
            src={doctorImg}
            alt=""
            className="img-fluid appointment-card__doctor-img"
          />
        </div>
        <div className="col-md-7">
          <div className="appointment-card__details p-5 text-white">
            <h5 className="text-brand">APPOINTMENT</h5>
            <h2>
              Make an appointment <br /> Today
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              laborum nostrum iusto in ipsum unde.
            </p>
            <button className="btn-brand">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
