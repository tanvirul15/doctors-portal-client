import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dentalBedImg from "../../../images/dental-bead.png";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h2>Appointment</h2>
        <div>
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
      </div>
      <div className="col-md-6">
        <img src={dentalBedImg} alt="bed" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
