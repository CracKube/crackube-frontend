import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Arrow from "../../Assets/ans-back-arrow.svg";
import { useTheme } from "../../Context/ThemeContext";
import "./UploadBlog.css";
import UploadSection from "./UploadSection";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function UploadMainBar({}) {
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editorText, setEditorText] = useState("");
  const [first, setFirst] = useState(true);

  const redirect = () => {
    setFirst(false);
  };
  const getBack = () => {
    setFirst(true);
  };

  //popup when users goes to next line

  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const editor = document.querySelector(".ql-editor");
    if (editor) {
      editor.addEventListener("keyup", handleKeyUp);
    }
    return () => {
      if (editor) {
        editor.removeEventListener("keyup", handleKeyUp);
      }
    };
  }, [editorText]);

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setPopupPosition({
        top: rect.bottom,
        left: rect.left,
      });
      setShowPopup(true);
    }
  };

  const handleChange = (content) => {
    setEditorText(content);
    setShowPopup(false);
  };

  return (
    <div className="home-container">
      <div className="blog-layout">
        {first && (
          <>
            <div className="blog-top">
              <span className="blog-gradient-text">Write Your Thoughts!</span>
              <div className="upload-cont">
                <div className="upload-back">
                  <button>
                    {" "}
                    <a href="/home">
                      <img src={Arrow} alt="" />
                    </a>
                  </button>
                </div>
                <div className="nxt-btn">
                  <button className="button-draft"> Save as draft </button>
                  <button className="button" onClick={redirect}>
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="blog-upload-content">
              <input
                type="text"
                placeholder="Blog Title..."
                className="input-blog"
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="blog-description">
                {/* <ReactQuill
                  theme="snow"
                  value={editorText}
                  onChange={handleChange}
                  className="editor-textarea"
                  modules={modules}
                /> */}
                <Editor
                  editorState={editorText}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={handleChange}
                />

                {showPopup && (
                  <div
                    style={{
                      position: "absolute",
                      top: `${popupPosition.top}px`,
                      left: `${popupPosition.left}px`,
                      backgroundColor: "white",
                      border: "1px solid black",
                      padding: "10px",
                      zIndex: 1000,
                    }}
                  >
                    Add something
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {!first && (
          <div>
            <div className="upload-back">
              <button>
                {" "}
                <a href="/uploadBlogs">
                  <img src={Arrow} alt="" />
                </a>
              </button>
            </div>
            <UploadSection
              body={editorText}
              title={title}
              setFirst={setFirst}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadMainBar;
