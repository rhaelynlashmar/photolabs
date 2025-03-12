import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favorites, addFavorite, removeFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          favorites={favorites} 
          addFavorite={addFavorite} 
          removeFavorite={removeFavorite} 
        />
      ))}
    </ul>
  );
};

export default PhotoList;
