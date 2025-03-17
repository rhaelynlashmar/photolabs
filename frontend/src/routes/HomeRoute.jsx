import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, photos, favorites, toggleFavorite, openModal, onTopicClick }) => {
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics} 
        favorites={favorites}
        onTopicClick={onTopicClick}
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
