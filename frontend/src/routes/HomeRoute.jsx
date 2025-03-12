import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favorites, addFavorite, removeFavorite }) => {
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
      />
    </div>
  );
};

export default HomeRoute;
