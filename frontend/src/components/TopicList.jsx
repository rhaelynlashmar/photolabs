import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// TopicList: Renders a list of topics

// - topics: Array of topic objects to be displayed
// - onTopicClick: Function to handle topic click events
const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        // Rendering each topic as a TopicListItem component
        <TopicListItem 
          key={topic.id} 
          title={topic.title} 
          onClick={() => onTopicClick(topic.id)} 
        />
      ))}
    </div>
  );
};

export default TopicList;
