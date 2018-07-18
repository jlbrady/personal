import React, { Component } from 'react';
class Interests extends Component {
  render() {
    return (
      <div>
        <div id="background">
          <img src="http://paperlief.com/images/university-of-michigan-campus-wallpaper-4.jpg" class="stretch" alt="" />
        </div>
        <div id="resPic">
          <img src={require("./jbr.png")} alt="Too big"/>
        </div>
      </div>
    )
  }
}
export default Interests;
