import React from "react";

const AppointmentsByDate = ({ appointments }) => {
  return (
    <div>
      <h2>No of Appointment {appointments.length}</h2>
      <ul>
        {appointments.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsByDate;
