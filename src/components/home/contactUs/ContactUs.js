import React from "react";
import "./ContacrUs.css";
const ContactUs = () => {
  return (
    <div className="py-5 contact-form__container">
      <div className="text-center text-white mb-5">
        <h5 className="text-brand">Contact Us</h5>
        <h2>Always Connect with us.</h2>
      </div>
      <div className="container">
        <div className="w-75 mx-auto">
          <input
            className="form-control mb-3"
            type="email"
            name=""
            placeholder="Email Address"
          />
          <input
            className="form-control mb-3"
            type="text"
            name=""
            placeholder="Subject"
          />
          <textarea
            className="form-control mb-3"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button className="btn-brand text-center">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
