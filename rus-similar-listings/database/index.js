const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'loot',
  database: 'airbnb_similar_listings',
});

connection.connect((err) => {
  if (err) {
    console.log(`Failed to connect to the db, here is the error: ${err}`);
    return;
  }
  console.log(`Successfuly connected to the db, here is the connection id: ${connection.threadId}`);
});

function populateListingsTable(listingSizeDescription, listingHeader, ratings) {
  for (let i = 1001; i <= 1100; i += 1) {
    const photo = `${i}.jpg`;
    const lsd = listingSizeDescription[Math.floor(Math.random() * listingSizeDescription.length)];
    const beds = Math.ceil(Math.random() * 4);
    const lh = listingHeader[Math.floor(Math.random() * listingHeader.length)];
    const price = Math.ceil(Math.random() * 700);
    const rating = ratings[Math.floor(Math.random() * ratings.length)];
    const numOfReviews = Math.ceil(Math.random() * 350);

    connection.query(`INSERT INTO listings (photo, listing_size_description, beds, listing_header, price, avg_rating, number_of_reviews) VALUES("${photo}", "${lsd}", ${beds}, "${lh}", ${price}, ${rating}, ${numOfReviews})`, (err) => {
      if (err) {
        console.log(`Failed to write to the DB, here is the error: ${err}`);
      }
    });
  }
}

function populateSimilarListingsTable(similarListingIds) {
  for (let i = 1001; i <= 1100; i += 1) {
    const twelveIds = [];
    while (twelveIds.length < 12) {
      const id = similarListingIds[Math.floor(Math.random() * similarListingIds.length)];
      if (!twelveIds.includes(id)) {
        twelveIds.push(id);
      }
    }

    twelveIds.forEach((sli) => {
      connection.query(`INSERT INTO similar_listings (listing_id, similar_listing_id) VALUES(${i}, ${sli})`, (err) => {
        if (err) {
          console.log(`Failed to write to the DB, here is the error: ${err}`);
        }
      });
    });
  }
}

function getSimilarListings(id, callback) {
  connection.query(`SELECT similar_listing_id FROM similar_listings WHERE listing_id=${id}`, (err, results) => {
    if (err) {
      console.log(`DB query failed, here is the error: ${err}`);
    }

    const similarListingIds = [];
    results.forEach((similarListing) => {
      similarListingIds.push(similarListing.similar_listing_id);
    });
    connection.query(`SELECT * FROM listings WHERE id IN (${similarListingIds})`, (error, data) => {
      callback(error, data);
    });
  });
}

module.exports = {
  populateListingsTable,
  populateSimilarListingsTable,
  getSimilarListings,
};
