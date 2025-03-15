import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, favorites, toggleFavorite, openModal }) => { 
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite}
          openModal={openModal} 
        />
      ))}
    </ul>
  );
};

export default PhotoList;
