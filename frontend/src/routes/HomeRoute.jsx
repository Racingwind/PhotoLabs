import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, openModal, favourites, favouritesTracker, getPhotosByTopics, isModalOpen }) => {

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favourites={favourites}
        getPhotosByTopics={getPhotosByTopics}
      />
      <PhotoList
        photos={photos}
        favouritesTracker={favouritesTracker}
        favourites={favourites}
        openModal={openModal}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

export default HomeRoute;