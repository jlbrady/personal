import React, { Component } from 'react';
class Projects extends Component {
  render() {
    return (
      <div>
        <div id="background">
          <img src="//paperlief.com/images/university-of-michigan-campus-wallpaper-4.jpg" class="stretch" alt="" />
        </div>
        <div id="info">
          <h2>Side Projects</h2>
          <h4>Learning Javascript + React</h4>
          <p style={{paddingBottom: '0.5%'}}>In preparation for my previous internship in the summer of 2017 I began to teach myself Javascript and React.  My new position was going to require an understanding of React.js, but I had never used or even learned about Javascript, let alone React.  I began learning some of the syntax/quirks of Javascript and React through the book <u>Learning React</u> by Kirupa Chinnathambi.</p>
          <h4>This Website!</h4>
          <p>While working in Ann Arbor this past summer I decided to build a website.  My job did not involve as much coding as I would have liked so I decided to take on a side project utilizing some of the skills I had learned that previous semester in my Web Systems course.  The website is built using <em>React, Express,</em> and <em>Webpack</em>, with a bit of <em>Bootstrap CSS</em> for style.  It is hosted via <em>Amazon's S3 storage system</em> and <em>Route 53 cloud DNS service</em>.  Content delivery and is provided by <em>Amazon's CloudFront</em>.  Overall I am happy with the outcome of the project and glad that it has allowed me to touch up on some of my coding skills while learning some of the intracacies of Amazon's cloud computing servives.</p>
          <h2 style={{paddingTop: '1.5%'}}>Internships</h2>
          <h4>Programmatic Mechanics: Software Engineer Intern</h4>
          <p>While interning at Programmatic Mechanics I began development on a web application
            for the Shopify app store.  After connecting our Shopify app to a pre-existing React web app, I created a
            Rails application to communicate with the Shopify API.  The Rails application was predominantly used to verify
            account tokens from a SQL database on our backend so that we were able to authorize each Shopify user.</p>
          <h4>Franworth: LAUNCH Team Member</h4>
          <p style={{paddingBottom: '0.5%'}}>LAUNCH is comprised of a dedicated group of student-leaders who desire the hands on involvement, responsibility,
            and the opportunity to work alongside some of the brightest minds in the business world, while also acting as helping
            agents to the hundreds of individuals and families that Franworth touches.
            LAUNCH allows you to work alongside high level executives and provides you with INSIGHT into the inner workings of
            FRANCHISING and the process of building a BRAND.</p>
          <p style={{paddingBottom: '3%'}}>Throughout the internship I led the effort to establish an e-commerce platform from scratch for a new division
             of our company, Liberty Fulfillment.  Our group of 4 people was tasked with planning the project, including both the physical
            and virtual aspects of the creation of the new division.  The physical aspects of the project,
            such as acquiring real estate for the warehouse and transporting existing inventory from our Dallas location to our
            Ann Arbor location, was handled primarily by my superior.  I was tasked with handling the tech side of the project,
            which included developing an e-commerce platform to handle the orders for 500+ franchises.  Scalability was key as the
            company was expecting rapid growth to 1,500+ franchises within 3 years so automating all systems such as accounting,
            inventory management, and taxation was a priority.  Additional responsibilities included theme selection, integration
            of existing systems, including Quickbooks Online accounting services, and selecting and implementing third party apps necessary to
            provide a seamless user experience for our clients.</p>
        </div>
      </div>
    )
  }
}
export default Projects;
