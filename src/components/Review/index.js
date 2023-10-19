import React from "react";
import "./index.css";

const Review = () => {
  return (
    <div className="review-section">
      <div className="review-container">
        <div className="head">
          <h2>
            Be a part of the satisfied WebGuard users today and hear firsthand
            what our customers are saying about us!
          </h2>
          <p className="para">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system
          </p>
        </div>
        <div className="review-card">
          <p style={{ fontSize: "20px" }}>
            This password manager is hands down the best on the market. It's
            easy to use, affordable, and has saved me from the headache of
            managing my passwords on my own
          </p>
          <hr />
          <div className="review-info">
            <img
              className="review-img"
              src="https://pixy.org/src/31/315160.png"
              alt=""
            />
            <div className="reviewer-data">
              <h5 className="name">name</h5>
              <span className="name">name@gmail.com</span>
            </div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <ul className="brands">
            <li className="brand-item">
              {" "}
              <i class="fa-brands fa-spotify"></i>Spotify
            </li>
            <li className="brand-item">
              {" "}
              <i class="fa-brands fa-windows"></i>Microsoft
            </li>
            <li className="brand-item">McAfee</li>
            <li className="brand-item">salesforce</li>
            <li className="brand-item">HubSpot</li>
            <li className="brand-item">
              <img
                style={{ height: "1rem", width: "1rem" }}
                src="https://static-00.iconduck.com/assets.00/loom-icon-512x512-a3lp3xg6.png"
                alt=""
              />
              loom
            </li>
            <li className="brand-item">NETFLIX</li>
            <li className="brand-item">
              <i class="fa-regular fa-message"></i> LiveChat
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Review;
