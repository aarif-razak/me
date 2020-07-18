import React, { Component } from 'react'

export default class Portfolio extends Component{
    redner(){
        return(
            <section id="portfolio" className="portfolio section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Portfolio</h2>
      <p>My projects from over the years, school or otherwise...</p>
    </div>
    <div className="row" dir="ltr">
      <h4>CS336 Train Scheduler</h4>
      <div className="panel" dir="ltr">
        <p>For my CS336 (Databases) class, planned via diagrams and project guidlines to develop a scheduling system for a Mock Train System.
          The system pulled from an SQL database, along with actually hosting the site via Tomcat and AWS EC2 Instances. Additioanlly, a front end was developed using HTML, CSS, and implemented through 
          Java Server Pages.
        </p>
        <ul>
      <li><b>Built With: </b>AWS, SQL, JSP, HTML, CSS, and tears. </li>
     </ul>
      </div>
      <h4>CS314 Parallel Graph Matching</h4>
      <div className="panel" dir="ltr">
        <p>For my CS314 (Principles of Programming Languages) class, implemented the popular handshaking algorithim, utalizing parallel segment scans, 
          and managed thread assignments to create optimized graphs.
        </p>
        <ul>
          <li><b>Built With: </b>NVIDIA's CUDA Language.</li>
        </ul>
      </div>
      <h4>NASA Astro SMS Bot</h4>
      <div className="panel" dir="ltr">
        <p>A personal project that utalizes the Twilio API, NASA Public Astronomy Photo of the Day API, and a phone number, when texted a command
          will send NASA's Photo on that specified day. Also built a simple frontend with instructions.
        </p>
        <ul>
          <li><b>Debugging: </b>Debugging was done via the Twilio Docs, along with experimentation using NASA's Photo API on various devices. </li>
          <li><b>Built With: </b>Python, Flask, HTML, CSS, and an iPhone 8.</li>
        </ul>
      </div>
      <h4  dir="ltr">Pig Game</h4>
      <div className="panel" dir="ltr">
        <p>Built the famous dice game known as the Pig Game into an interactive web application. It features a 'realistic' dice rolling, along with scorekeeping for two players.</p>
        <ul>
          <li><b>Debugging: </b>Debugging was done via Mozilla's Docs, along with W3School's extensive library of resources.</li>
          <li><b>Built with: </b> Pure Javascript, HTML, and CSS. Media taken from various sources, such as stock images or Destiny 2 screenshots.</li>
        </ul>
      </div>
      {/* <h4>Atari Breaker Chrome Extension</h4> */}
      {/* <div className="panel" dir="ltr"> */}
        {/* <p>A personal project (more like an experiment), in programming Google Chrome Extensions. Pulls up a small game of Atari Breaker  */}
          {/* in the corner of your browser, when beaten (or losing all lives), encourages you to get back to work! */}
        {/* </p> */}
        {/* <ul> */}
          {/* <li><b>Debugging: </b> Debugging was done through Mozilla Docs, W3Schools, along with Chrome's own console to interpret errors.</li> */}
          {/* <li><b>Built With: </b>HTML, CSS, and Javascript from the Mozilla Docs</li> */}
        {/* </ul>  */}
      {/* </div> */}
      <h4 >Personal Website</h4>
      <div className="panel" dir="ltr">
        <p>This is as 'personal' as a personal project can get, but this website on its own is a personal project. I was inpsired by fellow classmates, along with generally having free time during the summer to
          sharpen up my skills. (And tell myself I'm doing something productive.)
        </p>
        <ul>
          <li><b>Debugging: </b> Debugging was done via React Docs, freeCodeCamp, and W3Schools</li>
          <li><b>Built With: </b>HTML, CSS, React, Javascript, and dry humor. </li>
        </ul>
      </div>
      {/*ProjectList Div Closing tag*/}
    </div>
  </div>
</section>



        )
    }
}