import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

// This component displays a badge with a favorite icon
const FavBadge = ({ favorites }) => { // Props: an array of favorited items
  const isFavPhotoExist = favorites && favorites.length > 0;
  // checks if there are any "liked" or "favorited" photos 

  return (
    <div className="fav-badge">
      {/* Render the FavIcon component with selected props*/}
      <FavIcon displayAlert={isFavPhotoExist} selected={false} isInTopNavigationBar={true} />
    </div>
  );
};

export default FavBadge;

