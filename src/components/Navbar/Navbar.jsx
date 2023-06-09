import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import {themeContext} from '../../Context'
import {useContext} from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
  const them = useContext(themeContext)
  const darkMode = them.state.darkMode
  return (
    <div className="n-wrapper" id="Navbar" style={{background:darkMode?'black':""}}>
      {/* left */}
      <div className="n-left">
        <Link activeClass="active" to="Intro" spy={true} smooth={true}><div className="n-name">Roopam</div></Link>
        {/* <div className="n-name">Roopam</div> */}
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
