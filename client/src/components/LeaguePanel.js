import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class LeaguePanel extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {
    return (
      <div>
        <div className = 'Title' style={this.getStyle()}>
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

const itemStyle = {
  backgroundColor: '#f4f4f4'
}

export default LeaguePanel
