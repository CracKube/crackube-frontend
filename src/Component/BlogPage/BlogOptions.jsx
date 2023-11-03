import React from "react";
import styles from "./BlogAuthor.module.css";
import { useState } from "react";
import { FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon } from "react-share";
import { NavLink } from "react-router-dom";

const BlogOptions = ({ img, note, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <div  onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.blogOp}>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <p>{note}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogOptions;
