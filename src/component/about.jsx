import React, { Component } from 'react'

export default class Hero extends Component{
    render(){
        return(
          <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About</h2>
              <p>Hi there!
                <br />
                Welcome to my personal site. I'm a student at Rutgers University studying computer science. Feel free to read on!
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3> A driven computer scientist</h3>
                <p className="font-italic">
                  Code and everything in between.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>           
                      <li><i className="icofont-rounded-right" /> <strong>Location:</strong> Mansfield, New Jersey</li>
                      <li><i className="icofont-rounded-right" /> <strong>Hobbies:</strong> Tennis, Video Games, Hiking, and Cooking</li>
                      <li><i className="icofont-rounded-right" /> <strong>Interests:</strong> Space, History, and Men's Fashion</li>
                      <li><i className="icofont-rounded-right" /> <strong>Dislikes:</strong> Alien 3 and Onions</li>
                    </ul>
                  </div>
                </div>
                <p>
                  I've been tinkering with technology ever since I was kid, from goofing off with
                  uncle's old laptop in BASIC, to using APIs to send memes to my phone on command. I'd also like to thank my extensive love for all things Star Wars and the world of science fiction
                  for really getting me interested to study and mastering what is possible with technology.
                </p>
                <p>
                  I am on the hunt for Summer 2021 Internships in the world of software development, game design, consulting, information technology, data science, web development, artifical intelligence, and
                  cognitive science.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        )
    }
}
