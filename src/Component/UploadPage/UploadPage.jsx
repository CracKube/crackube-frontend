import { useState } from "react"
import Upload from "./Upload"
import UploadNavbar from "./UploadNavbar"

export default function UploadPage() {
  const [type,setType]=useState("Question")
  console.log(type)
  return (
    <>
    <UploadNavbar type={type} setType={setType}/>
    <Upload/>
    </>
  )
}
