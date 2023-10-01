import React from 'react'
import './ImageUpload.scss'
import addImage from '../../assets/img/plusImg.svg'
const ImageUpload = ({inputName, setImage, image}) => {

  
    return (
      <div className="custom-file-upload">
        <input type="file" id={inputName} onChange={(event) => {setImage(event.target.files[0])}} />
        <label htmlFor={inputName} id="fileInputLabel">
          {image ? (
            <img src={URL.createObjectURL(image)} style={{width: '250px', maxHeight: 290}} alt="Preview" />
          ) : (
              <img src={addImage} style={{width: '50px'}} alt='add'/>
          )}
        </label>
      </div>
    );
  };

export default ImageUpload
