import React, { Component } from 'react'
export default class Resume extends Component{
    render(){
        return(
            <section id="resume" className="resume">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Resume</h2>
      <p>My Experience at a glance</p>
      <p><a href="https://drive.google.com/file/d/1ZJTd6O1e17-8eOQQUCgPXB5sV-1SMCSn/view?usp=sharing"> PDF Format</a> </p>
    </div>
    <div className="row">
      <h3 className="resume-title">Education</h3>
      <div className="resume-item">
        <h4>B.A in Computer Science, B.S in Psychology</h4>
        <h5>2018 - 2022</h5>
        <p><em>Rutgers University, New Brunswick, NJ</em></p>
        <div className="col-lg-6">
          <ul>           
            
            <li><strong>Awards:</strong> Dean's List, Honors Program</li>
          </ul>
          <p>My coursework includes: Data Structures, Calculus II, Quantitative Methods in Psychology, Computer Architecture, Discrete Structures 1&amp;2, Introduction to Linear Algebra, Databases, Principles of Programming Languages, Introduction to Cognitive Science</p>
        </div>
      </div>
      <div className="resume-item">
        <h4>High School Diploma</h4>
        <h5>2014 - 2018</h5>
        <p><em>Northern Burlington Regional High School, Mansfield, NJ</em></p>
        <p>Participated in Varsity Tennis, Debate, and helped found my High School's Muslim Student Association</p>
      </div>
    </div>
    <div className="row">
      <h3 className="resume-title">Professional Experience</h3>
      <div className="resume-item">
        <h4>Consultant</h4>
        <h5>2019 - Present</h5>
        <p><em>Rutgers University Office of Information Technology, New Brunswick, NJ </em></p>
        <ul>
          <li>Assisted university faculty, students, and staff with Rutgers IT issues ranging from connecting devices to repairing accounts on university servers</li>
          <li>Provided over the phone support in a professional and efficient manner while also troubleshooting technologies such as Microsoft Office, 802.1x networking, VPN services, MAC authentication bypass, and domain specific platforms</li>
          <li>Routinely dealt with over 15 calls and upwards of 20 tickets per day</li>
          <li>Coordinated with other consultants and a management team to curate a list of effective solutions to common issues</li>
        </ul>
      </div>
      <div className="resume-item">
        <h4>Guest Experience Team Member</h4>
        <h5>2019 - 2019</h5>
        <p><em>Six Flags Great Adventure, Jackson, NJ</em></p>
        <ul>
          <li>Collaborated with team and management to keep admissions flowing in a fast-paced environment while resolving issues and oversights to ensure full customer satisfaction</li>
          <li>Consulted with managers to identify inefficiencies and aide in training new employees</li>
        </ul>
      </div>
      <div className="resume-item">
        <h4>Aresty Research Assistant</h4>
        <h5>2020 - Present</h5>
        <p><em>Huda Labratory, Rutgers University, New Brunswick, NJ</em></p>
        <ul>
          <li><a href="https://www.hudalab.org">Huda Labratory</a></li>
          <li>Coming soon...</li>
        </ul>
      </div>
    </div>
  </div>
</section>

        )
    }
}