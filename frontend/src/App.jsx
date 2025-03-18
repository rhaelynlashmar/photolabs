import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';


const App = () => {
  // Using custom hook to manage application data
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
      {/* Rendering the home route with necessary props */}
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        favorites={favorites} 
        toggleFavorite={toggleFavorite} 
        openModal={openModal} 
        onTopicClick={fetchPhotosByTopic}
      />
      {/* Conditionally rendering the photo details modal if a photo is selected */}
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
