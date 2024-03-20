import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({topics, getPhotosByTopics}) => {

  const topicArr = topics.map((entry) => <TopicListItem key={entry.id} topic={entry} getPhotosByTopics={getPhotosByTopics} />);
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicArr}
    </div>
  );
};

export default TopicList;
