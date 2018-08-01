import React, { Component } from 'react';
class Contact extends Component {
  render() {
    return (
      <div className="emailForm">
        <form
        action="https://formspree.io/jlbrady@umich.edu"
        method="POST"
        className="row"
        >
        <div className="col-lg-8" style={{ margin: '0 auto' }}>
          <div className="row">
            <div className="form-group  col-md-6">
              <label htmlFor="_replyto" style={{color: '#fff', fontSize: '26px'}}>Email</label>
              <input
                type="email"
                name="_replyto"
                placeholder="email@gmail.com"
                className="form-control"
                required
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name" style={{color: '#fff', fontSize: '26px'}}>Name</label>
              <input name="name" className="form-control" placeholder="Your name" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{color: '#fff', fontSize: '26px'}}>Message</label>
            <textarea
              className="form-control"
              name="message"
              placeholder="Your message here..."
              rows="10"
              required
            />
          </div>
          <div className="text-right">
            <input
              type="submit"
              value="SEND MESSAGE"
              className="btn btn-primary btn-submit"
            />
          </div>
        </div>
        </form>
      </div>
    )
  }
}
export default Contact;
