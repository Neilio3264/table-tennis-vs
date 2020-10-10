import React, { Component } from 'react';
import LeaguePanel from './LeaguePanel'
import PropTypes from 'prop-types'

class LeaguePanels extends Component {
  render() {
    console.log(this.props.panels);
    return this.props.panels.map((panel) => (
      <LeaguePanel key={panel.id} title={panel.title} players={panel.players}/>
    ));
  }
}

// PropTypes
LeaguePanels.propTypes = {
  panels: PropTypes.array.isRequired
}

export default LeaguePanels;
