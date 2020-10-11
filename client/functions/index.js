const functions = require('firebase-functions');
const firebase = require('firebase/app');
require('firebase/firestore');
const roundrobinsort = require('./roundrobin');
const { response } = require('express');
const express = require('express');

const firebaseConfig = {
  apiKey: 'AIzaSyCdatZG0-muSXWTZrPsN29aIj1v-52YvVc',
  authDomain: 'table-tennis-vs.firebaseapp.com',
  databaseURL: 'https://table-tennis-vs.firebaseio.com',
  projectId: 'table-tennis-vs',
  storageBucket: 'table-tennis-vs.appspot.com',
  messagingSenderId: '682006034824',
  appId: '1:682006034824:web:5fdf58b3dc12c1d62f223d',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

async function getPlayers(db) {
  var players = [];
  const playersSnap = await db
    .collection('clubs')
    .doc('utd')
    .collection('Player')
    .orderBy('elo', 'desc')
    .get();
  playersSnap.forEach((doc) => {
    players.push(doc.data().getString('name'));
  });
  return players;
}

var router = express.Router();

const app = express();
const port = 5000;

app.get('/', (request, response) => {
  response.send('Hello Express :)');
});

router.get('/leagues', function (request, response, next) {
  response.json([generateLeague(getPlayers(db), numPlayers)]);
});

router.get('/matches', function (request, response, next) {
  response.json([shufflePlayers(getPlayers(db))]);
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
