import { React, useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({topics, photos, openModal, favourites, favouritesTracker, getPhotosByTopics}) => {

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} getPhotosByTopics={getPhotosByTopics} />
      <PhotoList photos={photos} favouritesTracker={favouritesTracker} favourites={favourites} openModal={openModal} />
    </div>
  );
};

export default HomeRoute;