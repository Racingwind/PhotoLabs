import React from "react";

import "../styles/PhotoListItem.scss";



// image at the top, then profile picture, then user name, then city, country
const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.photoData.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photoData.profile} />
        <div className="photo-list__user-info">
          {props.photoData.username}
          <div className="photo-list__user-location">
            {props.photoData.location.city}, {props.photoData.location.country}
          </div>          
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;