import React, { Component } from 'react';
import './App.css';
import Hero from './component/hero'
import About from './component/about'
import Resume from './component/resume'
import Contact from "./component/contact."
import Portfolio from "./component/portfolio"



class App extends Component {
  render(){
    return(
      <>
      <Hero></Hero>
      <main id="main">
        <About></About>
        <Resume></Resume>
        <Portfolio></Portfolio>
        </main>
       <Contact></Contact> 
      </>
    );

  }
} 

export default App;
