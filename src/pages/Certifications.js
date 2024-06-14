import React from 'react'
import Navbar from '../components/Navbar'
import CertificationCard from '../components/CertificationCard'
import "./Certification.css";
import Footer from '../components/Footer';
import redhat from "../assets/redhat.png"
import awscp from "../assets/awscp.png"


function Certifications() {
  return (
    <div>
        <Navbar />
        <h2 className='project-heading'>My <span className='lime'>Certifications</span></h2>
        <div className='cert-container'>
        <CertificationCard name="RedHat Developer" image={redhat} link="https://www.credly.com/badges/a8862bd7-ab37-4285-bc24-bc79db447e3c/public_url"/>
        <CertificationCard name="AWS Cloud Practitioner" image={awscp} link="https://www.credly.com/badges/025edfb2-6645-415c-bb57-ee05249d1c8b/public_url" />
        </div>
        <Footer />
    </div>
  )
}

export default Certifications