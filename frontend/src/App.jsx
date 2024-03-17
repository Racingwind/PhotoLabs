import { React, useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (photo) => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);



  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} openModal={openModal} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default App;
