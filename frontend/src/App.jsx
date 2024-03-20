import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation

const App = () => {

  const { state, favouritesTracker, openModal, closeModal, getPhotosByTopics } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        openModal={openModal}
        favourites={state.favourites}
        favouritesTracker={favouritesTracker}
        getPhotosByTopics={getPhotosByTopics}
        isModalOpen={state.isModalOpen}
      />
      {state.isModalOpen && 
        <PhotoDetailsModal 
          photo={state.selectedPhoto}
          openModal={openModal}
          closeModal={closeModal}
          favourites={state.favourites}
          favouritesTracker={favouritesTracker}
          isModalOpen={state.isModalOpen}
        />
      }
    </div>
  );
};

export default App;