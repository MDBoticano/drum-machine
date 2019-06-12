import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// URL(s) for scripts to load
const test = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

class App extends React.Component {
  
  // Lifecycle: 
  componentDidMount() {
    this.loadScripts(test);
  }

  /** 
   * loads script into document 
   * @param {string} url - URL/source of script
   */
  loadScripts = (url) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
