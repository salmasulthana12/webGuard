import React from "react";
import "./index.css";

const SecuritySection = () => {
  return (
    <div className="security-section">
      <div className="web-card">
        <div className="head">
          <h2>
            Experience a sense of calm and security no matter where you are with
            WebGuard.
          </h2>
          <p className="para">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system
          </p>
        </div>
        <div className="security-card">
          <h3>The ultimate password protection</h3>
          <img
            className="tab-img"
            src="https://www.isumsoft.com/images/windows-10/5-ways-to-unlock-acer-laptop-forgot-password-windows-10/password-reset-wizard.png"
            alt=""
          />
        </div>
        <div className="card-sect">
          <div className="sec-section">
            <h3>Efficient on tablet</h3>
            <img
              className="tab-img"
              src="https://i2.wp.com/standardnormal.com/wp-content/uploads/2020/09/22360-1-ipad-tablet-transparent-background.png?w=439&ssl=1"
              alt=""
            />
          </div>
          <div className="sec-section">
            <h3>Secure your password</h3>
            <img
              className="tab-img"
              src="https://i.kym-cdn.com/photos/images/facebook/001/152/403/c3a.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
