import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import Interests from './Interests';


class HomePage extends Component {

  render() {
    return (
      <div>
        <header>
          <ul id="headerButtons">
            <li className="navButton" onClick={() => scrollToComponent(this.About1, { offset: -100, align: 'top', duration: 1000})}><img src="//upload.wikimedia.org/wikipedia/commons/3/36/Michigan_Wolverines_Block_M.png"/></li>
            <li className="navButton" onClick={() => scrollToComponent(this.About1, { offset: -100, align: 'top', duration: 1000})}><a href="#">About</a></li>
            <li className="navButton" onClick={() => scrollToComponent(this.Resume1, { offset: -100, align: 'top', duration: 1000})}><a href="#">Resume</a></li>
            <li className="navButton" onClick={() => scrollToComponent(this.Projects1, { offset: -100, align: 'top', duration: 1000})}><a href="#">Projects</a></li>
            <li className="navButton" onClick={() => scrollToComponent(this.Contact1, { offset: -100, align: 'top', duration: 1000})}><a href="#">Contact</a></li>
          </ul>
        </header>
        <div id="background">
          <img src={require("./bground.jpg")} class="stretch" alt="Too big"/>
        </div>
        <section className='about1' ref={(section) => { this.About1 = section; }}><Interests /></section>
        <section className='resume1' ref={(section) => { this.Resume1 = section; }}><Resume /></section>
        <section className='projects1' ref={(section) => { this.Projects1 = section; }}><Projects /></section>
        <section className='contact1' ref={(section) => { this.Contact1 = section; }}><Contact /></section>
      </div>
    )
  }
}

export default HomePage;
