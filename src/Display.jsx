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
    const allPads = (this.props.pads.drumpads).map((drumpads) => 
      <DrumPad pad={drumpads} />
    );

    return allPads;

    // return (
    //   <>
    //     <DrumPad pad={this.props.pads.drumpads[0]} />
    //     <DrumPad pad={this.props.pads.drumpads[1]} />
    //     <DrumPad pad={this.props.pads.drumpads[2]} />
    //   </>
    // );
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