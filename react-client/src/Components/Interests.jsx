import React, { Component } from 'react';
class Interests extends Component {
  render() {
    return (
      <div className="top">
        <div className="about">
          <h1 style={{textAlign: 'center'}}>About Me</h1>
          <h3 style={{textAlign: 'center'}}>Hello!</h3>
          <h3 style={{textAlign: 'center'}}>I am currently studying Computer Science at the University of Michigan and entering my final semester. 
          I enjoy working with front end systems and learning more about computer networks and cyber security.
          While I've been at Michigan for 4 years now, I am originally from Long Island, NY, and I love all things skiing, Univeristy of Michigan sports, and live music.</h3>
        </div>
        <div className="about">
          <h3 style={{textAlign: 'center'}}>
            <a href="//www.linkedin.com/in/james-brady-115388115/" target="_blank">LinkedIn Profile</a>
          </h3>
          <h3 style={{textAlign: 'center'}}>Phone: (516)-492-4938</h3>
          <h3 style={{textAlign: 'center'}}>Email: JLBrady@Umich.edu</h3>
        </div>
      </div>
    )
  }
}
export default Interests;
