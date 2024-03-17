import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";



// image at the top, then profile picture, then user name, then city, country
const PhotoListItem = ({ photo, favourites, favouritesTracker, openModal }) => {

  const handleClick = () => {
    openModal(photo);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton favouritesTracker={favouritesTracker} favourites={favourites} id={photo.id}/>
      <img className="photo-list__image" onClick={handleClick} src={photo.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
        <div className="photo-list__user-info">
          {photo.user.name}
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>          
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;