import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const AddDoctor = () => {
  const [file, setFile] = useState({});
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };
  const handleAddDoctor = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("email", email);
    fetch("http://localhost:5000/addDoctor", {
      method: "POST",
      body: formData,
    });
  };
  const handleFileChange = (e) => {
    const imgFile = e.target.files[0];
    setFile(imgFile);
    console.log(imgFile);
  };
  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h2 className="text-brand">Add Doctor</h2>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="form-control mb-3 w-50"
          />
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="form-control mb-3 w-50"
          />
          <input
            name="portfolio"
            type="file"
            id="file"
            placeholder="Profile Image"
            className="form-control mb-3 w-50"
            onBlur={handleFileChange}
          />
          <button className=" btn btn-danger" onClick={handleAddDoctor}>
            Add Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
