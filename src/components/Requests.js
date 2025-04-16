import React, { useState } from 'react'; 
import { MdEmail } from 'react-icons/md'; 
import { BsBell } from 'react-icons/bs';  
import { FiArrowRight } from 'react-icons/fi';  
import './Requests.css';
import Header from './Header';

const Requests = () => {
  const [showMessage, setShowMessage] = useState({
    outgoing: false,
    incoming: false,
  });

  const handleClick = (type) => {
    setShowMessage(prevState => ({
      ...prevState,
      [type]: !prevState[type], 
    }));
  };

  return (
    <div className="requests-container">
      <Header />
      <div className="request-box" id="outgoing" onClick={() => handleClick('outgoing')}>
        <div className="icon-container">
          <span>صادر</span>
          <MdEmail className="icon" />
          <FiArrowRight className="arrow" />
        </div>
      </div>

      {showMessage.outgoing && (
        <div className="message">لا يوجد أي طلب صادر حالياً</div>
      )}

      <div className="request-box" id="incoming" onClick={() => handleClick('incoming')}>
        <div className="icon-container">
          <span> وارد </span>
          <BsBell className="icon" />
          <FiArrowRight className="arrow" />
        </div>
      </div>

      {showMessage.incoming && (
        <div className="message">لا يوجد أي طلب وارد حالياً</div>
      )}
    </div>
  );
};

export default Requests;
