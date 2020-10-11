import React, { Component } from 'react'

export class Player extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.elo}</p>
      </div>
    )
  }
}

Player.propTypes = {
  //name: ''
  //elo: ''
}

export default Player
