import React from "react";
import "./AboutCard.css";
import photo from "../assets/baba.jpg";
import Resume from "../assets/Resume.pdf";

function AboutCard() {
  return (
    <div className="aboutcard">
      <div className="aboutimg">
        <img className="aboutimg" src={photo}></img>
      </div>
      <span>SASI VARDHAN TALLURI</span>
      <p className="aboutinfo">
        BTech CSE(Hons) student at KL University, passionate about coding and
        building projects from scratch.<br></br>
        <br></br>Freelancer and full-stack developer with a love for continuous
        learning and embracing new technologies.
      </p>
      <div className="aboutshare">
        <a
          href="https://github.com/sasi20032003/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="github" color="white"></box-icon>
        </a>
        
        <a
          href="https://www.linkedin.com/in/sasi-vardhan-talluri-77285823a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <box-icon type="logo" name="linkedin-square" color="white"></box-icon>
        </a>
      </div>
      <a href={Resume} download="Baba_Afrid_Resume.pdf">
        <button className="about-btn">Download Resume</button>
      </a>
    </div>
  );
}

export default AboutCard;
