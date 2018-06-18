import React from 'react';
import ModalSocialButton from './ModalSocialButton.jsx';
import ModalListing from './ModalListing.jsx';
import styles from './../styles/favorites-modal.css';

const FavoritesModal = ({ closeModal, modalListing }) => (
  <div id="modal" className={styles.modalBackground} onClick={closeModal}>
    <div className={styles.modalContent}>

      <button className={styles.closeButton}>
        <img
          id="close"
          className={styles.closeImg}
          src="https://airbnb-similar-listings-photos.s3.amazonaws.com/cancel.svg"
          onClick={closeModal}
        />
      </button>

      <h3 className={styles.modalHeader}>Save to list</h3>

      <ModalSocialButton
        buttonClass={styles.facebookButton}
        imgClass={styles.facebookImg}
        srcImg={'facebook.svg'}
        textClass={styles.facebookText}
        text={'Continue with Facebook'}
      />

      <ModalSocialButton
        buttonClass={styles.googleButton}
        imgClass={styles.googleImg}
        srcImg={'google.svg'}
        textClass={styles.googleText}
        text={'Continue with Google'}
      />

      <div className={styles.lineBreakContainer}>
        <p className={styles.line}>
          <span className={styles.or}>or</span>
        </p>
      </div>

      <ModalSocialButton
        buttonClass={styles.signUpButton}
        imgClass={styles.signUpImg}
        srcImg={'letter.svg'}
        textClass={styles.signUpText}
        text={'Sign up with Email'}
      />

      <div className={styles.longLine}></div>

      <div className={styles.loginTextContainer}>
        <span>Already have an Airbnb account?</span>
        <span className={styles.loginText}>Log in</span>
      </div>

      <ModalListing modalListing={modalListing}/>

    </div>
  </div>
);

export default FavoritesModal;
