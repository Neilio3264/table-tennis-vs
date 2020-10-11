const functions = require('firebase-functions');
const roundrobinsort = require('./roundrobin');
const { response } = require('express');
const express = require('express');

var router = express.Router();

const app = express();
const port = 5000;

app.get('/', (request, response) => {
  response.send('Hello Express :)');
});

router.get('/leagues', function (request, response, next) {
  response.json([generateLeague(players, numPlayers)]);
});

router.get('/matches', function (request, response, next) {
  response.json([shufflePlayers(players)]);
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
