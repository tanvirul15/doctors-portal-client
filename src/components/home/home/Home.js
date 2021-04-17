import React from "react";
import AppointmentCard from "../appointment/AppointmentCard";
import Blog from "../blog/Blog";
import ContactUs from "../contactUs/ContactUs";
import FeaturesService from "../featuresService/FeaturesService";
import Footer from "../businessInfo/footer/Footer";
import Header from "../header/Header";
import OurDoctors from "../ourDoctors/OurDoctors";
import Services from "../services/Services";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <FeaturesService />
      <AppointmentCard />
      <Testimonial />
      <Blog />
      <OurDoctors />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
