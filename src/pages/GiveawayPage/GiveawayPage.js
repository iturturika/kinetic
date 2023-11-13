import React from 'react'
import './GiveawayPage.scss'
import { Link } from 'react-router-dom'
import banner from '../../assets/img/banner.jfif'
import MyCountDown from '../../components/MyCountDown/MyCountDown'

const GiveawayPage = () => {
    const [ifClickNext, setIfClickNext] = React.useState("banner");
    const [ifSubmited, setIfSubmited] = React.useState(false);
  return (
    <div className='giveaway-block__wrap'>
        <div className='giveaway-block'>
            {ifClickNext === "banner" ?
            <div className='giveaway-block__banner' style={{}}>
                <img src={banner} alt='banner' style={{marginBottom: '30px'}}></img>
                <button className='giveaway-next-button' onClick={() => {setIfClickNext("conditions")}}>Далее</button>
            </div>
            :
            ifClickNext === "conditions" ?
            <div className='giveaway-block__content1'>
                <h2>Условия</h2>
                <ol>
                    <li>Поставить лайк на <Link to={'#'}>пост с конкурсом</Link></li>
                    <li>Написать комментарий под <Link to={'#'}>постом с конкурсом</Link> указав 2 друзей</li>
                    <li>Подписаться на спонсоров:</li>
                    <ul>
                        <li><Link to={'#'}>kinetic.store.md</Link></li>
                        <li><Link to={'#'}>kinetic.store.md</Link></li>
                        <li><Link to={'#'}>kinetic.store.md</Link></li>
                    </ul>
                    <li>Указать свой инстаграм на нашем сайте</li>
                </ol>
                <button className='giveaway-next-button' onClick={() => {setIfClickNext("end")}}>Далее</button>
                <p style={{opacity: '0.5', textAlign: 'center'}}>Важно: Все условия должны быть выполнены</p>
            </div>
            :
            ifSubmited ? <div className='giveaway-block__content1'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 style={{textAlign: 'center'}}>Готово, ждите результатов)</h2>
                <MyCountDown />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            :
            <div className='giveaway-block__content1'>
                <h2 style={{textAlign: 'center'}}>Укажите свой инстаграм ниже</h2>
                <input placeholder='kinetic.store.md'></input>
                <label style={{textAlign: 'center'}}>Напишите какие вещи или бренды вы бы хотели видеть у нас</label>
                <textarea placeholder='...'></textarea>
                <button className='giveaway-next-button' onClick={() => {setIfSubmited(true)}}>Участвовать</button>
                <p style={{opacity: '0.5', textAlign: 'center'}}>Важно: Все условия должны быть выполнены</p>
            </div>}
        </div>
    </div>
  )
}

export default GiveawayPage
