import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = ({topics, favourites, getPhotosByTopics}) => {
  
  // Pass empty to get all categories
  const handleClick = () => getPhotosByTopics("");

  const isEmpty = (object) => Object.keys(object).length !== 0 ? true : false;

  return (
    <div className="top-nav-bar">
      <span onClick={handleClick} className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopics={getPhotosByTopics} />
      <FavBadge isFavPhotoExist={isEmpty(favourites)} />
    </div>
  )
}

export default TopNavigation;