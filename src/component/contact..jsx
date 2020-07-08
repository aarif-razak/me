import React, { Component } from 'react'
export default class Contact extends Component{
    render(){
        return(
<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Contact</h2>
      <p>Feel free to contact me!</p>
    </div>
    <div className="row mt-1">
      <div className="col-lg-4">
        <div className="info">
          <div className="email">
            <i className="icofont-envelope" />
            <h4>Email:</h4>
            <p>aarif.razak@rutgers.edu</p>
          </div>
          <br />
          <div className="github">
            <i className="icofont-github" />
            <h4>Follow me:</h4>
            <p><a href="https://github.com/aarif-razak">Github</a></p>
          </div>
          <div className="phone">
            <i className="icofont-linkedin" />
            <h4>Connect with me:</h4>
            <p><a href="https://www.linkedin.com/in/ahrazak/">LinkedIn</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        )
    }
}