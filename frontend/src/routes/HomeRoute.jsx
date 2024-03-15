import { React, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [favourites, setFavourites] = useState({});

  const favouritesTracker = (id) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites[id]) {
        const { [id]: _, ...newFavourites } = prevFavourites;
        return newFavourites;
      } else {
        return { ...prevFavourites, [id]: 1 };
      }
    });
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favourites={favourites} />
      <PhotoList photos={props.photos} favouritesTracker={favouritesTracker} favourites={favourites} />
    </div>
  );
};

export default HomeRoute;