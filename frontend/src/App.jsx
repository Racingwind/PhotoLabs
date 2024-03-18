import { React, useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation

const App = () => {

  const { state, favouritesTracker, openModal, closeModal } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        openModal={openModal}
        favourites={state.favourites}
        favouritesTracker={favouritesTracker}
      />
      {state.isModalOpen && 
        <PhotoDetailsModal 
          photo={state.selectedPhoto}
          openModal={openModal}
          closeModal={closeModal}
          favourites={state.favourites}
          favouritesTracker={favouritesTracker}
        />
      }
    </div>
  );
};

export default App;