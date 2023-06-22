import "./UploadNavbar.css"

export default function UploadNavbar({type,setType}) {
  return (
 <>
    <button onClick={e => setType("Question")}
        // Change class name based on type
        >
        This is Question
    </button>

    <button 
    onClick={e=>setType("Blog")}
    // Change class name based on type
    
    >
    This is Blog
    </button>
 </>
)
}
