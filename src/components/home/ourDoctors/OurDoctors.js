import React from "react";
import DoctorCard from "./DoctorCard";

const OurDoctors = () => {
  return (
    <div className="container">
      <h5 className="text-center  text-brand mb-5">OUR DOCTORS</h5>
      <div className="row">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  );
};

export default OurDoctors;
