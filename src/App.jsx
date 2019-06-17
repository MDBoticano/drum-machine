import React, { Component } from 'react';

// Styling
import './App.css';

// Components
import Display from './Display';

// Data: drum pads
import pads from './data/DrumPads.json';

// URL(s) for scripts to load
// let test = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";

// Class: App
class App extends Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  // Lifecycle: 
  componentDidMount() {
    // Enable for testing, disable when building to GH Pages
    // this.loadScripts(test);
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

  // Render
  render() {
    return (
      <div id="drum-machine">
        <Display pads={pads} />
      </div>
    );
  }
}

export default App;
