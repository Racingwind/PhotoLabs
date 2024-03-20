import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, favouritesTracker, openModal, isModalOpen }) => {

  const photoArr = photos.map((entry) => {
    return <PhotoListItem 
            key={entry.id}
            photo={entry}
            favouritesTracker={favouritesTracker}
            favourites={favourites}
            openModal={openModal}
            isModalOpen={isModalOpen}
          />
  });

  return (
    <ul className="photo-list">
      {photoArr}
    </ul>
  );
};

export default PhotoList;
