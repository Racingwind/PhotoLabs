import { React, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'favouritesTracker':    
      if (state.favourites[action.payload]) {
        // if id exists in the favorites object, use object destructuring and spread operator to remove the entry
        const { [action.payload]: removedFromFavourites, ...newFavourites } = state.favourites;
        return { ...state, favourites: newFavourites };
      } else {
        // otherwise use spread operator to add the entry
        return { ...state, favourites: { ...state.favourites, [action.payload]: 1 } };
      }
      case 'openModal':
        return { ...state, selectedPhoto: action.payload, isModalOpen: true };
      case 'closeModal':
        return { ...state, isModalOpen: false };
  }
};

const useApplicationData = () => {
  // State object containing the entire state of the application
  const [state, dispatch] = useReducer(reducer, {
    favourites: {},
    isModalOpen: false,
    selectedPhoto: null,
  });

  const favouritesTracker = (id) => {
    dispatch({ type: 'favouritesTracker', payload: id});
  };

  const openModal = (photo) => {
    dispatch({ type: 'openModal', payload: photo});
  };

  const closeModal = () => {
    dispatch({ type: 'closeModal'});
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