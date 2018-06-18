const app = require('./app.js');

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
