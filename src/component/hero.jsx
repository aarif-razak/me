import React, { Component } from 'react'

export default class Hero extends Component{
    render(){
        return(
          <section id="hero" className="d-flex flex-column justify-content-center">
          <div className="container" data-aos="zoom-in" data-aos-delay={100}>
            <h1>Aarif Razak</h1>
            <p>I'm a <span className="typed" data-typed-items="Programmer, Student, Lifelong Learner" /></p>
            <div className="social-links">
              {/* These are socials links, need to update the href's*/}
              <a href="https://twitter.com/aarif_razak" className="twitter"><i className="bx bxl-twitter" /></a>
              <a href="https://github.com/aarif-razak" className="github"><i className="bx bxl-github" /></a>
              <a href="https://www.linkedin.com/in/ahrazak/" className="linkedin"><i className="bx bxl-linkedin" /></a>
            </div>
          </div>
        </section>

        )
    }
}