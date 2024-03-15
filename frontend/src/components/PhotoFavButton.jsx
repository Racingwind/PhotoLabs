import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
    props.favTracker(!selected);
  }

  return (
    <div onClick={() => handleClick(selected)} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;