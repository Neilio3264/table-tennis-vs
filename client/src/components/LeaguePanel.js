import React, { Component } from 'react'

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

export default LeaguePanel
