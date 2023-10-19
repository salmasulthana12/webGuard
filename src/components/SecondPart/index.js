import React from "react";
import Card from "../Card";
import "./index.css";

const data = [
  {
    text: "Log in and go",
    des: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    image:
      "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/H5BOVymHiplawzr0/videoblocks-business-woman-working-on-computer-sitting-by-the-window-in-the-office-portrait-of-a-young-woman-in-business-attire-in-the-workplace_h3tiihsibb_thumbnail-1080_01.png",
  },
  {
    text: "Dark web monitoring",
    des: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    image:
      "https://tse1.mm.bing.net/th?id=OIP._cVOKutUTN7UvxEEoyXI7AHaE7&pid=Api&P=0&h=220",
  },
  {
    text: "Two-factor authentication",
    des: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    image:
      "https://media.gettyimages.com/photos/businessman-hand-working-with-mobile-phone-and-laptop-computer-with-picture-id802791202",
  },
  {
    text: "Passwordless login",
    des: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    image:
      "https://media.istockphoto.com/photos/tablet-with-lock-icon-on-white-background-picture-id510584294",
  },
];

const SecondPart = () => {
  return (
    <div className="second-section">
      <div className="web-card">
        <div className="head">
          <h2>
            Automate the management of all your passwords with our auto-pilot
            feature
          </h2>
          <p className="para">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system
          </p>
        </div>

        <div className="card-styles">
          {data?.map((item) => (
            <Card title={item.text} image={item.image} description={item.des} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
