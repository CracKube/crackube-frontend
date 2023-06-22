import { useState } from "react"
import Upload from "./Upload"
import UploadNavbar from "./UploadNavbar"

export default function UploadPage() {
  const [type, setType] = useState("Question")
  return (
    <>
      <UploadNavbar type={type} setType={setType} />
      <Upload type={type} />
    </>
  )
}
