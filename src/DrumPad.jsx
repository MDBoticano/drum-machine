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
    // Remove keypress event listener
    document.removeEventListener("keydown");
  }

  // Handles keydowns from event listener
  handleKeyDown = (event) => {
    // Play component sound if key matches keycode
    if (event.keyCode === this.state.keycode) {
      this.playSound();
    }
  }

  // On click or key-press, play associated sound
  playSound = () => {
    let audio = document.getElementById(this.state.hotkey);
    // set currentTime to 0 to reset play
    audio.currentTime = 0;

    // Optional: Adjusting volume
    audio.volume = 0.25;
    // console.log("Audio adjusted");

    // Play audio clip
    audio.play();

    // Optional: log note played
    console.log(this.state.id);

    // Use callback function to udpate most recent note played in parent display
    this.props.displayPlayed(this.state.id);
  }

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