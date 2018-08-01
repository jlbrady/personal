import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton" onClick={() => scrollToComponent(this.About1, { offset: 0, align: 'top', duration: 1500})}><img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Michigan_Wolverines_Block_M.png"/></li>
          <li className="navButton" onClick={() => scrollToComponent(this.Resume1, { offset: 0, align: 'top', duration: 1500})}>Resume</li>
          <li className="navButton" onClick={() => scrollToComponent(this.About1, { offset: 0, align: 'top', duration: 1500})}>About Me</li>
          <li className="navButton" onClick={() => scrollToComponent(this.Projects1, { offset: 0, align: 'top', duration: 1500})}>Projects</li>
          <li className="navButton" onClick={() => scrollToComponent(this.Contact1, { offset: 0, align: 'top', duration: 1500})}>Contact Info</li>
        </ul>
      </header>
    )
  }
}
export default NavBar;
