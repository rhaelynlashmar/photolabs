import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import React, { useState } from 'react';

const PhotoFavButton = ({ photo, favorites, toggleFavorite }) => {
  const [isActive, setIsActive] = useState(false);

  const isFavorited = favorites.some(fav => fav.id === photo.id);

  const handleFavorite = (event) => {
    event.stopPropagation(); // Stop  bubbling up the tree from modal opening
    setIsActive(!isActive);
    toggleFavorite(photo);
  };

  return (
    <div 
    className={`photo-list__fav-icon ${isActive ? "active" : ''}`}
    onClick={handleFavorite}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
