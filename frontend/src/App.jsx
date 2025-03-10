import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photoListitems = Array(3).fill(sampleDataForPhotoListItem).map((photo, index) => (
    <PhotoListItem key={index} photo={photo} />
  )) 
  return (
    <div className="App">
      {photoListitems}
    </div>
  );
};

export default App;
