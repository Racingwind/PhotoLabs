import { React, useReducer } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const [favCount, dispatch] = useReducer((favCount, selected) => {
    return selected ? favCount + 1 : favCount - 1;
  }, 0);

  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favCount={favCount} />
      <PhotoList photos={props.photos} favTracker={dispatch} />
    </div>
  );
};

export default HomeRoute;