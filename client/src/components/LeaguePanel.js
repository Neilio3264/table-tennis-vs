import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class LeaguePanel extends Component {
  render() {
    return (
      <div>
        <div className = 'Title'>
          <h3>
              {this.props.title}
          </h3>
        </div>
        <div className = 'Players'>
          <ul>
            {this.props.players.map((player) => {
              return <li>
                {player}
              </li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// PropTypes
LeaguePanel.propTypes = {
  players: PropTypes.array.isRequired
}
export default LeaguePanel
