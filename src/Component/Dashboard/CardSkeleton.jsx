import React from "react";
import Skeleton from "react-loading-skeleton";
import "./Card.css";
const CardSkeleton = ({ blogs }) => {
  return Array(10)
    .fill(0)
    .map((item, index) => (
      <div className="skel-container" key={index}>
        <div className="img__container">
          <div className="tags-container"> </div>
          <Skeleton alt="" className="thumbnailBlogSk" borderRadius={"1.25rem"}/>
        </div>
        <Skeleton className="title-skel" borderRadius= {"1rem"}>
          <div className="titleContainer" />
        </Skeleton>
        <div className="skel-flex">
          <div className="left-col">
            <Skeleton circle width={30} height={30} className="image"  />
          </div>
          <div className="right-col" >
            <Skeleton  borderRadius= {"1rem"}/>
          </div>
        </div>
      </div>
    ));
};

export default CardSkeleton;
