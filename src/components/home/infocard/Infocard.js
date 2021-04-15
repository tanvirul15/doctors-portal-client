import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Infocard = ({ info }) => {
  return (
    <div className={`col-md-4 `}>
      <div className={`${info.background} text-white p-4 d-flex align-items-center justify-content-center`}>
        <div className='me-4'>
          <FontAwesomeIcon icon={info.icon} size='3x' />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
