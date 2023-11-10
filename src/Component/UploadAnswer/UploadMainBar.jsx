import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../UploadBlog/UploadBlog.css";
import Tesseract from "tesseract.js";
import Arrow from "../../Assets/ans-back-arrow.svg";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";

const UploadMainBar = ({  }) => {
  const theme = useTheme();
  const text = useLocation();
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blackquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  const [imageData, setImageData] = useState("");
  const [type, setType] = useState("CK");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editorText, setEditorText] = useState(text.state ? text.state.editorText: ' ');
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [amount, setAmount] = useState(0);
  const userPosted = window.localStorage.getItem("userId");

  // const convertImageToText = async () => {
  //   if(!imageData) return;
  //   await worker.load();
  //   await worker.loadLanguage("eng");
  //   await worker.initialize("eng");
  //   const { data: { text } } = await worker.recognize(imageData);
  //   setOcr(text);
  //   console.log(text);
  // }

  // Tesseract.recognize(
  //   file,
  //   'eng',
  //   ).then(({ data: { text } }) => {
  //     setEditorText(text);
  //     console.log(text);
  //   })
  const handleButton = () => {
    setType("CK");
  };
  const handleCash = () => {
    setType("Cash");
  };

  const convertImageToText = async (file) => {
    const worker = await Tesseract.createWorker("eng", 1, (m) =>
      console.log(m)
    );
    const {
      data: { text },
    } = await worker.recognize(file);
    console.log(text);
    setEditorText(text);
  };
  const handleImageState = () => {
    setImage("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (!file) return;
    if (file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        setEditorText("Recognizing...");
        reader.onload = () => {
          var dataURL = reader.result;
          setImageData(dataURL);
          convertImageToText(file);
          setImage(`data:image/png;base64,${dataURL.split(",")[1]}`);
          console.log(image);
        };
        reader.readAsDataURL(file);
      } else {
        setImage("");
      }
    }
  };

  const handleUpload = async () => {
    let data, res;
    data = `questionBody=${editorText}&questionTags=${category}&userPosted=${userPosted}&points=${amount}&type=${type}`;
    res = await fetch(
      "https://crackube-backend-test.onrender.com/questions/ask",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      }
    );

    const response = await res.json();

    console.log(response);
    if (res.status == 200) {
      toast.success("Successfully Posted", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(response, {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    setBody("");
    setTitle("");
    setImage("");
    setCategory([]);
    window.location.href = "/home";
  };

  return (
    <div className="blog-layout" id={theme.mode}>
      <ToastContainer />
      <div className="blog-top">
        <span className="blog-gradient-text">Ask a Question</span>
        <div className="upload-flex-top">
          <div className="upload-back">
            <button>
              {" "}
              <a href="/home">
                <img src={Arrow} alt="" />
              </a>
            </button>
          </div>
          <button
            className="button"
            style={{ cursor: "pointer" }}
            onClick={handleUpload}
          >
            Publish
          </button>
        </div>
      </div>
      <div className="blog-upload-content">
        <div className="blog-description">
          <ReactQuill
            value={editorText}
            onChange={setEditorText}
            className="editor-textarea"
            modules={modules}
          />
        </div>
      </div>

      <div className="ans-divider">
        <p>Either Type👆 or Click👇</p>
      </div>

      <div className="thumbnailUpload">
        <label htmlFor="file" className="file-upload">
          {image && (
            <div className="upload-image">
              <img src={`${image}`} alt="" />
              <button className="btn-remove" onClick={handleImageState}>
                X
              </button>
            </div>
          )}
          {!image && (
            <div className="upload-box">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.7 20.0839C38.0282 16.6793 36.1952 13.6136 33.5141 11.4104C30.8331 9.20717 27.4702 8.00312 24 8.00391C18.22 8.00391 13.2 11.2839 10.7 16.0839C7.76047 16.4016 5.04201 17.7943 3.06698 19.9945C1.09194 22.1948 -0.000343404 25.0473 8.09855e-08 28.0039C8.09855e-08 34.6239 5.38 40.0039 12 40.0039H38C43.52 40.0039 48 35.5239 48 30.0039C48 24.7239 43.9 20.4439 38.7 20.0839ZM28 26.0039V34.0039H20V26.0039H14L24 16.0039L34 26.0039H28Z"
                  fill="#F42271"
                />
              </svg>
              <h3>Drag & drop an image to upload</h3>
              <h3>only png or jpeg upto 10 MB</h3>
              <div className="file-input">
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  accept=".jpg, .jpeg, .png"
                ></input>
                <div className="upload--btn">Choose File</div>
              </div>
            </div>
          )}
        </label>
        <div className="cat-container">
          <h1>Categories</h1>
          <input
            type="text"
            className="cat-input"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="points-wrap">
        <div className="points-toggle">
          <button
            className={`points-${type} `}
            id="button"
            onClick={handleButton}
          >
            CK Points
          </button>
          <button className={`cash-${type} `} id="button" onClick={handleCash}>
            Real Cash
          </button>
        </div>
      </div>
      <div className="point-amount">
        <div className="select-amount">
          <input
            type="number"
            min={10}
            max={500}
            step={5}
            pattern="[0-9]"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <p>you have 54 points</p>
      </div>
    </div>
  );
};

export default UploadMainBar;
