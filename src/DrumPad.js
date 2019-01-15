import React, { Component } from 'react'

class DrumPad extends Component {
  constructor(props) {
    super(props)
    this.audioRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.keyCode === this.props.code) {
        this.playSound(e)
      }
    })
  }

  playSound(e) {
    this.audioRef.current.play()
    this.props.setDisplay(this.props.id)
  }

  render() {
    let { label, audio } = this.props
    return (
      <div className="drum-pad" onClick={e => this.playSound(e)}>
        {label}
        <audio id={label} className="clip" ref={this.audioRef} src={audio} />
      </div>
    )
  }
}

export default DrumPad
