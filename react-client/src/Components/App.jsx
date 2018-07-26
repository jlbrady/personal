import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import Contact from './Contact';
import Coursework from './Coursework';
import Projects from './Projects';
import Resume from './Resume';
import Experience from './Experience';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="resume" exact path="/resume/" component={Resume} />
          <Route name="workExperience" exact path="/work_experience/" component={Experience} />
          <Route name="coursework" exact path="/coursework/" component={Coursework} />
          <Route name="projects" exact path="/projects/" component={Projects} />
          <Route name="contact" exact path="/contact/" component={Contact} />
        </div>
      </Router>
    )
  }
}
export default App;
