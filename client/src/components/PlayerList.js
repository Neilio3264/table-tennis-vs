import React, { Component } from 'react'
import Player from './Player'
import PropTypes from 'prop-types'

export class PlayerList extends Component {
  render() {
    return (
      <div>
        {this.props.players.map((player) => {
          return <p>
            <Player name={player} elo={0}/>
          </p>
        })}
      </div>
    )
  }
}


// PropTypes
PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}

export default PlayerList
