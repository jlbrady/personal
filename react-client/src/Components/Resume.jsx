import React, { Component } from 'react';
class Resume extends Component {
  render() {
    return (
      <div>
        <div id="background">
          <img src="http://paperlief.com/images/university-of-michigan-campus-wallpaper-4.jpg" class="stretch" alt="" />
        </div>
        <div>
          <img src={require("./jbr.png")} alt="FUCK"/>
        </div>
      </div>
    )
  }
}
export default Resume;
