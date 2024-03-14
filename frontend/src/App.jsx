import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';

// Note: Rendering a single component to build components in isolation

const App = () => {

  // const photoArr = [];
  // for (let i = 0; i < 3; i++) {
  //   photoArr.push(<PhotoListItem key={i} {...sampleDataForPhotoListItem}/>);
  // }

  return (
    <div className="App">
      {/* {photoArr} */}
      <PhotoList />
    </div>
  );
};

export default App;
