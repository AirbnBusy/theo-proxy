import React from 'react';
import styles from './../styles/carousel-entry.css';
import ReactStars from 'react-stars';

const CarouselEntry = ({ listing, showModal }) => {
  let bed;
  listing.beds === 1 ? bed = 'BED' : bed = 'BEDS';

  return (
    <div className={styles.photoContainer}>
      <img className={styles.photo} src={`https://airbnb-similar-listings-photos.s3.amazonaws.com/${listing.photo}`}/>
      <button className={styles.heartButton} onClick={showModal.bind(null, listing)}>
        <img className={styles.heart} src="https://airbnb-similar-listings-photos.s3.amazonaws.com/heart.png"/>
      </button>
      <p className={styles.descriptionAndBeds}>
        {`${listing.listing_size_description}`} &bull; {`${listing.beds} ${bed}`}
      </p>
      <p className={styles.header}>{listing.listing_header}</p>
      <p className={styles.price}>{`$${listing.price} per night`}</p>
      <div className={styles.starsAndReviews}>
        <ReactStars className={styles.stars} count={5} value={listing.avg_rating} edit={false} color2={'#0897A6'} size={10} />
        <span className={styles.reviews}>{listing.number_of_reviews}</span>
      </div>
    </div>
  );
}

export default CarouselEntry;
