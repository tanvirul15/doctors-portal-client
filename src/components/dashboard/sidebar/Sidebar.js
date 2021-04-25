import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faCalendarAlt, faHospitalUser, faPrescriptionBottle, faCogs } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar__list'>
        <Link to='/dashboard'>
          <li className='sidebar__list__item'>
            <FontAwesomeIcon icon={faTasks} /> &nbsp; Dashboard
          </li>
        </Link>
        <Link to='/dashboard/appointment'>
          <li className='sidebar__list__item'>
            <FontAwesomeIcon icon={faCalendarAlt} /> &nbsp;Appointments
          </li>
        </Link>
        <Link to='/dashboard/patient'>
          <li className='sidebar__list__item'>
            <FontAwesomeIcon icon={faHospitalUser} /> &nbsp;Patients
          </li>
        </Link>
        <Link to='/dashboard/addDoctor'>
          <li className='sidebar__list__item'>
            <FontAwesomeIcon icon={faHospitalUser} /> &nbsp;Add Doctor
          </li>
        </Link>
        <Link to='/dashboard'>
          <li className='sidebar__list__item'>
            <FontAwesomeIcon icon={faPrescriptionBottle} /> &nbsp; Prescription
          </li>
        </Link>
        <Link to='/dashboard'>
          <li className='sidebar__list__item'>
            <FontAwesomeIcon icon={faCogs} /> &nbsp; Settings
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
