import React from "react";

const Patient = ({ appointments }) => {
  return (
    <div>
      <h2>No of Patients {appointments.length}</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Schedule</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.visitingHour}</td>
              <td>Test</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patient;

// age: "25"
// created: "2021-04-18T04:54:03.337Z"
// date: "2021-04-21T18:00:00.000Z"
// email: "islamtanvirul15@gmail.com"
// gender: "Male"
// name: "Tanvir"
// phone: "01673055734"
// service: "Teeth Orthodontics"
// weight: "65"
// _id: "607bbb6bc9d8511084c2f160"
