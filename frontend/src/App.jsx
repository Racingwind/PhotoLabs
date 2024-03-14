import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const sampleDataForPhotoListItem  = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const App = () => {

  const photoArr = [];
  for (let i = 0; i < 3; i++) {
    photoArr.push(<PhotoListItem key={i} {...sampleDataForPhotoListItem}/>);
  }

  return (
    <div className="App">
      {photoArr}
    </div>
  );
};

export default App;
