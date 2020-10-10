import React, { Component } from 'react';
import Player from './Player'
import PropTypes from 'prop-types'

class LeaguePanels extends Component {
  render() {
    console.log(this.props.panels);
    return this.props.panels.map((panel) => (
      <LeaguePanel key={panel.id} title={panel.title} players={panel.players}/>
    ));
  }
}

LeaguePanels.propTypes = {
  
}

export default LeaguePanels;
