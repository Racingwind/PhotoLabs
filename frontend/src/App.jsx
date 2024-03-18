import { React, useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation

const App = () => {

  const [favourites, setFavourites] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState();
  
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

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);


  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} openModal={openModal} favourites={favourites} favouritesTracker={favouritesTracker} />
      {isModalOpen && <PhotoDetailsModal 
                        photo={selectedPhoto}
                        openModal={openModal}
                        closeModal={closeModal}
                        favourites={favourites}
                        favouritesTracker={favouritesTracker}
      />}
    </div>
  );
};

export default App;
