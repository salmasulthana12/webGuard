import React from "react";
import "./index.css";

const Pack = (props) => {
  return (
    <div className="pack">
      <div className="pack-card">
        <div className="pack-top">
          <div className="pack-img-card">
            <img className="pack-img" src={props.image} alt="" />
          </div>
          <div className="pack-data">
            <p className="pack-para">{props.para}</p>
            <h4 className="pack-text">{props.name}</h4>
          </div>
        </div>
        <p className="pack-para">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </p>
        <h2>
          {props.cost}
          <sub style={{ fontWeight: "400", fontSize: "10px" }}>/month</sub>
        </h2>
        <button className="btn-style">Get Started</button>
      </div>
      <div className="pack-green">
        <h4 className="pack-heading">What's included</h4>
        <ul className="items">
          {props?.data.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pack;
