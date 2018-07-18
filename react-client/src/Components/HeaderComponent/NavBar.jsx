import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Michigan_Wolverines_Block_M.png"/></Link></li>
          <li className="navButton"><Link to="/">Home</Link></li>
          <li className="navButton"><Link to="/resume/">Resume</Link></li>
          <li className="navButton"><Link to="/work_experience/">Work Experience</Link></li>
          <li className="navButton"><Link to="/coursework/">Coursework</Link></li>
          <li className="navButton"><Link to="/projects/">Projects</Link></li>
          <li className="navButton"><Link to="/interests/">Interests</Link></li>
          <li className="navButton"><Link to="/contact/">Contact Me</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;
