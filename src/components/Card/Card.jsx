import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color,certificate}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={certificate} download><button className="c-button">Certificate</button></a>
      {/* <button className="c-button">Certificate</button> */}
    </div>
  );
};

export default Card;
