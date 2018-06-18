const months = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};


function changeDateFormat(reviewDate) {
  let date = '';
  let month = reviewDate.split('-')[1];
  Object.keys(months).forEach((key) => {
    if (months[key] === month) {
      month = key;
    }
  });
  const year = reviewDate.split('-')[0];
  date += `${month} ${year}`;
  return date;
}


function collectAllRatings(data) {
  const ratings = [];
  data.forEach((review) => {
    ratings.push(review.rating_accuracy);
    ratings.push(review.rating_checkin);
    ratings.push(review.rating_cleanliness);
    ratings.push(review.rating_communication);
    ratings.push(review.rating_location);
    ratings.push(review.rating_value);
  });
  return ratings;
}


const getAvgRating = (data) => {
  const arrayOfRatings = collectAllRatings(data);
  let average;
  const sum = arrayOfRatings.reduce((a, b) => a + b);
  average = sum / arrayOfRatings.length;
  average = Math.floor(average) + (Math.round((average - Math.floor(average))) ? 0.5 : 0.0);
  return average;
};

function collectRatingsPerCategory(data) {
  const ratings = {
    Accuracy: [],
    Communication: [],
    Cleanliness: [],
    Location: [],
    Checkin: [],
    Value: [],
  };

  data.forEach((review) => {
    ratings.Accuracy.push(review.rating_accuracy);
    ratings.Communication.push(review.rating_communication);
    ratings.Cleanliness.push(review.rating_cleanliness);
    ratings.Location.push(review.rating_location);
    ratings.Checkin.push(review.rating_checkin);
    ratings.Value.push(review.rating_value);
  });
  return ratings;
}


function convertRatingsToStarsPerCategory(rating) {
  const starStatus = [];
  let counter = 0;
  let ratings = rating;
  while (counter < 5) {
    counter += 1;
    if (ratings >= counter) {
      starStatus.push('./categoryFullStar.png');
    } else if (ratings < counter && ratings.toString().length > 1) {
      starStatus.push('./categoryHalfStar.png');
      ratings = 0;
    } else {
      starStatus.push('./categoryEmptyStar.png');
    }
  }
  return starStatus;
}

function getAvgRatingPerCategory(data) {
  const arr = [];
  const categories = collectRatingsPerCategory(data);

  Object.keys(categories).forEach((key) => {
    if (categories[key].length > 0) {
      let average;
      const sum = categories[key].reduce((a, b) => a + b);
      average = sum / categories[key].length;
      average = Math.floor(average) + (Math.round((average - Math.floor(average))) ? 0.5 : 0.0);
      categories[key] = average;
    }
  });

  Object.keys(categories).forEach((key) => {
    categories[key] = convertRatingsToStarsPerCategory(categories[key]);
  });

  Object.keys(categories).forEach((key) => {
    const obj = {};
    obj.name = key;
    obj.rating = categories[key];
    arr.push(obj);
  });

  return arr;
}


function convertRatingsToStars(rating) {
  const starStatus = [];
  let counter = 0;
  let ratings = rating;
  while (counter < 5) {
    counter += 1;
    if (ratings >= counter) {
      starStatus.push('./fullStar.png');
    } else if (ratings < counter && ratings.toString().length > 1) {
      starStatus.push('./halfStar.png');
      ratings = 0;
    } else {
      starStatus.push('./emptyStar.png');
    }
  }
  return starStatus;
}

module.exports = {
  changeDateFormat,
  collectAllRatings,
  getAvgRating,
  convertRatingsToStars,
  getAvgRatingPerCategory,

};

