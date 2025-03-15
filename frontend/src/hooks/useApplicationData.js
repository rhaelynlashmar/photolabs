import { useState } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [state, setState] = useState({
    modalPhoto: null,
    favorites: [],
    photos: photos,
    topics: topics
  });

  const toggleFavorite = (photo) => {
    const isFavorited = state.favorites.some(fav => fav.id === photo.id);
    const newFavorites = isFavorited
      ? state.favorites.filter(fav => fav.id !== photo.id)
      : [...state.favorites, photo];

    setState(prev => ({ ...prev, favorites: newFavorites }));
  };

  const closeModal = () => {
    setState(prev => ({ ...prev, modalPhoto: null }));
  };

  const openModal = (photo) => {
    setState(prev => ({ ...prev, modalPhoto: photo }));
  };

  return {
    modalPhoto: state.modalPhoto,
    favorites: state.favorites,
    photos: state.photos,
    topics: state.topics,
    toggleFavorite,
    openModal,
    closeModal
  };
};

export default useApplicationData;