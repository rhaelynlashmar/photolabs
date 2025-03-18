import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

// PhotoList: Renders a list of photos:
const PhotoList = ({ photos, favorites, toggleFavorite, openModal }) => {
  // - photos: Array of photo objects to be displayed
  // - favorites: Array of favorite photo IDs
  // - toggleFavorite: Function to toggle a photo as favorite
  // - openModal: Function to open a modal with photo details 
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        // Rendering each photo as a PhotoListItem component
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
