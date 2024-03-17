import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const TopicList = ({topics}) => {

  const topicArr = topics.map((entry) => <TopicListItem key={entry.id} topic={entry} />);
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicArr}
    </div>
  );
};

export default TopicList;
