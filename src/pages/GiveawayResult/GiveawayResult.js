import React from 'react'
import './GiveawayResult.scss'
import axios from 'axios';
import LoginPage from '../LoginPage/LoginPage';
const GiveawayResult = () => {
    const [nickname, setNickname] = React.useState('*********');
    const [answer, setAnswer] = React.useState('*********');
    const [total, setTotal] = React.useState('*********');
    const [accessToken, setAccessToken] = React.useState(sessionStorage.getItem('accessToken'));
    const getCount = async () => {
        try{
            const res = await axios.get(process.env.REACT_APP_BE_URL + '/count');
            setTotal(res.data);
        } catch(err){
            return err;
        }
    }

    const getParticipant = async () => {
        try{
            const res = await axios.get(process.env.REACT_APP_BE_URL + '/random-participant', {
                headers: {
                    Authorization: "Bearer " + accessToken
                }
            });
            setNickname(res.data.nickname);
            setAnswer(res.data.description);
        } catch(err){
            return err;
        }
    }

    React.useEffect(() => {
        getCount();
    }, [])
  return (
    accessToken ?
    <div className='giveaway-block__wrap' style={{flexDirection: 'column'}}>                <h1 style={{textAlign: 'center'}}>Всего участвует: {total}</h1>
      <div className='giveaway-block__content1' style={{height: '350px'}}>
                <h2>Instagram: {nickname}</h2>
                <p style={{textAlign: 'center', marginTop: 25, marginBottom: 25}}>Ответ: {answer}</p>
                <button className='giveaway-next-button' style={{width: '300px'}}  onClick={() => {getParticipant()}}>Определить победителя</button>
            </div>
    </div>
        :
        <LoginPage setAccessToken={setAccessToken}/>
  )
}

export default GiveawayResult
