import React from "react";
import { CardTitle1, CardAuthor1 } from "../Constants";
import moment from "moment/moment";
import "./Card.css";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <Link to = {`/blog/${props.id}`} >
    <div
      className="card__container"
      id={props.theme}
      style={{ cursor: "pointer" }}
    >
      
        <div className="img__container">
          <div className="tags-container">
            <div className="blog-tag">
              {" "}
              <p>{props.tags[0]}</p>{" "}
            </div>
          </div>
          {props.loading ? (
            <Skeleton className="h-40" />
          ) : (
            <img src={props.thumbnail} alt="" className="thumbnailBlog" />
          )}
        </div>
        <div>
          <CardTitle1
            className="titleContainer"
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
    </Link>

  );
}

export default Card;
