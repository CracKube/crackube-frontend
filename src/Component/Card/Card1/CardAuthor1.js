import styles from "./CardAuthor1.module.css";
import { bookmarkUrl } from "../../Constants";
import BlogShare from "../../../Assets/BlogShare.svg";
import BlogOptions from "../../../Assets/BlogOption.svg";
import BlogLike from "../../../Assets/BlogLike.svg";
import { useEffect, useRef, useState } from "react";
import Dropdown from "../../DropDown/DropDown";
import UploadDropdown from "../../DropDown/UploadDropDown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "react-router-dom";
export default function CardAuthor1(props) {
  const [isOpen, setIsOpen] = useState(false);
  const ques = props.author && props.author.length;
  const val = ques && props.author.slice(0, 10);

  const uploadOption = [
    { value: "option1", label: "Ask a question", route: "/uploadanswer" },
    { value: "option2", label: "Write a Blog", route: "/uploadblogs" },
    { value: "option3", label: "Code", route: "/uploadcode" },
  ];

  const [shareableLink, setShareableLink] = useState("");
  const [sharePopup, setSharePopup] = useState(false);
  // const shareButton = () => {
  //   setSharePopup(!sharePopup);
  //   setShareableLink(`http://localhost:3000/blog/${props.blogId}`);
  //   // console.log(`http://localhost:3000/blog/${props.blogId}`);
  // };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareableLink);
      alert("Link copied successfully!");
    } catch (err) {
      console.error("Failed to copy link:", err);
      alert("Failed to copy link. Please try manually.");
    }
  };

  const popupRef = useRef(null);
  const shareButton = () => {
    setSharePopup(true);
    setShareableLink(`http://localhost:3000/blog/${props.blogId}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSharePopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  return (
    <>
      <div className={styles.authorContainer}>
        <div className={styles.image}>
          <img src={props.authorImage} alt="" />
        </div>
        <div className={styles.title}>
          <div>
            {ques < 10 ? (
              <div className="auth-name">{props.author}</div>
            ) : (
              <div className="auth-name">{val}...</div>
            )}
          </div>
          <div className="modi">posted {props.modified}</div>
        </div>
        <div className={styles.bookmark}>
          <button
            style={{
              backgroundColor: "transparent",
            }}
          >
            <img src={BlogLike} alt="" />
          </button>
          <button
            onClick={shareButton}
            // onBlur={() => {
            //   setSharePopup(false);
            // }}
            style={{
              backgroundColor: "transparent",
            }}
          >
            <img src={BlogShare} alt="" />
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            onBlur={() => {
              setIsOpen(false);
            }}
            style={{
              backgroundColor: "transparent",
            }}
          >
            <img src={BlogOptions} alt="" />
          </button>

          
        </div>
      </div>
      {isOpen && (
        <div className="horizontal-dropdown-list-model">
          <h3
            style={{
              color: "black",
            }}
          >
            Report image or title
          </h3>
          {uploadOption.map((option) => (
            <div
              key={option.value}
              style={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <input type="radio" name="radioGroup" />
              <NavLink
                to={option.route}
                className="horizontal-dropdown-option-model"
              >
                {option.label}
              </NavLink>
            </div>
          ))}
          <div className="model-button_div">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </button>
            <button>Report</button>
          </div>
        </div>
      )}
      {sharePopup && (
        <div
          className="horizontal-dropdown-list-model"
          style={{
            padding: "2rem",
            width: "30rem",
            height: "15rem",
            marginTop: "2rem",
          }}
          ref={popupRef}
        >
          {
            <div className="content hidden">
              <p>Share this link via</p>
              <ul className="icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </ul>
              <p>Or copy link</p>
              <br />
              <div className="share_field">
                <i className="url-icon uil uil-link"></i>
                <input
                  className="share_input"
                  type="text"
                  readonly
                  value={shareableLink}
                  style={{
                    width: "19rem",
                    marginLeft: "1rem",
                  }}
                />
                <button className="share_button" onClick={copyLink}>
                  Copy
                </button>
              </div>
            </div>
          }
        </div>
      )}
    </>
  );
}
