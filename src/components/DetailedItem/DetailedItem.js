import React from 'react'
import './DetailedItem.scss'
import closeIcon from '../../assets/img/closeIcon.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
const DetailedItem = ({setOnClickItem, onClickItem}) => {
  const bodyElement = document.body;
  const [item, setItem] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [imagePaths, setImagePaths] = React.useState([]);
  React.useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BE_URL + `/items/${onClickItem}`);
        setItem(res.data);
        setSelectedImage(res.data.imagePaths[0]);
        setImagePaths(res.data.imagePaths);
      } catch (err) {
        return err;
      }
    };
    getItems();
  }, [onClickItem]);

  return (
    item ? 
    <div className='overlay'>
    <img src={closeIcon} alt="X" className='close-icon' onClick={() => {setOnClickItem(false); bodyElement.style.overflowY = 'auto';}}></img>
    <div className='detailed-item-block'>
      <div className='detailed-item-galery'>
        <img src={process.env.REACT_APP_BE_URL + '/' + selectedImage} alt='item' className='detailed-image' draggable="false"></img>
        <div className='detailed-item-galery-photo'> 
          {
            imagePaths.map((image, index) => {
              return <img key={index} src={process.env.REACT_APP_BE_URL + '/' + image} alt='item' onClick={() => {setSelectedImage(image)}} className='detailed-image-miniature' draggable="false" onLoad={setIsLoaded(true)} ></img>
            })
          }
        </div>
      </div>
      <div className='detailed-info-block'>
          <h3 className='detailed-item-header'>{item.title}</h3>
          <p className='detailed-item-price'>{item.price}mdl</p>
          {
            item.label === 'LEGIT' ? <p style={{fontSize: 16, color: "#3ee63e", marginTop: 5, borderRadius: 15, border: '2px solid #3ee63e', width: 80, textAlign: 'center'}}>Legit</p> : null
          }
          <label style={{marginTop: "20px", marginBottom: "10px"}}>Size</label>
          <select id="size" name="size">
              <option value="Size">{item.size}</option>
          </select>
          <Link to={item.instagramUrl} className='buy-button'>Связаться с продавцом</Link>
          <h4 style={{fontWeight: 700}}>Description:</h4>
          <p className='detailed-item-description'>
            {item.description}
          </p>
      </div>
    </div>
  </div> : null
  )
}

export default DetailedItem
