import React from 'react'
import './Item.scss';
import itemImg1 from '../../assets/img/itemImg1.jpg';

const Item = () => {
  return (
    <div className='item'>
      <img src={itemImg1} alt='itemImg' className='item-image'></img>
      <h3 className='item-title'>Cavempt hoodie</h3>
      <p className='item-price'>12000MDL</p>
    </div>
  )
}

export default Item
