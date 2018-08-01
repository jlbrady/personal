import React, { Component } from 'react';
class Contact extends Component {
  render() {
    let simple_form="<form id='contactform' action='//formspree.io/jlbrady@umich.edu' method='POST'><input type='text' name='name' placeholder='Your name'><input type='email' name='_replyto' placeholder='Your email'><input type='hidden' name='_subject' value='Resume Website contact' /><textarea name='message' placeholder='Your message'></textarea><input type='text' name='_gotcha' style='display:none' /><input type='submit' value='Send'></form>";
    return (
      <div dangerouslySetInnerHTML={{__html: simple_form}}></div>
    )
  }
}
export default Contact;
