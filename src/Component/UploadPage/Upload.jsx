import { useState, useRef } from "react";
import "./Upload.css";
import axios from "axios";
import React from "react";
import "../UnSplash/unsplash.css";
import useAxios from "../hooks/useAxios";
import DropDownSplash from "./DropDownSplash";
import { ToastContainer, toast } from "react-toastify";

const Title = ({ setTitle }) => {
  return (
    <div className="title">
      <h2>Title</h2>
      <h3>Write ur title.250 words max</h3>
      <input
        type="text"
        placeholder="Add a Title that describes your belongs"
        className="input"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

const InputArea = ({ setBody }) => {
  return (
    <div className="description">
      <h2>Description</h2>
      <h3>Write whatever</h3>
      <div>
        <textarea
          placeholder="Write whatever you want..."
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <div className="btns">
        <button className="btn cancel">cancel</button>
        <button className="btn add">Add</button>
      </div>
    </div>
  );
};

const UploadThumbanil = ({ image, setImage, setFile, unimage, setUnImage }) => {
  const options = [{ value: "Upload" }, { value: "UnSplash" }];
  return (
    <div className="thumbnail">
      <h2>Upload Thumbnail</h2>

      <h3>Upload your image</h3>

      <DropDownSplash
        options={options}
        image={image}
        setImage={setImage}
        setFile={setFile}
      />
    </div>
  );
};

const Category = ({ category, setCategory }) => {
  return (
    <div>
      <h2>Category</h2>
      <h3>Choose ur category</h3>
      <input
        type="text"
        className="input"
        placeholder="Enter category seperated by comma"
        onChange={(e) => {
          if (e.target.value.split(",").length > 3) {
            toast.warning("You can only choose 3 categories", {
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setCategory([]);
          }
          if (e.target.value.split(",").length > 0) {
            setCategory(e.target.value.split(","));
          }
        }}
      />
    </div>
  );
};

export default function Upload({ type }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [unimage, setUnImage] = useState("");
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState("");
  const [blogImageProvider, setBlogImageProvider] = useState("");
  const userPosted = "test22";
  const userId = "test123456788";
  const formData = new FormData();
  formData.append("image", file);
  formData.append("userId", userId);
  formData.append("userPosted", userPosted);
  formData.append("blogTitle", title);
  formData.append("blogBody", body);
  formData.append("blogTags", category);
  formData.append("blogImageProvider", blogImageProvider);
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data, res;
    if (type === "Blog") {
      data = await axios.post(
        "https://crackube-backend-test.onrender.com/blogs/post/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      window.location.href = "/home";
    } else {
      data = `questionBody=${body}&questionTags=${category}&userPosted=${userPosted}`;
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
    }
    console.log(await res.json());

    if (res.status == 200) {
      toast.success("Successfully Posted", {
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Something went wrong", {
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
    window.location.href = "/";
  };
  return (
    <div className="uploadForm">
      <ToastContainer />
      <div className="banner">
        {type == "Blog" ? (
          <>
            <div>
              <h1>Write Whatever Comes to your mind💫</h1>
            </div>
            <div>
              <button className="btn btn-draft">Save Draft</button>
              <button className="btn btn-upload" onClick={handleSubmit}>
                Publish
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <h1>Ask for anything</h1>
            </div>
            <div>
              <button className="btn btn-cancel">Cancel</button>
              <button className="btn btn-upload" onClick={handleSubmit}>
                Upload
              </button>
            </div>
          </>
        )}
      </div>
      {type == "Blog" && <Title setTitle={setTitle} />}
      <InputArea setBody={setBody} />
      <UploadThumbanil
        setImage={setImage}
        image={image}
        setFile={setFile}
        unimage={unimage}
        setUnImage={setUnImage}
      />
      <Category category={category} setCategory={setCategory} />
    </div>
  );
}
