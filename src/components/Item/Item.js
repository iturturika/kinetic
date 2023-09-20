import React from 'react'
import './Item.scss';
import itemImg1 from '../../assets/img/itemImg1.jpg';

const Item = ({setOnClickItem}) => {
  return (
    <div className='item' onClick={() => {setOnClickItem(true)}}>
      <img src={itemImg1} alt='itemImg' className='item-image' draggable="false"></img>
      <h3 className='item-title'>Cavempt hoodie</h3>
      <p className='item-price'>12000MDL</p>
      <p style={{fontSize: 16, color: "#F95D51", marginTop: 5}}>out of stock</p>
    </div>
  )
}

export default Item
