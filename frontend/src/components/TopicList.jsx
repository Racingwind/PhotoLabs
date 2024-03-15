import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = (props) => {

  const topicArr = props.topics.map((entry) => <TopicListItem key={entry.id} topic={entry} />);
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicArr}
    </div>
  );
};

export default TopicList;
