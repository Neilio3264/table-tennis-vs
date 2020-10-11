import React, { Component } from 'react'

export class Player extends Component {
  render() {
    return (
      <div>
        <div className = 'name'>
          <p>{this.props.name}</p>
        </div>
        <div className = 'elo'>
          <p>{this.props.elo}</p>
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  //name: ''
  //elo: ''
}

export default Player
