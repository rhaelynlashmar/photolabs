import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import React, { useState } from 'react';

// PhotoFavButton allows users to favorite/unfavorite a photo
const PhotoFavButton = ({ photo, favorites, toggleFavorite }) => {
  // State to manage the active status of the button
  const [isActive, setIsActive] = useState(false); 
  

  // Check if the photo is already in the favorites list
  const isFavorited = favorites.some(fav => fav.id === photo.id);

  // Handle the favorite button click event
  const handleFavorite = (event) => {
    event.stopPropagation(); // Stop  bubbling up the tree from modal opening
    setIsActive(!isActive); // Toggle the active state
    toggleFavorite(photo); // Call the toggleFavorite function passed as a prop
  };

  return (
    <div 
    className={`photo-list__fav-icon ${isActive ? "active" : ''}`}
    onClick={handleFavorite}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} /> {/* Render FavIcon component */}
      </div>
    </div>
  );
};

export default PhotoFavButton;
