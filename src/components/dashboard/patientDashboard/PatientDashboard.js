import React, { useEffect, useState } from "react";
import Patient from "../patient/Patient";
import Sidebar from "../sidebar/Sidebar";

const PatientDashboard = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getAppointments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppointments(data);
      });
  }, [appointments]);

  return (
    <section>
      <div style={containerStyle} className='row'>
        <div className='col-md-3'>
          <Sidebar />
        </div>
        <div className='col-md-9'>
          <h3 className='text-brand mb-3 mt-2'>Appointment</h3>
          <Patient appointments={appointments} />
        </div>
      </div>
    </section>
  );
};

export default PatientDashboard;
