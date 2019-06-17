import React, { Component } from 'react';

// Styling
import './DrumPad.css';

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.pad.id,
      hotkey: this.props.pad.hotkey,
      keycode: this.props.pad.keycode,
      audioID: this.props.pad.audioID,
      audioSource: this.props.pad.audioSource
    }
    this.playSound = this.playSound.bind(this);
    this.handleKeyDown.bind(this);
  }

  // Lifecycle: after component mounts, pre-rendering
  componentDidMount() {
    // Add event listener for keypresses
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Lifecycle: Remove modifications made in componentDidMount
  componentWillUnmount() {
    document.removeEventListener("keydown");
  }

  // Function to deal with keyboard actions
  handleKeyDown = (event) => {
    // console.log("key: " + event.key);
    // Play corresponding sound if key matches keycode
    if (event.keyCode === this.state.keycode) {
      // console.log("Event match");
      this.playSound();
    }

    // Depending on keypress, access child Drumpad component, and play
  }

  // On click or key-press, play associated sound
  playSound = () => {
    let audio = document.getElementById(this.state.hotkey);
    // set currentTime to 0 to reset play
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