import React from "react";
import { CardTitle1, CardAuthor1 } from "../Constants";
import moment from "moment/moment";
import "./CardBlog.css";
import Skeleton from "react-loading-skeleton";
function Card(props) {
  return (
    <div
      className="card__container_blog"
      id={props.theme}
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.location.href = `/blog/${props.id}`;
      }}
    >
      <div className="img__container">
      <div className="tags-container">
             <div className="blog-tag"> <p>{props.tags[0]}</p> </div>
        </div>
        {props.loading ? (
          <Skeleton className="h-40" />
        ) : (
          <img src={props.thumbnail} alt="" className="thumbnailBlog_blog" />
        )}
      </div>
      <div id={props.theme}>
        <CardTitle1
          className="titleContainer-s"
          title={props.title}
          id={props.theme}
        />
      </div>
      <div className="card__details" id={props.theme}>
        <CardAuthor1
          id={props.theme}
          authorImage={props.authorImage}
          author={props.author}
          modified={moment(props.modified).fromNow()}
        />
      </div>
    </div>
  );
}

export default Card;
