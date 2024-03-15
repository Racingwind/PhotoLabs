import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  
  const photoArr = props.photos.map((entry) => <PhotoListItem key={entry.id} photo={entry} favTracker={props.favTracker} />);

  return (
    <ul className="photo-list">
      {photoArr}
    </ul>
  );
};

export default PhotoList;
