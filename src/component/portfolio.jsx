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
      <button className="accordion" onclick="window.locaition.href = 'https://nasa-sms-app.herokuapp.com/';">CS336 Train Scheduler</button>
      <div className="panel" dir="ltr">
        <p>For my CS336 (Databases) class, planned via diagrams and project guidlines to develop a scheduling system for a Mock Train System.
          The system pulled from an SQL database, along with actually hosting the site via Tomcat and AWS EC2 Instances. Additioanlly, a front end was developed using HTML, CSS, and implemented through 
          Java Server Pages.
        </p>
        <b>Built With: </b> <p>HTML, CSS, SQL, JSP, AWS, and tears.</p>
      </div>
      <button className="accordion" onclick="window.location.href= 'https://nasa-sms-app.herokuapp.com/';">NASA Astro SMS Bot</button>
      <div className="panel" dir="ltr">
        <p>A personal project that utalizes the Twilio API, NASA Public Astronomy Photo of the Day API, and a phone number, when texted a command
          will send NASA's Photo on that specified day. Also built a simple frontend with instructions.
        </p>
        <b /><p><b>Debugging: </b> Debugging was done via the Twilio Docs, along with experimentation using NASA's Photo API on various devices. </p>
        <b>Built With: </b> <p>Python, Flask, HTML, CSS, and an iPhone 8.</p>
      </div>
      <button className="accordion"  onclick="window.location.href='https://dice-game-in-js.herokuapp.com';" dir="ltr">Pig Game</button>
      <div className="panel" dir="ltr">
        <p>Built the famous dice game known as the Pig Game into an interactive web application. It features a 'realistic' dice rolling, along with scorekeeping for two players.</p>
        <b>Debugging: </b> <p>Debugging was done via Mozilla's Docs, along with W3School's extensive library of resources.</p>
        <b>Built with: </b> <p>Pure Javascript, HTML, and CSS. Media taken from various sources, such as stock images or Destiny 2 screenshots.</p>
      </div>
      <button className="accordion" onclick="window.location.href= 'https://github.com/aarif-razak/breaker-mini';">Atari Breaker Chrome Extension</button>
      <div className="panel" dir="ltr">
        <p>A personal project (more like an experiment), in programming Google Chrome Extensions. Pulls up a small game of Atari Breaker 
          in the corner of your browser, when beaten (or losing all lives), encourages you to get back to work!
        </p>
        <b>Debugging: </b> <p>Debugging was done through Mozilla Docs, W3Schools, along with Chrome's own console to interpret errors.</p>
        <b>Built With: </b> <p>HTML, CSS, and Javascript from the Mozilla Docs</p>
      </div>
      <button className="accordion" onclick="window.location.href='https://www.google.com/search?q=recursion&rlz=1C1CHBF_enUS858US858&oq=recursion&aqs=chrome.0.69i59j0j46j0l5.1047j0j7&sourceid=chrome&ie=UTF-8';">Personal Website</button>
      <div className="panel" dir="ltr">
        <p>This as 'personal' a personal project can get, but this website on its own is a personal project. I was inpsired by fellow classmates, along with generally having free time during the summer to
          sharpen up my skills. (And tell myself I'm doing something productive.)
        </p>
        <b /><p><b>Debugging: </b> Debugging was done via React Docs, along with general assistance from W3Schools.</p>
        <b>Built With: </b><p>HTML, CSS, React, Javascript, and dry humor. </p>
      </div>
      {/*ProjectList Div Closing tag*/}
    </div>
  </div>
</section>



        )
    }
}