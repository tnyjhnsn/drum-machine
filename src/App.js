import React, { Component, Fragment } from 'react';
import DrumPad from './DrumPad'

import boom from './sounds/boom.wav'
import clap from './sounds/clap.wav'
import hihat from './sounds/hihat.wav'
import kick from './sounds/kick.wav'
import openhat from './sounds/openhat.wav'
import ride from './sounds/ride.wav'
import snare from './sounds/snare.wav'
import tink from './sounds/tink.wav'
import tom from './sounds/tom.wav'

let sounds = [
  { label: 'Q', code: 81, id: 'Boom', audio: boom },
  { label: 'W', code: 87, id: 'Clap', audio: clap },
  { label: 'E', code: 69, id: 'Hi Hat', audio: hihat },
  { label: 'A', code: 65, id: 'Kick', audio: kick },
  { label: 'S', code: 83, id: 'Open Hat', audio: openhat },
  { label: 'D', code: 68, id: 'Ride', audio: ride },
  { label: 'Z', code: 90, id: 'Snare', audio: snare },
  { label: 'X', code: 88, id: 'Tink', audio: tink },
  { label: 'C', code: 67, id: 'Tom', audio: tom },
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      display: 'Press the keys to play the drums!'
    }
  }

  setDisplay = label => {
    this.setState({
      display: label
    })
  }

  render() {
    const kit = sounds.map(sound => {
      return <DrumPad
                key={sound.label}
                id={sound.id}
                code={sound.code}
                label={sound.label}
                audio={sound.audio}
                setDisplay={this.setDisplay}
                />
    })
    return (
      <Fragment>
        <div id="display" className="App">{this.state.display}</div>
        <div id="kit">
          {kit}
        </div>
      </Fragment>
    )
  }
}

export default App;
