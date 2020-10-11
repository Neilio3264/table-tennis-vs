import React, { Component } from 'react'
import Player from './Player'
import PropTypes from 'prop-types'

export class PlayerList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.players.map((player) => {
                return <li>
                  <Player name={player} elo={0}/>
                </li>
              })}
        </ul>
      </div>
    )
  }
}


// PropTypes
PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}

export default PlayerList
