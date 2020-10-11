import React, { Component } from 'react'

export class PlayerList extends Component {
render() {
  return this.props.panels.map((panel) => (
    <LeaguePanel key={panel.id} title={panel.title} players={panel.players}/>
    ));
  }
}

export default PlayerList
