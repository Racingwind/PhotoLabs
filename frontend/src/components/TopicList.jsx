import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  const topicArr = sampleDataForTopicList.map((entry) => <TopicListItem key={entry.id} {...entry} />);
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicArr}
    </div>
  );
};

export default TopicList;
