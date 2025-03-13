import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favorites, toggleFavorite, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite}
          onClick={() => onPhotoClick(photo)}  
        />
      ))}
    </ul>
  );
};

export default PhotoList;
