import React from 'react'
import './Cart.scss'

const Cart = ({setOnClickCart}) => {
  return (
    <div className='cart-overlay' onClick={() => {setOnClickCart(false)}}>
      <div className='cart-block' onClick={(event) => {event.stopPropagation()}}>
        <h3>Cart</h3>sdfsds
      </div>
    </div>
  )
}

export default Cart
