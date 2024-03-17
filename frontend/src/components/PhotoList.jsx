import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const photoArr = props.photos.map((entry) => {
    return <PhotoListItem 
            key={entry.id}
            photo={entry}
            favouritesTracker={props.favouritesTracker}
            favourites={props.favourites}
            openModal={props.openModal}
          />
  });

  return (
    <ul className="photo-list">
      {photoArr}
    </ul>
  );
};

export default PhotoList;
