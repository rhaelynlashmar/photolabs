import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

// TopNavigation: Renders the top navigation bar

// - topics: Array of topic objects to be displayed
// - favorites: Array of favorite photo IDs
// - onTopicClick: Function to handle topic click events
const TopNavigation = ({ topics, favorites, onTopicClick }) => {
  return (
    <div className="top-nav-bar">
      {/* Rendering the logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Rendering the list of topics */}
      <TopicList topics={topics} onTopicClick={onTopicClick} />
      {/* Rendering the favorites badge */}
      <FavBadge favorites={favorites} />
    </div>
  );
};

export default TopNavigation;
