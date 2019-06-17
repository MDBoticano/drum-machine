import React, { Component } from 'react';

// Styling
import './DrumPad.css';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.pad.id,
      hotkey: this.props.pad.hotkey,
      audioID: this.props.pad.audioID,
      audioSource: this.props.pad.audioSource
    }
    this.playSound = this.playSound.bind(this);
  }

  // On click or key-press, play associated sound
  playSound = () => {
    let audio = document.getElementById(this.state.hotkey);
    audio.currentTime = 0;
    console.log("Clicked " + this.state.id);
    
    // Optional: Adjusting volume
    audio.volume = 0.5;
    // console.log("Audio adjusted");

    // Play audio clip
    audio.play();

    // Use callback function to udpate display in parent
    this.props.displayPlayed(this.state.id);
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
        {this.state.hotkey}
        <audio className="clip" id={this.state.hotkey} src={this.state.audioSource} />
      </div>
    );
  }
}


export default DrumPad;