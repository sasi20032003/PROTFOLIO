import React from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import "./Projects.css"; // Import CSS file for Projects component
import Footer from '../components/Footer';

import carrental from "../assets/car-rental.png"
import hli from "../assets/hli.png"


function Projects() {
  return (
    <div>
      <Navbar />
      <h2 className='project-heading'>My <span className='lime'>Projects</span></h2>
      <div className="projectsContainer">
        
        <ProjectCard img={carrental} name="Car Rental System" git="https://github.com/sasi20032003/carrental" />
        <ProjectCard img={hli} name="Weather Api Application" git="" />
        
        </div>
      <Footer />
    </div>
  );
}

export default Projects;
