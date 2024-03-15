import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const handleClick = (selected) => {
    selected ? delete props.favourites[props.id] : props.favourites[props.id] = 1;
  }

  return (
    <div onClick={() => handleClick(props.favourites[props.id])} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.favourites[props.id]} />
      </div>
    </div>
  );
}

export default PhotoFavButton;