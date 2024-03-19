import { React, useReducer, useEffect } from 'react';

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
    case 'setPhotoData':
      return { ...state, photoData: action.payload};
    case 'setTopicData':
      return { ... state, topicData: action.payload};
  }
};



const useApplicationData = () => {
  // State object containing the entire state of the application
  const [state, dispatch] = useReducer(reducer, {
    favourites: {},
    isModalOpen: false,
    selectedPhoto: null,
    photoData: [],
    topicData: []
  });

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'setPhotoData', payload: data}));
    fetch('/api/topics')
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'setTopicData', payload: data}));
  }, []);

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