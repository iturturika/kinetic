import React from 'react'
import './Header.scss';
import logoImg from '../../assets/img/logo.svg';
import cartImg from '../../assets/img/cart.svg';
import {Link} from 'react-router-dom';

const Header = ({setOnClickCart}) => {
  
  const bodyElement = document.body;

  return (
    <header className='header'>
        <div className='header-wrap'>
            <Link to={'/'}><img src={logoImg} className='logo' alt={'logo'}></img></Link>
            <img src={cartImg} className='cart' alt={'cart'} onClick={() => {setOnClickCart(true); bodyElement.style.overflowY = 'hidden';}}></img>
        </div>
    </header>
  )
}

export default Header
