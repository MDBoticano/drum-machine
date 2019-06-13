import React, { Component } from 'react';

// Styling
import './App.css';

// Components
import Display from './Display';

// URL(s) for scripts to load
const test = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

class App extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
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
      <div id="drum-machine">
        <Display />
      </div>
    );
  }
}

export default App;
