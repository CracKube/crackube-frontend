import React from "react";
import styles from "./BlogAuthor.module.css";
import { useState,  } from "react";
import { useRef } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";


const BlogShare = ({ img, note }) => {
  const [isOpen, setIsOpen] = useState(false);
  const linkToCopy = window.location.href; // Replace with your link
  const textAreaRef = useRef(null);

  const copyToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
  };
  return (
    <div className="dropdown-container-s">
      <div className="dropdown-button-s" onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.blogOp}>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <p>{note}</p>
          </div>
        </div>
        <div>
          {isOpen && (
            <div className="horizontal-dropdown-list">
              {/* <FacebookShareButton url= {window.location.href}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url = {window.location.href}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            <TwitterShareButton url = {window.location.href}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton> */}
              <input
                type="text"
                value={linkToCopy}
                ref={textAreaRef}
                readOnly
                style={{ position: "absolute", left: "-9999px" }}
              />
              <button onClick={copyToClipboard}>Copy Link</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogShare;
