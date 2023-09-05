import React, { useState } from 'react'
import "./Upload.css"
import ReactCrop from 'react-image-crop';

const Cropper = () => {
  const [src, selectFile] = useState(null);
    /*Implement a function in react to crop and upload   */

    const cropImage = () => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(
            image[0], //  
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );
          
        const base64Image = canvas.toDataURL('image/jpeg');
        setResult(base64Image);
    }
  const handleFileChange = (e) => {
    selectFile(URL.createObjectURL(e.target.files[0]));
  }
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [crop, setCrop] = useState({ unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
    disabled: true,
    locked : true   });
console.log(crop.width)
const handleCropComplete = () => {
            // Create a new image with the cropped area
            const canvas = document.createElement('canvas');
            const scaleX = image.naturalWidth / image.width;
            const scaleY = image.naturalHeight / image.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(
                image[0],
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height
            );
            const base64Image = canvas.toDataURL('image/jpeg');
            setResult(base64Image);
          };
          console.log(result)
  return (
    <div className="container">
        <div className="row">
            <div className="col-6">
            <input type='file' accept='image/*' onChange={handleFileChange} />
            </div>
            <div className="col-6">
                {src && (
                    <div >
                             {/* <ReactCrop 
                             aspect={16/9}
                             src = {src}  
                             crop = {crop} 
                             onChange={setCrop} 
                             
                             > 
                             <img onImageLoaded = {setImage} src= {src} alt=""/> 
                             </ReactCrop> */}
                                 
                             <ReactCrop
                              src = {src}
                              crop = {crop}
                              onChange={setCrop}
                              onComplete={cropImage}
                              >
                              <img onImageLoaded = {setImage} src= {src} alt=""/>
                              </ReactCrop>
                              <button  onClick={() => cropImage()}>Crop</button>  

                    </div>               
                 
                )}
                  {result && (
                    
                    <div>
                         
                        <h1>yaara</h1>
                      <img src={result} alt="Cropped Image" className='img-fluid' />
                    </div>
                  )}
            </div>
        </div>

    </div>
    
  )
}
export default Cropper;