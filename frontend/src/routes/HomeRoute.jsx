import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

// HomeRoute: Renders the home page

// - topics: Array of topic objects to be displayed
// - photos: Array of photo objects to be displayed
// - favorites: Array of favorite photo IDs
// - toggleFavorite: Function to toggle a photo as favorite
// - openModal: Function to open a modal with photo details
// - onTopicClick: Function to handle topic click events
const HomeRoute = ({ topics, photos, favorites, toggleFavorite, openModal, onTopicClick }) => {
  return (
    <div className="home-route">
      {/* Rendering the top navigation bar */}
      <TopNavigation 
        topics={topics} 
        favorites={favorites}
        onTopicClick={onTopicClick}
      />
      {/* Rendering the list of photos */}
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
