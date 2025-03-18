import { useReducer, useEffect } from 'react';

// Defining action types for the reducer
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  CLOSE_MODAL: 'CLOSE_MODAL',
  OPEN_MODAL: 'OPEN_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_TOPIC_PHOTOS: 'SET_TOPIC_PHOTOS'
};

// Initial state for the reducer
const initialState = {
  modalPhoto: null,
  favorites: [],
  photoData: [],
  topicData: [],
};

// Reducer function to manage state changes based on actions
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
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.SET_TOPIC_PHOTOS:
      return { ...state, photoData: action.payload };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

// Custom hook to manage application data
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetching initial photo and topic data
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => console.error('Fetch error:', error));
  
    fetch('http://localhost:8001/api/topics')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

    // Function to fetch photos by topic
    const fetchPhotosByTopic = (topicId) => {
      fetch(`http://localhost:8001/api/topics/${topicId}/photos`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_PHOTOS, payload: data }))
        .catch((error) => console.error('Fetch error:', error));
    };

  // Function to toggle a photo as favorite
  const toggleFavorite = (photo) => {
    const isFavorited = state.favorites.some(fav => fav.id === photo.id);
    if (isFavorited) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photo });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photo });
    }
  };

  // Function to close the modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  // Function to open the modal with photo details
  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: photo });
  };


  // Returning the current state and functions to interact with it
  return {
    modalPhoto: state.modalPhoto,
    favorites: state.favorites,
    photos: state.photoData,
    topics: state.topicData,
    toggleFavorite,
    openModal,
    closeModal,
    fetchPhotosByTopic
  };
};

export default useApplicationData;