const mysql = require('mysql');
// const data = require('../faker.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'loot',
  database: 'reviews',
});

connection.connect();


// const insertDummyData = () => {
//   const listings = data.generateListings();
//   const reviews = data.generateReviews();
//   listings.forEach((listing) => {
//     connection.query(listing);
//   });
//   reviews.forEach((review) => {
//     connection.query(review);
//   });
// };


// const checkDatabase = (callback) => {
//   const q = 'SELECT COUNT(*) FROM reviews';
//   connection.query(q, (error, results) => {
//     if (error) {
//       callback(error, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };


const getAllListingReviews = (id, callback) => {
  const q = 'SELECT listings.api_id,reviews.* FROM reviews INNER JOIN listings ON listings.id = reviews.listings_id AND api_id = (?)';

  connection.query(q, [id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports = {
  getAllListingReviews,
  // insertDummyData,
  // checkDatabase,
};
