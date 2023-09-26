import React from 'react'
import './Footer.scss';
// import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
        <ul className='footer-wrap'>
            {/* <li><Link to={"/info#delivery"}>ДОСТАВКА</Link></li>
            <li><Link to={"/info#payment"}>ОПЛАТА</Link></li>
            <li><Link to={"/info#contacts"}>КОНТАКТЫ</Link></li> */}
            {/* <li><Link to={"#"}>INSTAGRAM</Link></li>
            <li><Link to={"#"}>TikTok</Link></li> */}
            <li>KINETIC | All rights reserved ©</li>
        </ul>
    </footer>
  )
}

export default Footer
