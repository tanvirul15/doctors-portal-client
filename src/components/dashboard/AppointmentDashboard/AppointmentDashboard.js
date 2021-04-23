import React, { useEffect, useState } from "react";
import AppointmentsByDate from "../appointmentsByDate/AppointmentsByDate";
import Sidebar from "../sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentDashboard = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  //appointmentByDate

  useEffect(() => {
    fetch("http://localhost:5000/appointmentByDate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ date: selectedDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [selectedDate]);
  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-4">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentsByDate appointments={appointments} />
        </div>
      </div>
    </section>
  );
};

export default AppointmentDashboard;
