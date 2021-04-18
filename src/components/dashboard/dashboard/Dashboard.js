import React, { useState } from "react";
import AppointmentsByDate from "../appointmentsByDate/AppointmentsByDate";
import Sidebar from "../sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  return (
    <section>
      <div style={containerStyle} className="container-fluid row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
