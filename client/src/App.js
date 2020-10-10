import React, { Component } from 'react';
import './App.css';
import LeaguePanels from './components/LeaguePanels';
import CreateLeagues from './components/CreateLeagues';
import {v4 as uuid} from 'uuid';

// Database
/*
const admin = require("firebase-admin");

const serviceAccount = require("../table-tennis-vs-firebase-adminsdk-yrcva-653d9a2529.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://table-tennis-vs.firebaseio.com/"
});

const db = admin.firestore();

async function quickstartListen(db) {
  const snapshot = await db.collection("clubs").get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}
*/
class App extends Component {

  state = {
    panels: []
    //players: []
    //{ id: uuid.v4, title: 'League A', players: ['Player 1', 'Player 2'] }, 
    //{ id: uuid.v4, title: 'League B', players: ['Player 1', 'Player 2', 'Player 3'] }
  };

  createLeagues = (amount) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J'];
    for (let i = 0; i < amount; i++)
    {
      const newLeague = {
        id: uuid.v4(),
        title: `League ${letters[amount]}`
      }
      this.setState({panels: [...this.state.panels, newLeague]})
    }
  }

  render() {
    return (
      <div className="App">
        <h1>TTVS</h1>
        <CreateLeagues addTodo={this.createLeagues}/>
        <div>
          <LeaguePanels panels={this.state.panels} />
        </div>
      </div>
    );
  }
}

export default App;
