import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

// PhotoDetailsModal: Renders a modal with photo details

// - photo: Object containing photo details
// - favorites: Array of favorite photo IDs
// - toggleFavorite: Function to toggle a photo as favorite
// - onClose: Function to close the modal
// - openModal: Function to open a modal with photo details
const PhotoDetailsModal = ({ photo, favorites, toggleFavorite, onClose, openModal }) => { 
  // If no photo is provided, do not render the modal
  if (!photo) {
    return null; 
  }
  
  // Destructuring properties from the photo object
  const { id, location, urls, user } = photo;
  const { city, country } = location;
  const { regular } = urls;
  const { name, profile } = user;

  // Getting similar photos from the photo object
  const similarPhotos = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      {/* Close button for the modal */}
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        {/* Rendering the favorite button */}
        <PhotoFavButton 
          photo={photo}
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
        />
        {/* Rendering the main photo */}
        <img className="photo-details-modal__image" src={regular} alt={`Image taken by ${name} in ${city}, ${country}`}></img>
      </div>
      
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
          {/* Rendering the photographer's profile image */}
          <img className="photo-details-modal__photographer-profile" src={profile} alt={`${name}'s profile`}/>
          <div className="photo-details-modal__photographer-info">
            {/* Rendering the photographer's name and location */}
            {name}
            <p className="photo-details-modal__photographer-location">{city}, {country}</p>
          </div>
        </div>
      </div>
      
      <h3 className="photo-details-modal__top-bar">Similar Photos</h3>
      <div className="photo-details-modal__images">
        {/* Rendering the list of similar photos */}
        <PhotoList 
          photos={similarPhotos} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
          openModal={openModal} 
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
