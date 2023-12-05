import React from 'react'
import Countdown from 'react-countdown';

import {Link} from 'react-router-dom';
const MyCountDown = ({link}) => {
    const targetDate = new Date('2024-01-01T00:00:00');
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <span>Результаты тут <Link to={'https://www.instagram.com/kinetic.store.md/'}>kinetic.store.md</Link></span>;
        } else {
          return (
            <span style={{fontSize: 20, fontWeight: 700}}>
               <p style={{fontSize: 16, fontWeight: 700, textAlign: 'center'}}>до конца <Link to={link}><u>розыгрыша</u></Link></p>
              {days} дн {hours} ч {minutes} м {seconds} с
            </span>
          );
        }
      };
  return (
    <Countdown date={targetDate} renderer={renderer}/>
  )
}

export default MyCountDown
