import "../styles/TopicListItem.scss";

// TopicListItem: Renders a single topic item

// - title: The title of the topic
// - onClick: Function to handle click events on the topic item
const TopicListItem = ({ title, onClick }) => {
  return (
    <div className="topic-list__item" onClick={onClick}>
      {/* Rendering the topic title */}
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
