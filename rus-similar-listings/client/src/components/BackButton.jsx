import React from 'react';
import styles from './../styles/back-button.css';

const BackButton = ({ firstThreeListings, scrollCarousel }) => {
  const button = firstThreeListings ? (<div></div>) :
    (
      <button id="back" className={styles.scrollButton} onClick={scrollCarousel}>
        <img id="back" className={styles.img} src="https://airbnb-similar-listings-photos.s3.amazonaws.com/back.svg"/>
      </button>
    );

  return (
    <div className={styles.buttonContainer}>
      { button }
    </div>
  );
};

export default BackButton;
