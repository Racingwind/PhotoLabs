import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";



// image at the top, then profile picture, then user name, then city, country
const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.user.profile} />
        <div className="photo-list__user-info">
          {props.user.name}
          <div className="photo-list__user-location">
            {props.location.city}, {props.location.country}
          </div>          
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;