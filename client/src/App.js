import React, { Component } from 'react';
import './App.css';
import LeaguePanels from './components/LeaugePanels';

class App extends Component {
  state = {
    panels: [{ id: 1, title: 'League A', players: ['Player 1', 'Player 2'] }, 
    { id: 2, title: 'League B', players: ['Player 1', 'Player 2', 'Player 3'] }]
  };

  render() {
    return (
      <div className="App">
        <h1>TTVS</h1>
        <div>
          <LeaguePanels panels={this.state.panels} />
        </div>
      </div>
    );
  }
}

export default App;
