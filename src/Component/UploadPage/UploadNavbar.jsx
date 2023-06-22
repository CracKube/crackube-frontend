import "./UploadNavbar.css"

export default function UploadNavbar({ type, setType }) {
  return (
    <div className="upload-navbar">
      <div onClick={e => setType("Question")}
        className={type === "Question" ? "active" : ""}
      >
        Ask Question
      </div>

      <div
        onClick={e => setType("Blog")}
        className={type === "Blog" ? "active" : ""}
      >
        Write a Blog
      </div>
    </div>
  )
}
