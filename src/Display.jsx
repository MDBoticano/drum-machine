import React, { Component } from 'react';
import DrumPad from './DrumPad';

// Styling
import './Display.css';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  // Lifecycle: after component mounts, pre-rendering
  componentDidMount() {
    console.log(this.props.pads);
    console.log(this.props.pads.drumpads[0]);
  }

  // Take JS object from parent listing # of pads and respective notes
  

  // Instantiate a DrumPad component per pad
  makePads = () => {
    // Turn each drumpad object in the drumpads array into its own component
    const allPads = (this.props.pads.drumpads).map((drumpads, i) => 
      // Gave each pad a key to avoid "Each child should have a key" error
      <DrumPad pad={drumpads} key={i}/>
    );

    return allPads;
  }

  // Display/update most recently played note

  // Render
  render() {
    return (
      <div id="display">
        {this.makePads()}
      </div>
    );
  }
}


export default Display;