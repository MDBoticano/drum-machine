import React, { Component } from 'react';
import DrumPad from './DrumPad';

// Styling
import './Display.css';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      played: " "
    }
    this.displayPlayed = this.displayPlayed.bind(this);
  }

  // Lifecycle: after component mounts, pre-rendering
  componentDidMount() {
    
  }

  // Remove modifications made in componentDidMount
  componentWillUnmount() {

  }

  /* Turns each drumpad object into its own DrumPad component
   * Returns multiple DrumPad components, so do not render directly
   * Note: Gives each pad a key since "each child should have a key prop" 
   */  
  makePads = () => {
    const allPads = (this.props.pads.drumpads).map((drumpads, i) => 
      <DrumPad pad={drumpads} displayPlayed={this.displayPlayed} key={i} />
    );
    return allPads;
  }

  // Callback function that displays the most recently played note
  displayPlayed = (padPlayedId) => {
    this.setState({
      played: padPlayedId
    })
  }

  // Render
  render() {
    return (
      <div id="display">
        <div id="playedDisplay">
          <p id="clipName">{this.state.played}</p>
        </div>
        {this.makePads()}
      </div>
    );
  }
}

export default Display;