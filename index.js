const express = require('express');
const data = require('./data/classes/sunkeeper');
const { createReadStream } = require('fs');
const { resolve } = require('path');

const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  createReadStream(resolve(__dirname, './public/index.html')).pipe(res);
});

app.get('/api', (req, res) => {
  res.status(404).send({ message: 'method not found' });
});

app.get('/api/class', (req, res) => {
  res.status(404).send({ message: 'class not found' });
});

app.get('/api/class/:name', (req, res) => {
  if (req.params.name == 'sunkeeper') return res.send(data);
  res.status(404).send({ message: 'class not found' });
});

app.listen(3000, () => {
  console.log('"Gloomhaven class planner" started on port 3000');
});
