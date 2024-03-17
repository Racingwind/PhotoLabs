import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ selectedPhoto, closeModal }) => {

  const handleClick = () => closeModal();

  console.log(selectedPhoto);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick} >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
