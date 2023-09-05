import React, {useState} from "react";
import { MainBar, TopNavBar } from "../Constants";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './UploadBlog.css'
import {useNavigate} from "react-router-dom"
import UploadSection from "./UploadSection";
const modules = {
    toolbar: [
        [{header:[1,2,3,4,5,6,false]}],
        [{font: []}],
        [{size:[]}],
        ["bold","italic","underline","strike","blackquote"],
        [
            {list: "ordered"},
            {list:"bullet"},
            {indent:"-1"},
            {indent:"+1"},
        ],
        ["link","image","video",]
    ],
}

function UploadMainBar({ theme }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editorText, setEditorText] = useState('');
  const [first, setFirst] = useState(true);
  
  const redirect =() => {
    setFirst(false);
  }
  const getBack = () => {
    setFirst(true);
  }
  const handleTextArea = (val) => {
    setBody(val)
    setEditorText(editorText)
  }

  return (
    <div className="home-container">
      <TopNavBar theme={theme} />
      <div className="blog-layout">
        {first && 
          <>
          <div className="blog-top">
          <span className="blog-gradient-text">Write Your Thoughts!</span>
          <button className="button" onClick={redirect}>Next</button>
        </div>
            <div className="blog-content">
             
            <input
              type="text"
              placeholder="Blog Title..."
              className="input"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="blog-description">
              <ReactQuill
                  value={editorText}
                  onChange={setEditorText}
                  className="editor-textarea"
                  modules={modules}
              />
            </div>
          </div>
          </>}
        {!first && (
           <div>
                <button onClick={getBack}>Back</button>
                <UploadSection body = {editorText} title = {title} setFirst={setFirst} />
            </div>
        )}
        
      
        
      </div>
    </div>
  );
}

export default UploadMainBar;