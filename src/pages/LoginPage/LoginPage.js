import React from 'react'
import './LoginPage.scss'
import axios from 'axios';

const LoginPage = ({setAccessToken}) => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const authorization = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post(process.env.REACT_APP_BE_URL + '/auth/login', {
                login: login,
                password: password
            });
            if(res.status === 200){
                setAccessToken(res.data.token);
                sessionStorage.setItem('accessToken', res.data.token);
            }
        } catch (err) {
            return err;
        }
    }
  return (
    <form className='login-page-form'>
        <input type='text' placeholder='login:' value={login} onChange={(event) => {setLogin(event.target.value)}}/>
        <input type='password' placeholder='password:' value={password} onChange={(event) => {setPassword(event.target.value)}}/>
        <button className='login-button' onClick={(event) => {authorization(event)}}>Войти</button>
    </form>
  )
}

export default LoginPage
