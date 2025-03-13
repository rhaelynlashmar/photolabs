import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favorites }) => {
  const isFavPhotoExist = favorites && favorites.length > 0;

  return (
    <div className="fav-badge">
      <FavIcon displayAlert={isFavPhotoExist} selected={false} isInTopNavigationBar={true} />
    </div>
  );
};

export default FavBadge;

