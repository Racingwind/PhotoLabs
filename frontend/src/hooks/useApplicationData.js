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
    Promise.all([
      fetch('/api/photos').then((res) => res.json()),
      fetch('/api/topics').then((res) => res.json())
    ])
    .then(([photoData, topicData]) => {
      dispatch({ type: 'setPhotoData', payload: photoData});
      dispatch({ type: 'setTopicData', payload: topicData});
    });
  }, []);

  const getPhotosByTopics = (topic_id) => {
    let url = '/api/photos';
    // modify url is a topic id was passed in
    if (topic_id) {
      url = `/api/topics/photos/${topic_id}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((photoData) => dispatch({ type: 'setPhotoData', payload: photoData}));
  };

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
    getPhotosByTopics,
  };
};

export default useApplicationData;