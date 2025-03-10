import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import React, { useState } from 'react';

const PhotoFavButton = () => {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive);
    console.log("Active", !isActive);
  };

  return (
    <div 
    className={`photo-list__fav-icon ${isActive ? "active" : ''}`}
    onClick={handleClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
