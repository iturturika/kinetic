import React from 'react'
import './ImageUpload.scss'
import addImage from '../../assets/img/plusImg.svg'
const ImageUpload = ({inputName, setImage, image}) => {
const [selectedImage, setSelectedImage] = React.useState(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    reader.readAsDataURL(file);
  } else {
    setSelectedImage(null);
  }
};


return (
  <div className="custom-file-upload">
    <input type="file" id={inputName} onChange={(event) => {setImage(event.target.files[0]); handleImageChange(event)}} />
    <label htmlFor={inputName} id="fileInputLabel">
        {selectedImage ? (
          <img src={selectedImage} style={{width: '250px', maxHeight: 290}} alt="Preview" />
        ) : (
            <img src={addImage} style={{width: '50px'}} alt='add'/>
        )}
      </label>
    </div>
  );
};

export default ImageUpload
