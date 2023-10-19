import React from "react";
import Pack from "../Pack";
import "./index.css";

const data1 = [
  "Individual passwords",
  "2 user accounts",
  "Access on one device type",
  "Save and auto fill passwords",
  "one-on-one sharing",
  "password generator",
  "passwordless login",
];
const data2 = [
  "Individual passwords",
  "10 user accounts",
  "Account access all devices",
  "one-on-many sharing",
  "password generator",
  "passwordless login",
];

const SubSection = () => {
  return (
    <div className="sub-container">
      <div className="sub-card">
        <div className="heading">
          <h1>
            Find the perfect subscription to meet your unique requirements
          </h1>
          <p className="para">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system
          </p>
        </div>
        <>
          <Pack
            data={data1}
            para="For Individuals"
            cost="$12"
            name="Individual starter pack"
            image="https://clipground.com/images/color-dots-clipart-5.png"
          />
          <Pack
            data={data2}
            para="For Enterprise"
            name="Enterprise starter pack"
            cost="$94"
            image="https://vectorified.com/images/green-dot-icon-28.png"
          />
        </>
        <div className="sub-high">
          <div style={{ width: "65%" }}>
            <h4>Get to know all products pricing</h4>
            <p>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </p>
          </div>
          <>
            <button className="btn-style">Know about pricing</button>
          </>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
