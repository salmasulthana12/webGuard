import React from "react";
import "./index.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="product-title">{props.title}</h4>
        <p className="para">{props.description}</p>
      </div>
      <img className="card-image" alt={props.title} src={props.image} />
    </div>
  );
};

export default Card;
