import React, { useState } from "react";
import Footer from "../../home/businessInfo/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import AppointmentHeader from "../appointmentHeader/AppointmentHeader";
import BookAppointment from "../bookAppointment/BookAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar />
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookAppointment selectedDate={selectedDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
