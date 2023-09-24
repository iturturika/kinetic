import React from 'react'
import './CartItem.scss'
import cartItemImg from '../../assets/img/itemImg1.jpg';
import crestImg from '../../assets/img/crestImg.svg';
import plusImg from '../../assets/img/plusImg.svg';
import minusImg from '../../assets/img/minusImg.svg';

const CartItem = () => {
  return (
    <div className='cart-item'>
        <img src={cartItemImg} alt='cart-item' className='cart-item-img'></img>
        <div className='cart-item-info'>
          <p style={{fontSize: 16, fontWeight: 700}}>LABEL FOR THIS ZIP HOODIE</p>
          <p style={{fontSize: 12}}>size: M</p>
          <p style={{fontSize: 12}}>color: black</p>
        </div>
        <div className='cart-item-controls'>
          <img src={minusImg} alt='minus'></img>
          <p className='cart-item-count'>1</p>
          <img src={plusImg} alt='plus'></img>
          <p className='cart-item-price'>1 300 mdl</p>
          <img src={crestImg} alt='crest'></img>
        </div>
    </div>
  )
}

export default CartItem
