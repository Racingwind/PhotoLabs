import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topic, getPhotosByTopics}) => {

  const handleClick = () => {
    getPhotosByTopics(topic.id);
  };

  return (
    <div className="topic-list__item">
      <span onClick={handleClick}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
