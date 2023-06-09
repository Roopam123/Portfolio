import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({emoji, heading, detail, color,certificate}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default ProjectCard;
