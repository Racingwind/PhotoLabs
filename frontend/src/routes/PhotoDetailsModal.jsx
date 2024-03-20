import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo, openModal, closeModal, favourites, favouritesTracker, isModalOpen }) => {

  const handleClick = () => closeModal();

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick} >
        <img src={closeSymbol} alt="close symbol" />
      </button>      
      <div className="photo-details-modal__images">
        <PhotoFavButton
          favouritesTracker={favouritesTracker}
          favourites={favourites}
          id={photo.id}
        />
        <img className="photo-details-modal__image" src={photo.urls.full} />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={photo.user.profile} />
          <div className="photo-details-modal__photographer-info">
            {photo.user.name}
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">
          Similar Photos
          <div className="photo-details-modal__images">
            <PhotoList
              photos={Object.values(photo.similar_photos)}
              favouritesTracker={favouritesTracker}
              favourites={favourites}
              openModal={openModal}
              isModalOpen={isModalOpen}
            />
          </div>
        </div>
      </div>      
    </div>
  )
};

export default PhotoDetailsModal;