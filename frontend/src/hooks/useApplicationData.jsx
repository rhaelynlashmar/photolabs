import { useState } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photo) => {
    const isFavorited = favorites.some(fav => fav.id === photo.id);
    if (isFavorited) {
      setFavorites(favorites.filter(fav => fav.id !== photo.id));
    } else {
      setFavorites([...favorites, photo]);
    }
  };

  const handlePhotoClick = (photo) => {
    setModalPhoto(photo);
  };

  const closeModal = () => {
    setModalPhoto(null);
  };

  return {
    modalPhoto,
    favorites,
    photos,
    topics,
    toggleFavorite,
    handlePhotoClick,
    closeModal
  };
};

export default useApplicationData;