DROP DATABASE IF EXISTS airbnb_similar_listings;

CREATE DATABASE airbnb_similar_listings;

USE airbnb_similar_listings;

CREATE TABLE listings (
	id int NOT NULL AUTO_INCREMENT,
	photo VARCHAR(20) NOT NULL,
	listing_size_description VARCHAR(300) NOT NULL,
	beds int NOT NULL,
	listing_header VARCHAR(300) NOT NULL,
	price int NOT NULL,
	avg_rating decimal(3, 2) UNSIGNED NOT NULL,
	number_of_reviews int NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE listings AUTO_INCREMENT = 1001;

CREATE TABLE similar_listings (
  listing_id int NOT NULL,
  similar_listing_id int NOT NULL,
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (similar_listing_id) REFERENCES listings(id)
);
