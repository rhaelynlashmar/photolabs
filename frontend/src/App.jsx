import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photo) => {
    const isFavorited = favorites.some(fav => fav.id === photo.id);
    if (isFavorited) {
      setFavorites(favorites.filter(fav => fav.id !== photo.id));
    } else {
      setFavorites([...favorites, photo]);
    }
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
        toggleFavorite={toggleFavorite} 
        onPhotoClick={handlePhotoClick}
      />
      {modalPhoto && (
        <PhotoDetailsModal 
          photo={modalPhoto} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
          onClose={closeModal}  
        />
      )}
    </div>
  );
};

export default App;
