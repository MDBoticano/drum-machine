import React, { Component } from 'react';

// Styling
import './DrumPad.css';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.pad.id,
      key: this.props.pad.key,
      audioID: this.props.pad.audioID,
      audioSource: this.props.pad.audioSource
    }
    this.playSound = this.playSound.bind(this);
  }

  // On click or key-press, play associated sound
  playSound = () => {
    return "";
  }


  /*
   * Get drum-pad props
   * 1 - Audio clip id
   * 2 - keyboard key id
   * 3 - Audio element
   */

  // Instantiate a drum-pad from props  
  render() {
    return (
      
      <div onClick={this.playSound} className="drum-pad" id={this.state.id}>
        {this.state.key}
        <audio className="clip" src={this.state.audioSource} id={this.state.key} />
      </div>
    );
  }
}


export default DrumPad;