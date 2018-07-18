import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
if (typeof window !== "undefined") {
  window.onload = function() {
    ReactDOM.render(<App />, document.getElementById('app'));
  };
}
