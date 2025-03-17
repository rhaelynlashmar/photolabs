import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    modalPhoto,
    favorites,
    photos,
    topics,
    toggleFavorite,
    openModal,
    closeModal,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        favorites={favorites} 
        toggleFavorite={toggleFavorite} 
        openModal={openModal} 
        onTopicClick={fetchPhotosByTopic}
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
