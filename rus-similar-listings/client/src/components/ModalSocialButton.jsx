import React from 'react';

const ModalSocialButton = ({ buttonClass, imgClass, srcImg, textClass, text }) => (
  <button className={buttonClass}>
    <span>
      <img className={imgClass} src={`https://airbnb-similar-listings-photos.s3.amazonaws.com/${srcImg}`} />
    </span>
    <span className={textClass}>{text}</span>
  </button>
);

export default ModalSocialButton;
