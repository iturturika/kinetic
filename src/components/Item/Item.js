import React from 'react'
import './Item.scss';

const Item = ({setOnClickItem, id, title, price, image, label}) => {
  const bodyElement = document.body;

  return (
    <div className='item' onClick={() => {setOnClickItem(id); bodyElement.style.overflowY = 'hidden';}}>
      <img src={image} alt='itemImg' className='item-image' draggable="false"></img>
      <h3 className='item-title'>{title.substring(0, 20)}...</h3>
      <p className='item-price'>{price}mdl</p>
      {/* {
        label === 'LEGIT' ? <p style={{fontSize: 16, color: "#3ee63e", marginTop: 5, borderRadius: 15, border: '2px solid #3ee63e', width: 80}}>Legit</p> : null
      } */}
    </div>
  )
}

export default Item
