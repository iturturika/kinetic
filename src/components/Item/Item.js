import React from 'react'
import './Item.scss';

const Item = ({setOnClickItem, id, title, price, image}) => {
  const bodyElement = document.body;

  return (
    <div className='item' onClick={() => {setOnClickItem(id); bodyElement.style.overflowY = 'hidden';}}>
      <img src={image} alt='itemImg' className='item-image' draggable="false"></img>
      <h3 className='item-title'>{title}</h3>
      <p className='item-price'>{price}mdl</p>
      {/* <p style={{fontSize: 16, color: "#F95D51", marginTop: 5}}>out of stock</p> */}
    </div>
  )
}

export default Item
