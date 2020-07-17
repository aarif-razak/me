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
            </div>
        </section>

        )
    }
}