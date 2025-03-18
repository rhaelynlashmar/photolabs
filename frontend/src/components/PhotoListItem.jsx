import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

// PhotoListItem: Renders a single photo item

// - photo: Object containing photo details
// - favorites: Array of favorite photo IDs
// - toggleFavorite: Function to toggle a photo as favorite
// - openModal: Function to open a modal with photo details
const PhotoListItem = ({ photo, favorites, toggleFavorite, openModal }) => {
  // Destructuring properties from the photo object
  const { location, urls, user } = photo;
  const { city, country } = location;
  const { regular } = urls;
  const { name, profile } = user;

  return (
    <div className="photo-list__item" onClick={() => openModal(photo)}>
      {/* Rendering the favorite button */}
      <PhotoFavButton 
        photo={photo}
        favorites={favorites} 
        toggleFavorite={toggleFavorite} 
      />
      {/* Rendering the photo */}
      <img className="photo-list__image" src={regular} alt={`Photo by ${name}`} />
      <div className="photo-list__user-details">
        {/* Rendering the user profile image */}
        <img className="photo-list__user-profile" src={profile} alt={`${name}'s profile`} />
        <div className="photo-list__user-info">
          {/* Rendering the user name and location */}
          <h2>{name}</h2>
          <p>{city}, {country}</p>
        </div> 
      </div>
    </div>
  );
};

export default PhotoListItem;
