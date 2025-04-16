import React from 'react';
import { MdEmail } from 'react-icons/md'; 
import { BsBell } from 'react-icons/bs';  
import { FiArrowRight } from 'react-icons/fi';  
import './Requests.css';

const Requests = () => {
  return (
    <div className="requests-container">
      <div className="request-box" id="outgoing">
        <div className="icon-container">
        <span>صادر</span>
          <MdEmail className="icon" />
          <FiArrowRight className="arrow" />
        </div>
      </div>

      <div className="request-box" id="incoming">
        <div className="icon-container">
        <span> وارد </span>
          <BsBell className="icon" />
          <FiArrowRight className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Requests;
