const faker = require('faker');



function generateListings () {
  var counter = 0; 
  var listings = [];
  var id = 1000; 
  while(counter < 101) {
    counter ++
    id++
  listings.push(`INSERT INTO listings (api_id) VALUES(${id})`)
  }
  return listings;
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var ownerResponse = [true, false, false];
var test = ownerResponse[randomInt(0, ownerResponse.length - 1)]

var generateReviews = function(){
  var ownerName = faker.name.firstName();
  var numberOfReviews = randomInt(20,30);
  var query =[];
  var listingsCounter = 1; 
  var createReviews = function(listingsId, ownerName, numberOfReviews){ 
        var response = function () {
         var sentences = faker.lorem.sentences();
         var ownerResponse = ''
         if(test) {
           ownerResponse += `${sentences}`
         } else {
           ownerResponse += `${null}`;
         }
       return ownerResponse;
      };
      var ownerResponse = response();
      var counter = 0; 
      while(counter < numberOfReviews) { 
        var date = JSON.stringify(faker.date.between('2015-01-01', '2018-06-02')).slice(1, 11);;
        var user = faker.name.firstName();
        var avatar = faker.internet.avatar();
        var review = faker.lorem.paragraph();
        var cleanliness = randomInt(1,5);
        var communication = randomInt(1,5);
        var checkin = randomInt(1,5);
        var accuracy = randomInt(1,5);
        var value = randomInt(1,5);
        var location = randomInt(1,5);
      
        query.push(`INSERT INTO reviews (listings_id, user_name,photo, review, owner_name, owner_response, review_date, rating_cleanliness, rating_communication, rating_accuracy, rating_checkin, rating_location, rating_value) VALUES (${listingsId}, '${user}', '${avatar}', '${review}', '${ownerName}', '${ownerResponse}', '${date}', ${cleanliness}, ${communication}, ${accuracy}, ${checkin}, ${location}, ${value});`)
        counter++
      }
    }
  while (listingsCounter < 101) { 
    createReviews(listingsCounter, ownerName, numberOfReviews);
    listingsCounter++;
    ownerName = faker.name.firstName();
    numberOfReviews = randomInt(20,30)
  }
 return query;
}

module.exports = {
  generateListings,
  generateReviews
}
