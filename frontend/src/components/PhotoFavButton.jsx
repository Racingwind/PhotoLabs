import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({id, favourites, favouritesTracker}) {

  const handleClick = () => {
    favouritesTracker(id);
  }

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourites[id]} />
      </div>
    </div>
  );
}

export default PhotoFavButton;