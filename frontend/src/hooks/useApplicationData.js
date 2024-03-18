import { React, useState } from 'react';

const useApplicationData = () => {
  // State object containing the entire state of the application
  const [state, setState] = useState({
    favourites: {},
    isModalOpen: false,
    selectedPhoto: null,
  });

  // Action to update favourites
  const favouritesTracker = (id) => {
    setState((prevState) => {
      if (prevState.favourites[id]) {
        // if id exists in the favorites object, use object destructuring and spread operator to remove the entry
        const { [id]: _, ...newFavourites } = prevState.favourites;
        return { ...prevState, favourites: newFavourites };
      } else {
        // otherwise use spread operator to add the entry
        return { ...prevState, favourites: { ...prevState.favourites, [id]: 1 } };
      }
    });
  };

  // Action to set selected photo and open modal
  const openModal = (photo) => {
    setState({ ...state, selectedPhoto: photo, isModalOpen: true });
  };

  // Action to close modal
  const closeModal = () => {
    setState({ ...state, isModalOpen: false });
  };

  // "Expose" the state and actions
  return {
    state,
    favouritesTracker,
    openModal,
    closeModal,
  };
};

export default useApplicationData;