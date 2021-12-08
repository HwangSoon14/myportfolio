import React from "react";
import "./WorkItem.scss";
const WorkItem = ({ imgUrl, desc, workUrl }) => {
  return (
    <div className="wi">
      <div className="wi-wrapper">  
        <a href={workUrl} className="wi-button">View Project</a>
        <div className="wi-bg"></div>
        <img src={imgUrl} alt="work" />
      </div>
      <span>{desc}</span>
    </div>
  );
};

export default WorkItem;
