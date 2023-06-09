import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkdin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>roopamr2411@gmail.com <br/>Mobile - +91 6263326779 </span>
        <div className="f-icons">
          <a href='https://www.instagram.com/mr.roopam/' target="_blank" rel="noreferrer"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/roopam1234/"><Linkdin color="white" size={"3rem"} /></a>
          <a href="https://github.com/Roopam123" target="_blank" rel="noreferrer"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
