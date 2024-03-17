import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({photos, favourites, favouritesTracker, openModal}) => {

  const photoArr = photos.map((entry) => {
    return <PhotoListItem 
            key={entry.id}
            photo={entry}
            favouritesTracker={favouritesTracker}
            favourites={favourites}
            openModal={openModal}
          />
  });

  return (
    <ul className="photo-list">
      {photoArr}
    </ul>
  );
};

export default PhotoList;
