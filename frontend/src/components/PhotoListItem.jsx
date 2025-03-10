import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({ photo }) => {
  const { id, location, urls, user} = photo;
  const { city, country} = location;
  const { full, regular } = urls;
  const { name, profile } = user;

  return (
    <div className="photo-list__item">
      <PhotoFavButton />
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
