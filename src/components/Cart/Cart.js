import React from 'react'
import './Cart.scss'
import CartItem from '../CartItem/CartItem'


const Cart = ({setOnClickCart}) => {
  return (
    <div className='cart-overlay' onClick={() => {setOnClickCart(false)}}>
      <div className='cart-block' onClick={(event) => {event.stopPropagation()}}>
        <h3 className='cart-heading'>Placing an order</h3>
        <CartItem />
        <p className='subtotal-cart'>Subtotal: 1 200 mdl</p>
        <h3 style={{fontSize: 24}}>Delivery</h3>
        <input className='cart-input' placeholder='Name'></input>
        <input className='cart-input' placeholder='City'></input>
        <input className='cart-input' placeholder='Postal code'></input>
        <input className='cart-input' placeholder='Email'></input>
        <p style={{textAlign: 'end'}}>Subtotal: 12 300 mdl</p>
        <p style={{textAlign: 'end'}}>Worldwide - shipping: 2 300 mdl</p>
        <p style={{fontSize: 18, fontWeight: 700, textAlign: 'end', marginTop: 10, marginBottom: 30}}>Total: 22 200 mdl</p>
        <button className='pay-button-cart'>PAY</button>
      </div>
    </div>
  )
}

export default Cart
