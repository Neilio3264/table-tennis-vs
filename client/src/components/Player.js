import React, { Component } from 'react'

export class Player extends Component {
  render() {
    return (
      <div>
        <div className = 'name'>
          <p>{this.props.name}</p>
        </div>
        <div className = 'elo'>
<<<<<<< HEAD
          <p>{this.props.elo}</p>
=======
          <p>{this.props.elo}</p>
>>>>>>> 9c2c6a75ed640760fb8944ce292f96715586c70f
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
