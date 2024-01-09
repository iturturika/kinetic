import React from 'react'
import './WelcomePage.scss'
import { Link } from 'react-router-dom'
import whiteImg from '../../assets/img/white_logo.svg'

const WelcomePage = () => {
  return (
    <div className='welcome-page-wrap'>
      <div className='welcome-page-logo'>
        <img src={whiteImg} alt='#'></img>
        <Link to={'/shop'} style={{color: '#fff'}}>Go to the shop</Link>
      </div>
      <p style={{color: '#fff', position: 'absolute', margin: '0 auto', bottom: '20px'}}>KINETIC © ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default WelcomePage
