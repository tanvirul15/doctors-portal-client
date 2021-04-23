import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Dashboard = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
  };
  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
