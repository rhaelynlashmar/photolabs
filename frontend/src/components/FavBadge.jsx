import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={isFavPhotoExist} selected={false} isInTopNavigationBar={true} />
    </div>
  );
};

export default FavBadge;

