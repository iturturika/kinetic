import React from 'react'
import './Header.scss';
import logoImg from '../../assets/img/logo.svg';
// import cartImg from '../../assets/img/cart.svg';


import {Link} from 'react-router-dom';
import MyCountDown from '../MyCountDown/MyCountDown';

const Header = ({setOnClickCart}) => {
  
  // const bodyElement = document.body;

  return (
    <header className='header'>
        <div className='header-wrap'>
            <Link to={'/shop'}><img src={logoImg} className='logo' alt={'logo'}></img></Link>
            <div className='header-socials'>
              {/* <Link to={'/add-item'}><button className='create-item-button'>Создать</button></Link> */}
            </div>
            {/* <img src={cartImg} className='cart' alt={'cart'} onClick={() => {setOnClickCart(true); bodyElement.style.overflowY = 'hidden';}}></img> */}
        </div>
    </header>
  )
}

export default Header
