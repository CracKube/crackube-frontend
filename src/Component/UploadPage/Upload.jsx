import { useState } from "react"
import "./Upload.css"

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
  )
}

const InputArea = ({ setBody }) => {
  return (
    <div className="description">
      <h2>Description</h2>
      <h3>Write whatever</h3>
      <textarea
        placeholder="Write whatever you want..."
        name="description"
        id="description"
        cols="30"
        rows="10"
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="btns">

        <button className="btn cancel">cancel</button>
        <button className="btn add">Add</button>
      </div>
    </div>
  )
}

const UploadThumbanil = ({ image, setImage }) => {
  return (
    <div className="thumbnail">
      <h2>Upload Thumbnail</h2>
      <h3>Upload ur image</h3>
      <label htmlFor="file" className="file-upload">
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={(e) => {
            // console.log(e.target.files[0])
            //Turn image to base64 string
            if (!e.target.files[0]) return;
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0])
            reader.onload = () => {
              var dataURL = reader.result;
              // console.log(dataURL)
              setImage(dataURL.split(",")[1])
            }
          }
          }
        />
        {image && (
          <div className="upload-image">
            <img src={`data:image/png;base64,${image}`} alt="image" />
            <button
              className="btn-remove"
              onClick={() => setImage("")}
            >X</button>
          </div>
        )}
        {
          !image && (

            <div className="file-input">


              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              Upload
            </div>
          )

        }
      </label>

    </div>
  )
}

const Category = ({ category, setCategory }) => {
  return (
    <div>
      <h2>Category</h2>
      <h3>Choose ur category</h3>
      <input
        type="text"
        className="input"
        placeholder="Enter category seperated by comma"
        onChange={
          (e) => {
            if (e.target.value.split(",").length > 3) {
              alert("You can only choose 3 categories")
              setCategory([])
            }
            if (e.target.value.split(",").length > 0) {
              setCategory(e.target.value.split(","))
            }
          }
        } />
    </div>
  )
}



export default function Upload({ type }) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [image, setImage] = useState("")
  const [category, setCategory] = useState([])
  const userPosted = "test22"
  const userId = "test123456788"
  const handleSubmit = async (e) => {
    e.preventDefault()
    let data, res;
    if (type == "Blog") {
      data = `blogTitle=${title}&blogBody=${body}&blogImage=${image}&userPosted=${userPosted}&userId=${userId}&blogTags=${category}`
      res = await fetch("https://crackube-backend-test.onrender.com/blogs/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data
      }
      )
    }
    else {
      data = `questionBody=${body}&questionTags=${category}&userPosted=${userPosted}`
      res = await fetch("https://crackube-backend-test.onrender.com/questions/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data
      }
      )
    }
    console.log(await res.json())

    if (res.status == 200) {
      alert("Successfully Posted")
    }
    else {
      alert("Something went wrong")
      return
    }
    setBody("")
    setTitle("")
    setImage("")
    setCategory([])
    window.location.href = "/"
  }
  return (
    <div className="uploadForm">
      <div className="banner">
        {
          type == "Blog" ? (
            <>
              <div><h1>Write Whatever Comes to your mind💫</h1></div>
              <div>
                <button className="btn btn-draft">Save Draft</button>
                <button className="btn btn-upload" onClick={handleSubmit}>Publish</button>
              </div>
            </>
          )
            :
            (
              <>
                <div><h1>Ask for anything</h1></div>
                <div>
                  <button className="btn btn-cancel">Cancel</button>
                  <button className="btn btn-upload" onClick={handleSubmit}>Upload</button>
                </div>
              </>
            )
        }
      </div>
      {type == "Blog" && <Title setTitle={setTitle} />}

      <InputArea setBody={setBody} />

      <UploadThumbanil setImage={setImage} image={image} />

      <Category category={category} setCategory={setCategory} />
    </div>
  )
}
