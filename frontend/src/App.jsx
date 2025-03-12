import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (photo) => {
    setFavorites([...favorites, photo]);
  };

  const removeFavorite = (photoId) => {
    setFavorites(favorites.filter(photo => photo.id !== photoId));
  };

  const handlePhotoClick = (photo) => {
    setModalPhoto(photo);
  };

  const closeModal = () => {
    setModalPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        favorites={favorites} 
        addFavorite={addFavorite} 
        removeFavorite={removeFavorite} 
        onPhotoClick={handlePhotoClick}
      />
       {modalPhoto && (
      <PhotoDetailsModal photo={modalPhoto} onClose={closeModal} />
    )}
    </div>
  );
};

export default App;
