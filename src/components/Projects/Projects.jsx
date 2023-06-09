import React, { useContext } from "react";
import "./Projects.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="projects">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Projects</span>
        <span>
        This project in web development utilizes  HTML, CSS, <br /> JavaScript,
          Bootstrap, React.js, <br /> Django, Python, and DSA 
        </span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <ProjectCard
            emoji={HeartEmoji}
            heading={"T - Shirt Selling Website"}
            detail={"Our T-shirt selling website project utilizes Django as the backend framework SQLite as the database, and React.js and Bootstrap for the frontend"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <ProjectCard
            emoji={Glasses}
            heading={"My Prortfolio"}
            detail={"I have created a personal portfolio using HTML, CSS, JavaScript, and React.js, showcasing my skills, projects, and experiences."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <ProjectCard
            emoji={Humble}
            heading={"NewsApp"}
            detail={
              "News app aggregating live updates from multiple websites, providing a convenient platform for comprehensive news access."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Projects;
