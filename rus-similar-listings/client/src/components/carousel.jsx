import React from 'react';
import CarouselEntry from './CarouselEntry.jsx';
import ForwardButton from './ForwardButton.jsx';
import BackButton from './BackButton.jsx';
import FavoritesModal from './FavoritesModal.jsx';
import styles from './../styles/carousel.css';

const Carousel = ({ currentListings, scrollCarousel, lastThreeListings, firstThreeListings, modalListing, modalIsShown, showModal, closeModal }) => {
  const modal = modalIsShown ? <FavoritesModal closeModal={closeModal} modalListing={modalListing} /> : null;

  return (
    <div>
      <h2 className={styles.listingsHeader}>Similar listings</h2>
      <div className={styles.carousel}>
        <BackButton firstThreeListings={firstThreeListings} scrollCarousel={scrollCarousel} />
        {currentListings.map( listing => <CarouselEntry listing={listing} showModal={showModal} key={listing.id.toString()} />)}
        <ForwardButton scrollCarousel={scrollCarousel} lastThreeListings={lastThreeListings} />
      </div>
      {modal}
    </div>
  );
};

export default Carousel;
