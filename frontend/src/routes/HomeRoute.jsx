import { React, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos, openModal, favourites, favouritesTracker}) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} />
      <PhotoList photos={photos} favouritesTracker={favouritesTracker} favourites={favourites} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;