import { React, useReducer } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [favourites, dispatch] = useReducer((favourites, selected) => {
    return selected ? delete favourites[id] : favourites[id] = 1;
  }, {});

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favs={favourites} />
      <PhotoList photos={props.photos} favouritesTracker={dispatch} favourites={favourites} />
    </div>
  );
};

export default HomeRoute;