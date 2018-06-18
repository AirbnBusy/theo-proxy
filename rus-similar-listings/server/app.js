const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./../database/index.js');

const app = express();

app.use(cors());

app.use('/rooms/:id', express.static(path.join(__dirname, '/../client/dist')));

app.get('/api/similar-listings/:id', (req, res) => {
  const { params } = req;
  db.getSimilarListings(params.id, (err, results) => {
    if (err) {
      console.log(`DB query failed, here is the error: ${err}`);
    }
    res.status(200).send(results);
  });
});

module.exports = app;
