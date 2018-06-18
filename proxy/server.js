const express = require('express');
const path = require('path');
const app = express();

app.use('/listings/:id', express.static(path.resolve(__dirname)));
app.use('/listings/:id', express.static(path.resolve(__dirname, '../georgina-reviews/client/')));

app.listen(3000, () => {
  console.log('proxy server running on port 3000');
});
