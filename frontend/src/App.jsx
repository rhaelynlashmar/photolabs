import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';



// Note: Rendering a single component to build components in isolation
const App = () => {
  
  return (
    <div className="App">
      {/* {[...Array(3)].map((photo, index) => ( */}
      {/* // <PhotoListItem key={index} photo={sampleDataForPhotoListItem} /> */}
      {/* ))} */}
      <PhotoListItem/>
    </div>
  );
};

export default App;
