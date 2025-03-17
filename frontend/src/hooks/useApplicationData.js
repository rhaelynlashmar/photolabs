import { useReducer, useEffect } from 'react';


export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  CLOSE_MODAL: 'CLOSE_MODAL',
  OPEN_MODAL: 'OPEN_MODAL',
  FETCH_PHOTOS: 'FETCH_PHOTOS',
  FETCH_TOPICS: 'FETCH_TOPICS'
};

const initialState = {
  modalPhoto: null,
  favorites: [],
  photoData: [],
  topicData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favorites: state.favorites.filter(fav => fav.id !== action.payload.id) };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, modalPhoto: null };
    case ACTIONS.OPEN_MODAL:
      return { ...state, modalPhoto: action.payload };
      case ACTIONS.FETCH_PHOTOS:
      return { ...state, photoData: action.payload };
    case ACTIONS.FETCH_TOPICS:
      return { ...state, topicData: action.payload };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.FETCH_PHOTOS, payload: data }));

    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.FETCH_TOPICS, payload: data }));
  }, []);

  const toggleFavorite = (photo) => {
    const isFavorited = state.favorites.some(fav => fav.id === photo.id);
    if (isFavorited) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
    }
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photo });
  };

  return {
    modalPhoto: state.modalPhoto,
    favorites: state.favorites,
    photos: state.photoData,
    topics: state.topicData,
    toggleFavorite,
    openModal,
    closeModal
  };
};

export default useApplicationData;