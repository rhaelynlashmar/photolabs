import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favorites, toggleFavorite, openModal }) => {
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        favorites={favorites}
      />
      <PhotoList 
        photos={photos} 
        favorites={favorites} 
        toggleFavorite={toggleFavorite}
        openModal={openModal} 
      />
    </div>
  );
};

export default HomeRoute;
