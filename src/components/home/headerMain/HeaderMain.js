import React from "react";
import dentalBedImg from "../../../images/dental-bead.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1>
          Your New Smile <br /> Start Hare
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
          blanditiis non quae repudiandae vitae dignissimos!
        </p>
        <button className="btn-brand ">GET APPOINTMENT</button>
      </div>
      <div className="col-md-6">
        <img src={dentalBedImg} alt="bed" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
