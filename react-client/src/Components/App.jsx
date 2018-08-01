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
          <Route name="home" exact path="/" component={HomePage} />
        </div>
      </Router>
    )
  }
}
export default App;
