import React from "react";
import "./Terminal.css";

function Terminal() {
  return (
    <div className="terminal-container">
      <div className="terminal_toolbar">
        <div className="butt">
          <button className="btn btn-color"></button>
          <button className="btn"></button>
          <button className="btn"></button>
        </div>
        
      </div>
      <div className="terminal_body">
        
        <div className="terminal_output">
          {/* <p className="hacker-text">Welcome to my Portfolio!</p> */}
            <p className="hacker-text myname">I'm <span className="blue">SASI VARDHAN TALLURI</span></p>
            <p className="hacker-text">
              FULL STACK DEVELOPER
            </p>
            <p className="hacker-text">
             B-TECH , KL UNIVERSITY 
            </p>
            <div className="social-icons">
              
              <a
                href="https://www.linkedin.com/in/sasi-vardhan-talluri-77285823a/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <box-icon name="linkedin-square" type="logo" color="blue"></box-icon>
              </a>
              <a
                href="https://github.com/sasi20032003/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                <box-icon name="github" type="logo" color="blue"></box-icon>
              </a>
            </div> 
        </div>
        
      </div>
    </div>
  );
}

export default Terminal;
