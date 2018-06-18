const { populateListingsTable, populateSimilarListingsTable } = require('./index.js');
const _ = require('lodash');

const listingSizeDescription = [
  'ENTIRE GUEST SUITE',
  'ENTIRE APARTMENT',
  'ENTIRE HOUSE',
  'ENTIRE BUNGALOW',
  'ENTIRE TOWNHOUSE',
  'PRIVATE ROOM',
  'ENTIRE LOFT',
];
const listingHeader = [
  'Malibu boutique apartment',
  'Beautiful OCEAN FRONT BEACH condo!',
  'Tree house with 360 views of L.A',
  'OVER THE WATER Black - Contemporary Bungalow',
  'Stunning Villa by the Sea w/ Direct Beach Access!',
  'Modern Oceanview w/ Big Patio',
  'Rustic, Romantic Beachfront Apartment in Malibu',
  'Oceanv View Malibu Hideaway',
  'Ocean Front Malibu House',
  'Malibu Ocean View Rooms',
  'Beautiful Malibu Beach Duplex',
  'Ocean View Malibu Mountain Retreat',
];
const ratings = _.range(1, 5.5, 0.5);
populateListingsTable(listingSizeDescription, listingHeader, ratings);

const similarListingIds = _.range(1001, 1101);
populateSimilarListingsTable(similarListingIds);
