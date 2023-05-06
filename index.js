const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const coursesData = require('./data/coursesData.json');

app.get('/', (req, res) => {
  res.status(200).send('hello from hello tech');
});

app.get('/coursesData', (req, res) => {
  res.send(coursesData);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
