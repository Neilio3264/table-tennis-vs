import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlayerList from './PlayerList'

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
      <div className = "center-container">
        <div className = "panel" /*style={this.getStyle()}*/>
          <h3>
              {this.props.title}
          </h3>
          <PlayerList players = {this.props.players}/>
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
