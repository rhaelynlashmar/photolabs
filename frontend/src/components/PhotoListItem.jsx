import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo, favorites, addFavorite, removeFavorite, onClick }) => {
  const { id, location, urls, user } = photo;
  const { city, country } = location;
  const { regular } = urls;
  const { name, profile } = user;

  return (
    <div className="photo-list__item" onClick={onClick}>
      <PhotoFavButton 
        photo={photo}
        favorites={favorites} 
        addFavorite={addFavorite} 
        removeFavorite={removeFavorite} 
      />
      <img className="photo-list__image" src={regular} alt={`Photo by ${name}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`${name}'s profile`} />
        <div className="photo-list__user-info">
          <h2>{name}</h2>
          <p>{city}, {country}</p>
        </div> 
      </div>
    </div>
  );
};

export default PhotoListItem;
