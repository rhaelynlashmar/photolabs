import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => {
        return <TopicListItem key={topic.id} title={topic.title} onClick={() => onTopicClick(topic.id)} />
      })}
    </div>
  );
};

export default TopicList;
