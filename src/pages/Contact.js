import React from 'react';
import Navbar from '../components/Navbar';
import "./Contact.css";
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
      <Navbar />
      <h2 className='project-heading'>Contact <span className='lime'>Me</span></h2>
      <div className="contact-container">
        <div className="contact-card">
          <h2>Address</h2>
          <br></br>
          <p>3-7-20,near cto office ,behind brmv high school</p>
          <p>palakollu</p>
        </div>
        <div className="contact-card">
          <h2>Email & Phone</h2>
          <br></br>
          <p>Email: 2100032019cseh@gmail.com</p>
          <br></br>
          <p>Phone: +91-8074066155</p>
        </div>
        <div className="contact-card">
          <h2>Social Media Handles</h2>
          
              <a
                href="https://www.linkedin.com/in/sasi-vardhan-talluri-77285823a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon name="linkedin-square" type="logo" color="blue" size="md"></box-icon>
              </a>
              <a
                href="https://github.com/sasi20032003/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <box-icon name="github" type="logo" color="blue" size="md"></box-icon>
              </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
