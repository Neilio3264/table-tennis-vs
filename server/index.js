const { response } = require('express');
const express = require('express');

const app = express();
const port = 5000;

app.get('/', (request, response) => {
  response.send('Hello Express :)');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
