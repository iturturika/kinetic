import React from 'react'
import './GiveawayPage.scss'
import { Link } from 'react-router-dom'
import banner from '../../assets/img/banner.png'
import MyCountDown from '../../components/MyCountDown/MyCountDown'
import axios from 'axios'

const GiveawayPage = () => {
    const [ifClickNext, setIfClickNext] = React.useState("banner");
    const [ifSubmited, setIfSubmited] = React.useState(false);
    const [nickname, setNickname] = React.useState('');
    const [answer, setAnswer] = React.useState('');
    const [errorMsg, setErrorMsg] = React.useState([]);

    const participate = async (nickname, answer) => {
        try{
            const res = await axios.post(process.env.REACT_APP_BE_URL + '/participants', {
                nickname: nickname,
                description: answer
            });
            if(res.status === 200){
                setIfSubmited(true);
            }
        } catch(err){
            setErrorMsg(err.response.data);
        }
    }
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
                    <li>Поставить лайк на пост с конкурсом</li>
                    <li>Сделать репост в сторис с отметкой нас</li>
                    <li>Подписаться на:</li>
                    <ul>
                        <li><Link to={'https://instagram.com/kinetic.store.md'}>kinetic.store.md</Link></li>
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
                <input placeholder='kinetic.store.md' value={nickname} onChange={(event) => {setNickname(event.target.value)}}></input>
                <label style={{textAlign: 'center'}}>Напишите какие вещи или бренды вы бы хотели видеть у нас</label>
                <textarea placeholder='...' value={answer} onChange={(event) => {setAnswer(event.target.value)}}></textarea>
                {
                    Array.isArray(errorMsg) ?
                    errorMsg.map((err) => {
                        return(
                            <p style={{color: 'red', marginBottom: 10}} key={err.msg}>{err.msg}</p>
                        )
                    })
                    : <p style={{color: 'red', marginBottom: 10}} >Вы уже участвуете</p>
                }
                <button className='giveaway-next-button' onClick={() => {participate(nickname, answer)}}>Участвовать</button>
                
                <p style={{opacity: '0.5', textAlign: 'center'}}>Важно: Все условия должны быть выполнены</p>
            </div>}
        </div>
    </div>

  )
}

export default GiveawayPage
