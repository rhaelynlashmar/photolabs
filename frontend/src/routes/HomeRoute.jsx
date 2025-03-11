import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
