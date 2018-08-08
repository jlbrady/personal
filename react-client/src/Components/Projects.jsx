import React, { Component } from 'react';
class Projects extends Component {
  render() {
    return (
      <div>
        <div id="background">
          <img src="http://paperlief.com/images/university-of-michigan-campus-wallpaper-4.jpg" class="stretch" alt="" />
        </div>
        <div id="info">
          <h2>Side Projects</h2>
          <ul>
            <li>Learning Javascript + React
              <ul>
                <li>In preparation for my internship with Programmatic Mechanics I had to learn React.js </li>
                <li>TODO</li>
                <li></li>
              </ul>
            </li>
            <li>This website!
              <ul>
                <li>Node.js!</li>
                <li>Add some style + bold/italics etc.</li>
                <li></li>
              </ul>
            </li>
          </ul>
          <h2>Internships</h2>
          <ul>
            <li>Programmatic Mechanics: Software Engineer Intern
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
            <li>Franworth: LAUNCH Team Member
              <ul>
                <li>LAUNCH is comprised of a dedicated group of student-leaders who desire the hands on involvement, responsibility, and the opportunity to work alongside some of the brightest minds in the business world, while also acting as helping agents to the hundreds of individuals and families that Franworth touches.</li>
                <li>LAUNCH allows you to work alongside high level executives and provides you with INSIGHT into the inner workings of FRANCHISING and the process of building a BRAND.</li>
                <li>Throughout the internship I led the effort to establish an e-commerce platform from scratch for a new division of our company, called Liberty Fulfillment.  Our team included my superior, who handled most of the physical aspects of the project, such as acquiring real estate for the warehouse and moving inventory from our Dallas location to our Ann Arbor location, and 3 interns, myself included.  I was tasked with handling the technology side of the project, which included choosing an e-commerce platform provider, an attractive prebuilt theme, and any app integrations that I felt were necessary to provide a seamless user experience for our clients.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Projects;
