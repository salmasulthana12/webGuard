import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-section">
          <div className="footer-card">
            <div className="spacing-footer">
              <img
                className="w-logo"
                src="https://www.logolynx.com/images/logolynx/2f/2f395cf87e6068d0d266f8fe8b2739b5.png"
                alt=""
              />
              <h3>WebGuard</h3>
            </div>
            <p className="footer-text">
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born
            </p>
          </div>
          <>
            <ul className="footer-list">
              <li>Legal</li>
              <li>Claim</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
            <ul className="footer-list">
              <li>Solutions</li>
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Insights</li>
              <li>Commerce</li>
            </ul>
            <ul className="footer-list">
              <li>Support</li>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>Status</li>
              <li>Insights</li>
            </ul>
            <ul className="footer-list">
              <li>Company</li>
              <li>About</li>
              <li>Plans</li>
              <li>Insights</li>
              <li>Commerce</li>
              <li>Guides</li>
              <li>Status</li>
            </ul>
          </>
        </div>
        <hr />
        <div className="footer-last">
          <p>&copy;2020 Your Company, Inc. All rights reserved.</p>
          <ul className="footer-icons">
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i class="fa-brands fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
