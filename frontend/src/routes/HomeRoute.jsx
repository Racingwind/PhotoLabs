import { React, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [favourites, setFavourites] = useState({});

  const favouritesTracker = (id) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites[id]) {
        // if id exists in the favorites object, use object destructuring and spread operator to remove the entry
        const { [id]: _, ...newFavourites } = prevFavourites;
        return newFavourites;
      } else {
        // otherwise se spread operator to add the entry
        return { ...prevFavourites, [id]: 1 };
      }
    });
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favourites={favourites} />
      <PhotoList photos={props.photos} favouritesTracker={favouritesTracker} favourites={favourites} openModal={props.openModal} />
    </div>
  );
};

export default HomeRoute;