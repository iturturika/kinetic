import React from 'react'
import './Footer.scss';
// import {Link} from 'react-router-dom';

import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='footer'>
        <ul className='footer-wrap'>
            {/* <li><Link to={"/info#delivery"}>ДОСТАВКА</Link></li>
            <li><Link to={"/info#payment"}>ОПЛАТА</Link></li>
            <li><Link to={"/info#contacts"}>КОНТАКТЫ</Link></li> */}
            <li><Link to={"https://instagram.com/kinetic.store.md?igshid=OGQ5ZDc2ODk2ZA=="}>INSTAGRAM</Link></li>
            <li><Link to={"https://www.tiktok.com/@kinetic.store?_t=8gJHGRVGAsw&_r=1"}>TikTok</Link></li>
            <li>KINETIC | All rights reserved ©</li>
        </ul>
    </footer>
  )
}

export default Footer
