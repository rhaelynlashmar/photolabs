import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (photo) => {
    setFavorites([...favorites, photo]);
  };

  const removeFavorite = (photoId) => {
    setFavorites(favorites.filter(photo => photo.id !== photoId));
  };

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        favorites={favorites} 
        addFavorite={addFavorite} 
        removeFavorite={removeFavorite} 
      />
    </div>
  );
};

export default App;
