import React from 'react'
import './AdminMainPage.scss'
import AdminItem from '../../components/AdminItem/AdminItem'
import axios from 'axios'
import LoginPage from '../LoginPage/LoginPage'
import Search from '../../components/Search/Search'
import CategoryButton from '../../components/CategoryButton/CategoryButton'
const AdminMainPage = () => {
  const [items, setItem] = React.useState([]);
  const [accessToken, setAccessToken] = React.useState(sessionStorage.getItem('accessToken'));
  const [title, setTitle] = React.useState('');
  const [titleInput, setTitleInput] = React.useState('');
  const [status, setStatus] = React.useState('');

  React.useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_BE_URL + `/items?title=${title}&categories=&label=&status=${status}`);
        setItem(res.data);
      } catch (err) {
        return err;
      }
    };
    getItems();
  }, [title, status])
  return (
      accessToken ?
        <div className='admin-main-page-wrap'>
          <Search setTitle={setTitle} titleInput={titleInput} setTitleInput={setTitleInput}/>
          <CategoryButton nameCategory={'APROVED'} value={'APROVED'} setCategories={setStatus} style={status === 'APROVED' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
          <CategoryButton nameCategory={'WAITING'} value={'WAITING'} setCategories={setStatus} style={status === 'WAITING' ? {boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset'} : null}/>
          <div className='category-button' onClick={() => {setTitle(''); setTitleInput(''); setStatus('')}}>
          <p>Сбросить</p>
        </div>
          {
            items ? items.map((item) => {
              return <AdminItem 
                key={item._id} 
                id={item._id} 
                title={item.title} 
                description={item.description} 
                price={item.price} 
                categories={item.categories} 
                label={item.label} 
                status={item.status} 
                imagePaths={item.imagePaths} 
                instagramUrl={item.instagramUrl} 
                size={item.size}
                priority={item.priority}
              />
            }) : null
          }
        </div>
      :
      <LoginPage setAccessToken={setAccessToken}/>
  )
}

export default AdminMainPage
