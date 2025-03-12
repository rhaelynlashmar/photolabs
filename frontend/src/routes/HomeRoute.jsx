import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favorites, addFavorite, removeFavorite, onPhotoClick }) => {
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        favorites={favorites}
      />
      <PhotoList 
        photos={photos} 
        favorites={favorites} 
        addFavorite={addFavorite} 
        removeFavorite={removeFavorite}
        onPhotoClick={onPhotoClick} 
      />
    </div>
  );
};

export default HomeRoute;
