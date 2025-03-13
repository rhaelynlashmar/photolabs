import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ photo, favorites, addFavorite, removeFavorite, onClose, onPhotoClick }) => {
  if (!photo) {
    return null; // 
  }
  
  const { id, location, urls, user } = photo;
  const { city, country } = location;
  const { regular } = urls;
  const { name, profile } = user;

  const similarPhotos = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton 
          photo={photo}
          favorites={favorites} 
          addFavorite={addFavorite} 
          removeFavorite={removeFavorite} 
        />
        <img className="photo-details-modal__image" src={regular} alt={`Image taken by ${name} in ${city}, ${country}`}></img>
      </div>
      
      
      <div className="photo-details-modal__header">
        <div className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={profile} alt={`${name}'s profile`}/>
        <div className="photo-details-modal__photographer-info">{name}
          <p className="photo-details-modal__photographer-location">{city}, {country}</p>
          </div>
        </div>
        </div>
      
    
      
      <h3 className="photo-details-modal__top-bar">Similar Photos</h3>
        <div className="photo-details-modal__images">
        <PhotoList 
          photos={similarPhotos} 
          favorites={favorites} 
          addFavorite={addFavorite} 
          removeFavorite={removeFavorite} 
          onPhotoClick={onPhotoClick}
      />
      </div>

    </div>
  );
};

export default PhotoDetailsModal;
