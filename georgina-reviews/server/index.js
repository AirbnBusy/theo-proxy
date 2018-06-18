const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use('/listings/:id/reviews', express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

// db.checkDatabase((error, results) => {
//   if (error) {
//     console.error(error);
//   } else if (Object.values(results[0])[0] < 1) {
//     db.insertDummyData();
//   }
// });

app.get('/api/listings/:id/reviews', (req, res) => {
  const { params } = req;
  console.log(params.id);
  db.getAllListingReviews(params.id, (error, results) => {
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send(results);
    }
  });
});


app.listen(port, () => (console.log(`listening on port ${port}`)));
